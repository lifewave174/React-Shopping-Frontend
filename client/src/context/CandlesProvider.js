import { createContext, useState, useEffect } from 'react';

export const CandlesContext = createContext();

const CandlesProvider = ({ children }) => {
  const [candlesData, setCandlesData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const response = await fetch('http://localhost:5000/candles');
      const data = await response.json();
      setCandlesData(data);
      console.log(data);
    };
    getData();
  }, []);

  return (
    <CandlesContext.Provider value={candlesData}>
      {children}
    </CandlesContext.Provider>
  );
};

export default CandlesProvider;
