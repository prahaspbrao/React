import { useState } from "react";
import { InputBox } from "./components";
import useCurrencyInfo from "./hooks/useCurrencyInfo";
import "./App.css";

function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("USD");
  const [to, setTo] = useState("INR");
  const [convertedAmount, setConvertedAmount] = useState(0);

  const currencyInfo = useCurrencyInfo(from);
  const options = Object.keys(currencyInfo);

  // Swap values
  const swap = () => {
    setFrom(to);
    setTo(from);
    setAmount(convertedAmount);
    setConvertedAmount(amount);
  };

  // Convert logic
  const convert = () => {
    if (!currencyInfo[to]) return;
    setConvertedAmount(amount * currencyInfo[to]);
  };

  return (
    <div
      className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
      style={{
        backgroundImage:
          'url("https://c8.alamy.com/comp/GDJPF4/abstract-finance-world-currency-background-GDJPF4.jpg")',
      }}
    >
      <div className="w-full max-w-md mx-auto border border-gray-300 rounded-lg p-5 backdrop-blur-sm bg-white/30">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            convert();
          }}
        >
          {/* FROM Input */}
          <div className="w-full mb-4">
            <InputBox
              label="From"
              amount={amount}
              currencyOption={options}
              onAmountChange={(amt) => setAmount(amt)}
              onCurrencyChange={(curr) => setFrom(curr)}
              selectCurrency={from}
            />
          </div>

          {/* Swap button */}
          <div className="relative w-full h-0.5 my-4">
            <button
              type="button"
              className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-3 py-1"
              onClick={swap}
            >
              Swap
            </button>
          </div>

          {/* TO Input */}
          <div className="w-full mb-4">
            <InputBox
              label="To"
              amount={convertedAmount}
              currencyOption={options}
              onCurrencyChange={(curr) => setTo(curr)}
              selectCurrency={to}
              amountDisable
            />
          </div>

          {/* Convert button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg"
          >
            Convert {from.toUpperCase()} → {to.toUpperCase()}
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;
