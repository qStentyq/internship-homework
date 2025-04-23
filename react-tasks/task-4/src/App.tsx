import {
  createContext,
  useState,
  Dispatch,
  SetStateAction,
  ReactNode,
} from "react";
import "./App.css";
import ComponentA from "./components/ComponentA";

type CountContextType = {
  count: number;
  setCount: Dispatch<SetStateAction<number>>;
};

const CountContext = createContext<CountContextType | undefined>(undefined);
const CounterProvider = ({ children }: { children: ReactNode }) => {
  const [count, setCount] = useState(0);
  return (
    <CountContext.Provider value={{ count, setCount }}>
      {children}
    </CountContext.Provider>
  );
};

function App() {
  return (
    <CounterProvider>
      <ComponentA />
    </CounterProvider>
  );
}

export { App, CountContext, CounterProvider };
