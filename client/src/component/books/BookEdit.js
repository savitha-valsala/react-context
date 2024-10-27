import {useState}  from "react";
function BookEdit({book, onEdit, onSubmit}){
    const [title, setTitle] = useState(book.title);
    const handleChange = (event) =>{
        setTitle(event.target.value);
    }
    const handleSubmit =(event) =>{
        event.preventDefault();
        onEdit(book.id, title);
        onSubmit();
    }
    return (<div >
        <form className="" onSubmit={handleSubmit}>
            <div className="grid grid-rows-3 gap-1 inner-shadow border-2 p-2 bg-slate-100"> 
                <div className="text-sm font-bold ">
                     Title
                </div>
                <div>
                   <input className="input" value={title} onChange={handleChange}/>
                </div>
                <div>
                     <button className="bg-cyan-500 shadow-lg text-sm text-slate-50 shadow-cyan-300 rounded-lg p-2">Save</button>
                </div>
            </div>       
            

        </form>
    </div>)
}
export default BookEdit;