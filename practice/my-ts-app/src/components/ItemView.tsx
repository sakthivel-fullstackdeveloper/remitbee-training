import { useSelector } from "react-redux";

type RootState = {
  items: {
    value: number[];
  };
};

const ItemView = () => {
  const data = useSelector((state: RootState) => state.items.value);

  return (
    <>
      {data.length !== 0 && (
        <>
          <h1>Items are :</h1>

          {data.map((value: number, index: number) => (
            <li
              key={index}
              className="flex w-full justify-center bg-indigo-500 font-semibold text-white"
            >
              {value}
            </li>
          ))}
        </>
      )}
    </>
  );
};

export default ItemView;