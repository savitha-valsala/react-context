import {createContext, useState} from "react";
const booksContext = createContext();
function BooksProvider({children}){
    const [count, setCount] = useState(5);
    const valueToShare = {
        count,
        incrementCount : ()=>{
            setCount(count +1);
        }
    };
    return(
        <booksContext.Provider value={valueToShare}>
            {children}
        </booksContext.Provider>
    );
    
}
export {BooksProvider};
export  {booksContext};