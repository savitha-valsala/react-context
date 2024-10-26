import  {createContext, useState, useEffect} from "react";

const navigateContext = createContext();
function NavigationProvider({children}){
    const [currentPath, setCurrentPath] = useState(window.location.pathname);
    useEffect =(()=>{
        const handler =()=>{
            setCurrentPath(window.location.pathname);
        }
        window.addEventListener('popstate',handler);
        return ()=>{
            window.removeEventListener('postate',handler);
        }
    },[]);
    const navigate =(to)=>{
        window.history.pushState({},'',to);
        setCurrentPath(to);
    }
    return(
        <navigateContext.Provider value={{currentPath, navigate}}>
           
            {children}

        </navigateContext.Provider>
    )
}
export {NavigationProvider};
export  {navigateContext};