import { useState } from "react";
import Dropdown from "../Dropdown";
function DropdownPage(){
  const options =[
    {label:'Red' , value:'red'},
    {label:'Blue' , value:'blue'},
    {label:'Green' , value:'green'},
  ];
  const [selection,setSelection ] = useState(null);
  const handleSelect =(option)=>{
    setSelection(option);
  }
return(
  <div className="flex">
<Dropdown options={options} value={selection} onChange={handleSelect}/>

</div>
);

};
export default DropdownPage;

