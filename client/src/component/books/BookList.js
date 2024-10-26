import {useContext} from "react";
import BookShow from "./BookShow";
import {Context} from "../../context";
function BookList({book , onDelete, onEdit}){
const {count, incrementCount} = useContext(Context.Book);
    const booklist = book.map((bk)=>{
        return <BookShow key={bk.id} book={bk} onDelete={onDelete} onEdit={onEdit}/>

    });
    return (<div className="book-list">{count}
    {/* <button onClick={incrementCount}>click me</button> */}
     {booklist} 
      </div>)
}
export default BookList;