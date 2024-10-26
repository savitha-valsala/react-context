import  "./index.css";
import {useState, useEffect} from  "react";
import { booksApi } from "../../api";
import BookCreate from "./BookCreate";
import BookList from "./BookList";

function App(){
    const [book, setBook] = useState([]);

    const fetchBooks =async()=>{
      const response = await booksApi.get();
      setBook(response.data);
    }
    //useEffect(()=>{
        fetchBooks();
   // },[setBook]);
    const deleteBook = async(id)=>{
        await booksApi.delete(`/${id}`);

        const updatedBooks = book.filter((book)=>{
            return (book.id !== id );
        });
        setBook(updatedBooks) ;
    }

    const createBook = async (title) =>{

      const response = await booksApi.post("",{
            title:title
        });
       
        const updateBook = [...book ,
            response.data
         ];
        setBook(updateBook);
        // console.log(title);

    }

    const editBookById =async(id, newTitle) =>{
        const response = await booksApi.put(`/${id}`,{
            title : newTitle
        });
        
        const editedBook = book.map((bok)=>{
            if(bok.id === id){
                return {...bok, ...response.data};
            }
            return bok;
        });
        setBook(editedBook) ;
    }

    return (
    <div className="App">
        <h3>Reading List</h3>
        <BookList book={book} onDelete={deleteBook}  onEdit={editBookById} />
        <BookCreate onClick={createBook} />
    </div>
    );
}
export default App;