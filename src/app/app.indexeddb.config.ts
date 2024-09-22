import { IndexedDB } from "./indexeddb/indexeddb.class";

export const INDEXEDDB_NAME = "IDBDatabase";

export const INDEXEDDB_VERSION = 1;

export const INDEXEDDB_STORE_NAME = "periodic";

export const INDEXEDDB_STORE = IndexedDB.store({
  calculations: { keyPath: "id", autoIncrement: true },
  paginator: { keyPath: "id", autoIncrement: true },
  periodic: {
    keyPath: "id",
    autoIncrement: true,
    index: [
      { name: "name", keyPath: "name", options: { unique: false } },
      { name: "position", keyPath: "position", options: { unique: false } },
      { name: "weight", keyPath: "weight", options: { unique: false } },
      { name: "symbol", keyPath: "symbol", options: { unique: true } },
    ]
  }
});
