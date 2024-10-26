import ReactDom  from "react-dom/client";
import { Provider } from "./context";
// import App from "./App";
import Comp from "./component/comps";
import Books from "./component/books";
const el = document.getElementById("root");
const root = ReactDom.createRoot(el);
root.render(
  
  <Provider.Comps>
      <Provider.Book>
      <Comp />
      </Provider.Book>
     </Provider.Comps>  
 
)
