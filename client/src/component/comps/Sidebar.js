import Link from "./Link";

function Sildebar(){
    const links =[
        {label : "Dropdown" , path:"/drops"},
        {label : "Accordian" , path:"/accordian"},
        {label : "Buttons" , path:"/button"},
        {label : "Modal" , path:"/modal"},
        {label : "table" , path:"/table"},
        {label : "counter" , path:"/count"},
        {label : "Books Details" , path:"/book"},
    ];

    const renderedLinks = links.map((link)=>{
       return(
        <Link key={link.label} to={link.path}
         classname="mb-3"
         ActiveClass="font-bold border-l-4 border-l-blue-500 pl-2"
         >{link.label}</Link>
       )

    });
    return(<div className="sticky top=0 grid grid-cols ">
        {renderedLinks}
        
    </div>)

}
export default Sildebar;