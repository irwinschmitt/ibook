import { Store } from "vuex";
import { getModule } from "vuex-module-decorators";
import Books from "@/store/books";

// eslint-disable-next-line import/no-mutable-exports
let books: Books;

function initializeStores(store: Store<any>): void {
  books = getModule(Books, store);
}

export { initializeStores, books };
