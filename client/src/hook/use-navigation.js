import {useContext} from "react";
import {Context} from "../context";

function useNavigation(){
    return useContext(Context.Comps);
}
export default useNavigation;