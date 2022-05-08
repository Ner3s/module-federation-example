import { ReactNode } from 'react';

import { MfeProvider } from './use-mfe';

interface IAppProvider {
  children: ReactNode;
}

function AppProvider({ children }: IAppProvider) {
  return <MfeProvider>{children}</MfeProvider>;
}

export { AppProvider };
