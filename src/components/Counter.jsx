import { useDispatch, useSelector } from "react-redux";
import {
  decrement,
  increment,
  incrementByAmount,
  decrementByAmount,
} from "../redux/counterSlice";
import { useState } from "react";

function App() {
  const dispatch = useDispatch();
  const { value } = useSelector((state) => state.counter);
  const [sumAmount , setSumAmount] = useState(0);
  const [restAmount , setRestAmount] = useState(0);
  const handleAction = (e) => {
    e.preventDefault();
    switch (e.target.id) {
      case "sumar":
        dispatch(increment())
      break;
      case "restar":
        dispatch(decrement())
      break;
      case "sumaramount":
        dispatch(incrementByAmount(sumAmount))
      break;
      case "restaramount":
        dispatch(decrementByAmount(restAmount))
      break;
      default:
      break;
    }
  };

  return (
    <div>
      <h1 className="text-3xl font-bold underline w-full">Hello world! {value} </h1>
      <form className="w-3/4 mx-auto flex flex-col gap-5">
        <section className="flex justify-center gap-5">
          <button className="p-1 border bg-green-400 rounded-md" id="sumar" onClick={handleAction}>
            Sumar
          </button>
          <button  className="p-1 border bg-red-400 rounded-md"  id="restar" onClick={handleAction}>
            Restar
          </button>
        </section>
        <section className="flex justify-center gap-5">
          <div className="flex flex-col w-min gap-3">
            <input type="number" value={sumAmount} onChange={(e)=>setSumAmount(e.target.value)}/>
            <button className="p-1 border bg-green-400 rounded-md"  id="sumaramount" onClick={handleAction}>
              Sumar numero
            </button>
          </div>
          <div className="flex flex-col w-min gap-3">
            <input type="number" value={restAmount} onChange={(e)=>setRestAmount(e.target.value)}/>
            <button className="p-1 border bg-red-400 rounded-md" id="restaramount" onClick={handleAction}>
              Restar numero
            </button>
          </div>
        </section>
      </form>
    </div>
  );
}

export default App;
