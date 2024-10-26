// import { useState } from "react";
import {produce} from 'immer';
import {useReducer} from "react";
import Button from "../Button";
import Panel from "../Panel";
//import useCounter from "../hook/use-counter";

function CounterPage({initialCount}){
   // const {count, increment} = useCount(initialCount);

    // const [count, setCount] = useState(initialCount);
    // const [valueToAdd, setValueToAdd] = useState(0);
    const COUNT_INCREMENT = 'increment';
    const VALUE_TO_ADD = 'value-to-add';
    const COUNT_DECREMENT = 'decrement';
    const ADD_VALUE_tO_COUNT ="add-value-to-count";
    const reducer=(state, action)=>{
        switch(action.type){
            case COUNT_INCREMENT:
                state.count = state.count + 1;
                return;
                // return({
                //     ...state,
                //     count:state.count + 1,
                // });
            case VALUE_TO_ADD:
                state.valueToAdd = action.payload;
                return;
                // return({
                //     ...state,
                //     valueToAdd:action.payload,
                // });
            case ADD_VALUE_tO_COUNT:
                state.count = state.count + state.valueToAdd;
                state.valueToAdd = 0;
                return;
                
                // return{
                //     ...state,
                //     count:state.count + state.valueToAdd,
                //     valueToAdd:0
                // }    
            case COUNT_DECREMENT:
                state.count = state.count - 1;
                return;
                    // return({
                    //     ...state,
                    //     count:state.count - 1,
                    // });      

            default:
                return;
               // return state;

        }
        // if(action.type===COUNT_INCREMENT){
            // return({
            //     ...state,
            //     count:state.count + 1,
            // })
        // }
        // if(action.type=== VALUE_TO_ADD){
            // return({
            //     ...state,
            //     valueToAdd:action.payload,
            // })

        // }
        // return state;
       
    }
    const [state, dispatch] = useReducer(produce(reducer), {
        count:initialCount,
        valueToAdd :0
    });

    const increment =()=>{
        //setCount(count + 1);
        dispatch({
            type:COUNT_INCREMENT
        });

    }
    const decrement =()=>{
       // setCount(count - 1);
       dispatch({
        type:COUNT_DECREMENT
       })
    }
    const handleChange =(event)=>{
        const value = parseInt(event.target.value) || 0;
               // console.log(value);
             //   setValueToAdd(value);
             dispatch({
                type:"value-to-add",
                payload:value
             });

    }

 const handleSubmit =(event)=>{
    event.preventDefault();
    // setCount(count + valueToAdd ) ;
    // setValueToAdd(0);
    dispatch({
        type:ADD_VALUE_tO_COUNT
    });

 }
    return (<Panel className="m-3"><h1>Count is {state.count}</h1>
    <div className="flex flex-row">
        <Button onClick={increment}>Increment</Button>
        <Button onClick={decrement}>Decrement</Button>  
    </div> 
         <form onSubmit={handleSubmit}>
            <label>Add Something</label>
            <input 
            type="number" 
            value = {state.valueToAdd || ""}
            onChange={handleChange}
            className="p-2 m-2 bg-grsy-500 border border-gray-50"
            />
            <Button>Add it</Button>
        
        </form>
    </Panel>
    
    )

}
export default CounterPage;