import chokidar from "chokidar";
import * as fs from "fs";

const fileExists = (path) => {
  const exist = fs.existsSync(path);
  if (exist) {
    log(path);
    return true;
  } else {
    log(path, "not exist");
    return false;
  }
};

const writeToPath = (path) => (file, newDir, content) => {
  fs.mkdir(`${path}/${newDir}`, (err) => {
    if (!err) {
      const filePath = `${path}/${newDir}/${file}`;
      fs.writeFile(filePath, content, (err) => {
        if (err) {
          log(err);
        } else {
          return log(`Make a new folder Success at ${path}`);
        }
      });
    } else {
      log("err", err);
    }
  });
};

const template = {
  page: () => `/** @jsxImportSource @emotion/react */
    import { css, jsx } from "@emotion/react";
    import { observer } from "mobx-react-lite";
    
    export default observer(() =>{
        return <div><div>
    })

    `,

  model: () => `
    import { observable, computed, action } from "mobx";
    
    class Main {
      @observable
      id: number = 0;

      @observable
      name: string = "

      @action
      set setName(name: string){
        this.name = name
      }

      @computed
      get getName(){
        return this.name
      }
    }

    export default observable(Main)
    `,

  qc: () => `export default {
    blue: "#5CBAEE",
    white: "#FFFFFF",
    gray: "#6F6868",
    black: "#000000",
    transparentBlack: "rgba(3, 3, 3, 0.5)",
  };`,
};

const createFiles = (path, name, files) => {
  if (name !== "Theme") {
    const missingBool = (file) => !fileExists(`${path}\\${file.dir}`);

    const chkAllMissing = (acc, cur) => acc && cur;

    const nonExists = Object.values(files)
      .map(missingBool)
      .reduce(chkAllMissing);

    log("nonexist", nonExists);

    if (nonExists) {
      const writeFile = writeToPath(path);
      Object.entries(files).forEach(([type, fileName]) => {
        writeFile(fileName.file, fileName.dir, template[type]());
      });
    }
  }
};

const log = console.log.bind(console);

chokidar.watch("web/src/Page/Theme/**").on("addDir", (path, event) => {
  const files = {
    page: { dir: "Page", file: "index.tsx" },
    model: { dir: "Model", file: "index.ts" },
    qc: { dir: "QC", file: "color.ts" },
  };

  const name = path.replace(/.*\/Theme\//, "");
  if (!name.includes("/")) createFiles(path, name, files);
});
