import Footer from "./components/Footer";
import Body from "./components/Body";
import { useState } from "react";

function App() {
  const [color, setColor] = useState("olive");
  return (
    <>
      <div
        className="w-full h-screen duration-200 "
        style={{ backgroundColor: color }}
      >
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <div className="fiexd flex flex-wrap justify-center gap-3 shadow-lg bg-slate-400 px-3 py-2 rounded-xl">
            <button onClick={(color) => setColor("red")} className="bg-red-200 p-2 m-3  rounded-xl">Red</button>
        <button onClick={(color) => setColor("green")} className="bg-green-200 p-2 m-3 rounded-xl">Green</button>
        <button onClick={(color) => setColor("blue")} className="bg-blue-200 p-2 m-3 rounded-xl ">Blue</button>
        <button onClick={(color) => setColor("olive")} className="bg-lime-700 p-2 m-3 rounded-xl">Olive</button>
        <button onClick={(color) => setColor("grey")} className="bg-slate-600 p-2 m-3 rounded-xl">Grey</button>
        <button onClick={(color) => setColor("yellow")} className="bg-yellow-200 p-2 m-3 rounded-xl ">Yellow</button>
        <button onClick={(color) => setColor("pink")} className="bg-pink-200 p-2 m-3 rounded-xl">Pink</button>
        <button onClick={(color) => setColor("purple")} className="bg-purple-700 p-2 m-3 rounded-xl ">Purple</button>
        <button onClick={(color) => setColor("indigo")} className="bg-indigo-800 p-2 m-3 rounded-xl">Levender</button>
        <button onClick={(color) => setColor("white")} className="bg-white p-2 m-3 rounded-xl">White</button>
        <button onClick={(color) => setColor("black")} className="bg-black p-2 m-3 rounded-xl text-white border-b-black">Black</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
