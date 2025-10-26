import { useEffect, useState } from "react";

function useCurrencyInfo(curr) {
  const [data, setData] = useState({});

  useEffect(() => {
    fetch(`https://api.frankfurter.app/latest?from=${curr}`)
      .then((res) => res.json())
      .then((res) => setData(res.rates))
      .catch((err) => console.error("Error fetching currency data:", err));
  }, [curr]);

  return data;
}

export default useCurrencyInfo;
