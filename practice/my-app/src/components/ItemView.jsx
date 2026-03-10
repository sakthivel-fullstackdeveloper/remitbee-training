import { useSelector } from "react-redux";

const ItemView = () => {
    const data = useSelector((state) => state.items.value);

    return <>
        {
            (data.toString()!="") &&
            <>
                <h1>Items are :</h1>
                {
                    data.map(
                        (value, index) =>     <li key={index} className="flex w-full justify-center  bg-indigo-500 font-semibold text-white">
                         {value}   </li>                )
                }
            </>
        }

    </>
}
export default ItemView;