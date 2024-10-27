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
  return(
          <div className="p-3 ">
            <div className="grid grid-flow-row auto-rows-max gap-2">
              <div className="p-5 text-xl font-bold bg-teal-500 text-slate-50 shadow-lg shadow-teal-500/50 ">
                React - Context Sample Apps
              </div>
              <div className="">
                 
                    <div className="grid grid-cols-4 p-3 ">
                        <div className="shadow-inner shadow-teal-100 p-3">
                            <Sidebar />
                        </div>
                        <div className="col-span-3 border-l-2 p-3 shadow-inner shadow-teal-100">
                                  <Route path="/">
                                    <DropdownPage />              
                                  </Route>
                                  <Route path="/drops">
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
                      </div>

              </div>


            </div>
          </div>


  //   <div className="container grid grid-cols-6 mx-auto mt-4 gap-4  border-2">
  //         <div className="grid grid-rows-2  ">
  //             <div>hed</div>
  //             <div><Sidebar /></div>

  //         </div>
          

  //       <div className="col-span-5">
  //       <Route path="/">
  //           <DropdownPage />              
  //         </Route>
  //         <Route path="/drops">
  //           <DropdownPage />              
  //         </Route>
  //         <Route path="/accordian">
  //                 <AccordianPage />
  //         </Route>  
        
  //         <Route path="/button">
  //           <ButtonPage />
  //         </Route>
  //         <Route path="/modal">
  //           <ModalPage />
  //         </Route>
  //         <Route path="/table">
  //           <TablePage />
  //         </Route>
  //         <Route path="/count">
  //           <Counter initialCount={10} />
  //         </Route>
  //       <Route path="/book">
  //           <Books />
  //       </Route>
        
  //       </div>
  // </div>
  );

};
export default App;

