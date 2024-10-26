import {BooksProvider , booksContext} from "./books";
import { NavigationProvider, navigateContext } from "./Navigation";

export const Provider = {"Book" : BooksProvider, "Comps" : NavigationProvider};
    

export const Context = { "Book" : booksContext, "Comps" : navigateContext};
    
