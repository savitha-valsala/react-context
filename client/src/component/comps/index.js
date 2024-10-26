import "./index.css";
import Sidebar from "./Sidebar";
import Route from "./Route";
import AccordianPage from "./pages/AccordionPage";
import DropdownPage from "./pages/DropdownPage";
import ButtonPage from "./pages/ButtonPage";
import ModalPage from "./pages/ModalPage";
import TablePage from "./pages/TablePage";
import Counter from "./pages/CounterPage";
import Books from "../books";
function App(){
  return(<div className="container grid grid-cols-6 mx-auto mt-4 gap-4">
    
          <Sidebar />
    <div className="col-span-5">
    <Route path="/">
        <DropdownPage />              
      </Route>
      <Route path="/accordian">
              <AccordianPage />
      </Route>  
     
      <Route path="/button">
        <ButtonPage />
      </Route>
      <Route path="/modal">
        <ModalPage />
      </Route>
      <Route path="/table">
        <TablePage />
      </Route>
      <Route path="/count">
        <Counter initialCount={10} />
      </Route>
     <Route path="/book">
        <Books />
     </Route>
     
    </div>
  </div>);

};
export default App;

