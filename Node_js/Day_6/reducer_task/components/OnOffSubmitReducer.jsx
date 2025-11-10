import React,{useReducer} from "react";


const iniialState={

    input:"",
    color:"bg-yellow-400",
    text:"Normal",
};


function reducer(state,action) {

    switch(action.type){
        case "SET_INPUT":
            return {...state, input:action.payload};

            case "SUBMIT":{

                const inputValue =state?.input? state.input.toString().toUpperCase():"";

                let color,text;

                if(inputValue==="ON"){

                    color="bg-green-500";
                    text="ON";
                }else if(inputValue==="OFF"){

                    color ="bg-red-500";
                    text="OFF";
                }else {
                    color="bg-yellow-400";
                    text="Normal";
                }

                return {...state, color, text};
            }

            default:

            return state;
    }

    
}

export default function OnOffSubmitReducer(){

const[state,dispatch]=useReducer(reducer,iniialState);

const handleSubmit=(e)=>{

    e.preventDefault();
    dispatch({type:"SUBMIT"});
}

return(

<div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 space-y-6">
    <h2 className="text-2xl font-semibold text-gray-700">
        Handle ON/OFF (submit)-UseReducer
    </h2>

 <form
 
  onSubmit={handleSubmit}
 className="flex flex-col items-center space-y-4"  
 >
  
  <input 
  
  type="text"
  placeholder="Type ON or OFF"
  className="border-2 border-gray-300 rounded-lg p-3 text-center focus:outline-none focus:ring-2 focus:ring-blue-400" 
  value={state.input}
  onChange={(e)=>
 
     dispatch({type:"SET_INPUT",payload:e.target.value})

  } 
  />
  <button
  
   type="submit"
   className="bg-blue-500 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-600 transition-all"

  
  >Submit</button>




 </form>


 <div
  className={`w-40 h-40 flex items-center justify-center text-white font-bold text-xl rounded-2xl shadow-md transition-all duration-300 ${state.color}`}


 >{state.text}</div>

</div>



)

};