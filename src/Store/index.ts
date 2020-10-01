import { makeAutoObservable } from "mobx";
import { createContext, useContext } from "react";

class LeftMenu {
  public isOpened = false;

  constructor() {
    makeAutoObservable(this, undefined, {
      autoBind: true,
    });
  }

  open(isOpened: boolean = true) {
    this.isOpened = isOpened;
  }

  toggle() {
    this.isOpened = !this.isOpened;
  }

  close() {
    this.isOpened = false;
  }
}

class UiStore {
  public rootStore: RootStore;
  public leftMenu: LeftMenu;

  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;
    this.leftMenu = new LeftMenu();
  }
}

class DomainStore {
  public rootStore: RootStore;

  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;
  }
}

class RootStore {
  public ui: UiStore;
  public domain: DomainStore;

  constructor() {
    this.ui = new UiStore(this);
    this.domain = new DomainStore(this);
  }
}

const store = new RootStore();
const StoreContext = createContext(store);
const useStore = () => useContext(StoreContext);

export const useUIStore = () => useStore().ui;
export const useDomainStore = () => useStore().domain;

export default useStore;
