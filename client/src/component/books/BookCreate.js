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
             <div className="grid grid-flow-row auto-rows-max gap-2">
                <div className="text-slate-400 font-bold">Add Title</div>
                <div>
                <form onSubmit={handleSubmit}>
                        <div className="grid grid-rows-2 gap-2"> 
                            <div>
                                <input className="input" value={title} onChange={handleChange} />
                            </div>
                            <div>
                                <button className="bg-cyan-500 shadow-lg shadow-cyan-200 p-2 text-slate-50 rounded-full">Click Me</button>
                            </div>
                        </div>
                       
                       
                    </form>
                </div>
                 

             </div>
             );
}
export default BookCreate;