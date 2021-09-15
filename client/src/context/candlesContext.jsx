import { createContext, useState, useEffect } from 'react';

const CandlesContext = createContext();

const GlobalState = ({ children }) => {
  const [candlesData, setCandlesData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const response = await fetch('http://localhost:5000/candles');
      const data = await response.json();
      setCandlesData(data);
    };
    getData();
  }, []);

  return (
    <CandlesContext.Provider value={candlesData}>
      {children}
    </CandlesContext.Provider>
  );
};

export default GlobalState;
