import {Fragment} from "react";
 function Table({data, config, keyFn}){
const renderHeader = config.map((header)=>{
    if(header.header){
        return (<Fragment key={header.label}>{header.header()}</Fragment>)
    }
    return(
        <th key={header.label}>{header.label}</th>
    )
})

    const renderedRows = data.map((rowData)=>{
        const rendercolumns = config.map((column)=>{
            return(
                <td className="p-2" key={column.label}> {column.render(rowData)}</td>
            );
        }) ;

        return (
                <tr className="border-b" key={keyFn(rowData)}>
                    {rendercolumns}
                </tr>

        );
    }
    
    );
    return(   
        <table className="table-auto border-spacing-2">
            <thead>
                <tr className="border-b-2">
                   {renderHeader}
                </tr>
            </thead>
           
            <tbody>
            {renderedRows}
                
            </tbody>

        </table>   
    )

}
export default Table;