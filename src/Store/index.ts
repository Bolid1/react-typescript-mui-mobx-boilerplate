import { types } from "mobx-state-tree";
import { persist } from "mst-persist";

const LeftMenu = types
  .model("LeftMenu", {
    open: types.optional(types.boolean, false),
  })
  .actions((self) => ({
    setOpen(open: boolean) {
      self.open = open;
    },
  }));

const Store = types.model("Store", {
  leftMenu: types.optional(LeftMenu, {}),
});

export default function createStore() {
  const store = Store.create();

  persist("store", store, {});

  return store;
}
