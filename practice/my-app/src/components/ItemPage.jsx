import { useDispatch} from "react-redux"
import { adder, clearAll, remover } from "../slice/ItemsSlice";
import { useState } from "react";

const ItemPage =()=>{
    const [val,setval] = useState(0);
    const dispatch = useDispatch();
    
    return(<>
     <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
    <div className="sm:mx-auto sm:w-full sm:max-w-sm flex gap-3">
   <input className="block w-full rounded-md bg-gray-300 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6" 
   type="number" onChange={(e)=>{setval(e.target.value)}} value={val} />
   <button className="flex w-full justify-center rounded-md bg-indigo-500 px-3 py-1.5 text-sm/6 font-semibold text-white hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
    onClick={()=>{dispatch(adder(val))}}>add</button>
   <button className="flex w-full justify-center rounded-md bg-indigo-500 px-3 py-1.5 text-sm/6 font-semibold text-white hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
    onClick={()=>{dispatch(remover(val))}}>remover</button>
   <button className="flex w-full justify-center rounded-md bg-indigo-500 px-3 py-1.5 text-sm/6 font-semibold text-white hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
    onClick={()=>{dispatch(clearAll())}}>clearAll</button>
    </div></div>
    </>);
}
export default ItemPage;