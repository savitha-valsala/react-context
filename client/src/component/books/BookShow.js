import {useState} from "react";
import BookEdit from "./BookEdit";
function BookShow({book, onDelete, onEdit}){
    const [editShow, setEditShow] = useState(false);
    const handleClick = ()=>{
        onDelete(book.id);
    }
    const handleEdit = ()=>{
        setEditShow(!editShow);
    }
    const handleSubmit = ()=>{
        setEditShow(false);
    }
    let content =<h4>{book.title}</h4>;
    if(editShow){
        content = <BookEdit onSubmit={handleSubmit} book={book} onEdit={onEdit}/>
    }
    return (<div className="book-show">
        <img alt="images" src={`http://picsum.photos/seed/${book.id}/200/200`}/>
         <div>{content}</div>

        <div className="actions">
            <button className="edit" onClick={handleEdit}>Edit</button>
            <button className="delete" onClick={handleClick}>Delete</button>
        </div>
    </div>)
}
export default BookShow;