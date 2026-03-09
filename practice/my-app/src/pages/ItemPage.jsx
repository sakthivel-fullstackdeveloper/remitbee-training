import { useDispatch} from "react-redux"
import { adder, clearAll, remover } from "../slice/ItemsReducer";
import { useState } from "react";
import ItemView from "./ItemView";

const ItemPage =()=>{
    const [val,setval] = useState(0);
    const dispatch = useDispatch();
    return<>
   <input type="number" onChange={(e)=>{setval(e.target.value)}} value={val} />
   <button onClick={()=>{dispatch(adder(val))}}>add</button>
   <button onClick={()=>{dispatch(remover(val))}}>remover</button>
   <button onClick={()=>{dispatch(clearAll())}}>clearAll</button>

   <ItemView/>
    </>
}
export default ItemPage;