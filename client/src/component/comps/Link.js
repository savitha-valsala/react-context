import className from "classnames";
import useNavigation from "../../hook/use-navigation";

function Link({to, children, classname, ActiveClass}){

    const {navigate, currentPath} = useNavigation();

    const classes = className("text-blue-500",classname,
    currentPath === to && ActiveClass
    );

    const handleClick = (event)=>{
       
        if(event.ctrlKey || event.metaKey){
            return;
        }
        event.preventDefault();
        navigate(to);
    }

    return(
        <a className={classes} href={to} onClick={handleClick}>{children}</a>
    );

}
export default Link