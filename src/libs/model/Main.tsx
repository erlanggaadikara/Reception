import { observer } from "mobx-react-lite";
import { observable } from "mobx";

class Main {
  id: string = "";
  name: string = "";
  img_bg: string = "";
  img_bg_items: [] = [];

  set setAll(all: any) {
    this.id = all.id;
    this.name = all.name;
    this.img_bg = all.img_bg;
    this.img_bg_items = all.img_bg_items;
  }

  public async loadData() {}
}

export default observable(Main);
