import { useReducer } from "react";

const initialState={

    input:"",
    color:"bg-yellow-400",
    text:"Normal",
};


function reducer(state,action) {

    switch(action.type){

        case "SET_INPUT":{

            const value=String(action.payload||"").toUpperCase();

            if(value==="ON"){

                return{...state,input:value,color:"bg-green-500",text:"ON"};

            }else if(value==="OFF"){

                return{...state,input:value,color:"bg-red-500",text:"OFF"};
            }else {
                return{...state,input:value,color:"bg-yellow-400",text:"Normal"}
            }

            
        }
        default:
            return state;
    }
    
}

export default function OnOffLiveReducer(){

    const [state,dispatch]=useReducer(reducer,initialState);

    return(

  <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 space-y-6">

    <h2 className="text-2xl font-semibold text-gray-700">
        Handle ON/OFF(Live)- useReducer
        </h2>

        <input
        
        type="text"
        placeholder="Type ON or OFF"
        className="border-2 border-gray-300 rounded-lg p-3 text-center focus:outline-none focus:ring-2 focus:ring-blue-400"
        onChange={(e)=>

            dispatch({type:"SET_INPUT", payload:e.target.value})
        }

        />

        <div
        
        className={`w-40 h-40 flex items-center justify-center text-white font-bold text-xl rounded-2xl shadow-md transition-all duration-300 ${state.color}`}
        
        >
 
            {state.text}

        </div>




  </div>

 



    )


}