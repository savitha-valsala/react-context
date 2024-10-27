import {useState} from "react";
import BookEdit from "./BookEdit";
import { GoPencil } from "react-icons/go";
import { GoTrash } from "react-icons/go";
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
    let content =<div className="text-sm italic font-bold text-cyan-700 p-1">{book.title}</div>;
    if(editShow){
        content = <BookEdit onSubmit={handleSubmit} book={book} onEdit={onEdit}/>
    }
    return (
        <div className="border-2 p-2">             

                <div className="grid grid-cols-5 p-2">
                   <div className="shadow-xl"> 
                        <button onClick={handleEdit}><GoPencil /></button>
                    </div>
                   <div className="shadow-xl">
                     <button  onClick={handleClick}><GoTrash /></button> 
                    </div> 
                </div>
                <img alt="images" src={`http://picsum.photos/seed/${book.id}/200/200`}/>
                <div>{content}</div>
    </div>)
}
export default BookShow;