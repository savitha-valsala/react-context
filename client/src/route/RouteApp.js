import React from "react";
import {createBrowserRouter, RouterProvider, createRoutesFromElements, Route} from "react-router-dom";
import history from "./history";
import Books from "../component/books";
import Comps from "../component/comps";
import Home  from "../component/Home";
class  RouteApp extends React.Component{   

 route = createBrowserRouter(
  createRoutesFromElements(
    <Route history={history}>   
     <Route path="/" element={<Home />} />             
      <Route path="/books" element={<Books />} />         
      <Route path="/comps" element={<Comps />} />    

      {/* <Route path="*" element={<ErrorPage />} />         */}
    </Route>
  )
);
    render(){
      return(
        <div className=" bg-blend-lighten hover:bg-blend-darken">
        <div className="relative " >
          
        <RouterProvider router={this.route} />
        
        </div>         
     </div>

      );
    } 
}
export default RouteApp;