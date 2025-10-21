import { useState, useCallback, useEffect, useRef } from "react";
import "./App.css";

function App() {
  const [length, setLength] = useState(8);
  const [numAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const passwordRef = useRef(null);

  // 🔐 Password Generator
  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*()_+=-/<>,.';`~";

    for (let i = 0; i < length; i++) {
      const char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char);
    }

    setPassword(pass);
  }, [length, numAllowed, charAllowed]);

  // 📋 Copy to Clipboard
  const copyToClipboard = useCallback(() => {
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password);
  }, [password]);

  // 🔁 Auto-generate password whenever options change
  useEffect(() => {
    passwordGenerator();
  }, [length, numAllowed, charAllowed, passwordGenerator]);

  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 m-8 text-orange-500 bg-gray-800 text-center p-3">
        <h2 className="text-xl mb-3">Password Generator App</h2>

        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            value={password}
            readOnly
            ref={passwordRef}
            className="outline-none w-full py-1 px-3 m-3 rounded-lg"
            placeholder="Generated password..."
          />
          <button
            onClick={copyToClipboard}
            className="outline-none bg-blue-800 text-white px-3 py-0.5 shrink-0 rounded-lg m-3"
          >
            Copy
          </button>
        </div>

        <div className="flex flex-col text-sm gap-y-2 items-center">
          <div className="flex items-center gap-x-2">
            <input
              type="range"
              min={6}
              max={20}
              value={length}
              className="cursor-pointer"
              onChange={(e) => setLength(e.target.value)}
            />
            <label className="text-red-500">Length: {length}</label>
          </div>

          <div className="flex gap-x-4 items-center">
            <label>
              <input
                type="checkbox"
                checked={numAllowed}
                onChange={() => setNumberAllowed((prev) => !prev)}
              />{" "}
              Numbers
            </label>

            <label>
              <input
                type="checkbox"
                checked={charAllowed}
                onChange={() => setCharAllowed((prev) => !prev)}
              />{" "}
              Special Characters
            </label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
