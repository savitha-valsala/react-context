import {useState} from "react";
function BookCreate({onClick}){
    const [title, setTitle] = useState('');
    const handleChange = (event) =>{
        setTitle(event.target.value);
    }
    const handleSubmit = (event) =>{
        event.preventDefault();
        onClick(title);
        setTitle("");
    }
    
    return (    
             <div className="book-create">
                <h5>Add Title</h5>
                    <form onSubmit={handleSubmit}>
                        <input className="input" value={title} onChange={handleChange} />
                        <button className="button">Click Me</button>
                    </form>

             </div>
             );
}
export default BookCreate;