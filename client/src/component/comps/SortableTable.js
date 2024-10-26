import Table from "./Table";
import {GoArrowDown, GoArrowUp} from "react-icons/go";
import useSort from "../../hook/use-sort";
function SortableTable(props){
    const {config, data} = props ;
    const {sortOrder,sortBy, sortedData, setSortColumns} = useSort(config, data);
   
    const updatedConfig = config.map((column)=>{
        if(!column.sortValue){
            return column;
        }
        return {...column , header:()=>
             <th className ="cursor-pointer hover:bg-gray-100"
            onClick={()=>setSortColumns(column.label)}>
            <div className="flex item-center">
            {getIcon(column.label, sortOrder, sortBy )}
            {column.label} 
            </div>
            </th>};

    });
  
   return( <Table {...props} data={sortedData} config={updatedConfig} /> ) ;
   
}
function getIcon(label, sortOrder, sortBy){
    if(label !== sortBy){
        return (<div>
        <GoArrowUp />
        <GoArrowDown />
        </div>
        ) ;
    }
     if(sortOrder === null){
        return (<div>
            <GoArrowUp />
            <GoArrowDown />
            </div>
            ) ;
    }
    else if(sortOrder === 'asc'){
        return (<div>
            <GoArrowUp />           
            </div>
            ) ;
    } 
    else if(sortOrder === 'desc'){
        return (<div>           
            <GoArrowDown />
            </div>
            ) ;
    } 
}
export default SortableTable ;