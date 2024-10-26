import {GoBell, GoAlert, GoDatabase} from "react-icons/go";
import Button from "../Button";
function ButtonPage(){
  const handleClick=()=>{
    console.log("click");
  }
  const handleMouseover=()=>{
    console.log("mouse over");
  }
  return(<div>
    <div><Button primary rounded onClick={handleClick} className="mb-2"><GoBell className="mr-1" />Click me</Button></div>
    <div><Button secondary rounded outline onMouseOver={handleMouseover}><GoBell className="mr-1"/>secondary</Button></div>
    <div><Button warning><GoAlert className="mr-1"/>warning</Button></div>
    <div><Button success outline><GoBell className="mr-1"/>success</Button></div>
    <div><Button danger><GoDatabase className="mr-1"/>danger</Button></div>
   

  </div>)
};
export default ButtonPage;

