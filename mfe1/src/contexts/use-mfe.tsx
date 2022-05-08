import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from 'react';

interface IMfeContextData {
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
}

interface IMfeProviderProps {
  children: ReactNode;
}

const MfeContext = createContext<IMfeContextData>({} as IMfeContextData);

function MfeProvider({ children }: IMfeProviderProps) {
  const [value, setValue] = useState<string>('');
  return (
    <MfeContext.Provider value={{ value, setValue }}>
      {children}
    </MfeContext.Provider>
  );
}

function useMfe() {
  if (!MfeContext) {
    throw new Error('useMfe should be used with MfeProvider');
  }

  return useContext(MfeContext);
}

export { MfeProvider, useMfe };
