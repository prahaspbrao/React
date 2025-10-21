import { useState, useCallback } from "react";
import "./App.css";

function App() {
  const [length, setLength] = useState(8);
  const [numAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*()_+=-/<>,.';`~";

    for (let i = 1; i < array.length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass = str.charAt(char);
    }

    setPassword(pass);
  }, [length, numAllowed, charAllowed, setPassword]);

  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 m-8 text-orange-500 bg-gray-800 align-items-center text-center p-3">
        Password Generator App
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3 m-3 rounded-lg"
            placeholder="password.."
          />
          <button className="outline-none bg-blue-800 text-white px-3 py-0.5 shrink-0 rounded-lg m-3">
            Copy
          </button>
        </div>
        <div className="flex text-sm gap-x-2 ">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              min={6}
              max={20}
              color="blue"
              value={length}
              className="cursor-pointer"
              onChange={(e) => {
                setLength(e.target.value);
              }}
            />
            <label className="text-red-500  m-3">Length : {length}</label>

            <input
            type="checkbox"
            defaultChecked={numAllowed}
            id="numberInput"
            onChange={() => {
              setNumberAllowed((prev) => !prev);
            }}
          />
          <label htmlFor="">Numbers</label>
          <input
            type="checkbox"
            defaultChecked={numAllowed}
            id="numberInput"
            onChange={() => {
              setNumberAllowed((prev) => !prev);
            }}
          />
          <label htmlFor="">Character</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
