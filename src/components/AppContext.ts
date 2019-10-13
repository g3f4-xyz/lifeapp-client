import { createContext } from 'react';

export interface AppContextValue {
  pure: boolean;
}

export interface AppContextProps {
  value: AppContextValue;
  toggleMemo(): void;
}

const AppContext = createContext<AppContextProps>({
  value: {
    pure: false,
  },
  toggleMemo: Function,
});

export default AppContext;
