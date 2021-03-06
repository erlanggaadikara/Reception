import { observable, action, computed, makeAutoObservable } from "mobx";

class MainSingle {
  id: string = "";
  name: string = "";
  img_bg: string = "";
  img_bg_items: [] = [];

  constructor() {
    makeAutoObservable(this, {
      id: observable,
      name: observable,
      img_bg: observable,
      img_bg_items: observable,
      setValue: action,
    });
  }

  set setValue(value: any) {
    this.id = value.id;
    this.name = value.name;
    this.img_bg = value.img_bg;
    this.img_bg_items = value.img_bg_items;
  }
}

class Main extends MainSingle {
  @observable idCurrent: any = "";
  @observable tempMain: MainSingle = new MainSingle();

  @action
  set setAll(all: any) {
    let sa: MainSingle = new MainSingle();
    sa.setValue(all);

    this.tempMain = sa;
  }

  @computed
  get getTemp() {
    return this;
  }

  public async loadData() {}
}

export default observable(Main);
