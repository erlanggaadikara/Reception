import { action, computed, observable } from "mobx";

class Model {
  @observable
  id: string = "";

  @observable
  name: string = "";

  @observable
  img_bg: string = "";

  @observable
  img_bg_items: [] = [];

  @computed
  get getAll() {
    return {
      id: this.id,
      name: this.name,
      img_bg: this.img_bg,
      img_bg_items: this.img_bg_items,
    };
  }

  public async loadData() {}
}

export default observable(Model);
