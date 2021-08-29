import { createContext } from 'react';

export type ProviderContextType = {
  /**
   * primary color of theme.
   */
  color?: string;
};

export const ProviderContext = createContext<ProviderContextType>({
  color: 'aqua'
});
