import Table from "../Table";
import SortableTable from "../SortableTable";

function TablePage(){
    const data = [
        {name : "Mango" , color : "bg-yellow-500", score : "5", price:"32"},
        {name : "Orrange" , color : "bg-yellow-200", score : "3", price:"40.5"},
        {name : "Apple" , color : "bg-green-500", score : "4", price:"65"},
        {name : "Banana" , color : "bg-yellow-300", score : "1", price:"28"},
        {name : "Grape" , color : "bg-green-300", score : "4.5", price:"52.5"},
    ];
    const config =[
        {label : "name",
         render : (data)=>data.name,
        sortValue: (data)=>data.name
        }, 
        {label : "color",
         render : (data)=><div className={`p-2 m-3 ${data.color}`} />,
        },
        {label : "score",
         render: (data)=>data.score,
         header: ()=><th className="bg-red-500">Score</th>,
         sortValue: (data)=>data.score
        },
        {label : "Price / Kg",
        render: (data)=>data.price,
        header: ()=><th className="bg-red-500">Price</th>,
        sortValue: (data)=>data.price
       }
    ];
    const keyFn = (data)=> {
        return(data.name);
    };
    return(<div>
        <h4 className="p-2 m-3 bg-gray-200">Static Table</h4>
        <Table data={data} config={config} keyFn={keyFn}/>
        <h4 className="p-2 m-3 bg-gray-200">Sortable / Data Table</h4>
        <SortableTable data={data} config={config} keyFn={keyFn}/>
    </div>)
}
export default TablePage;