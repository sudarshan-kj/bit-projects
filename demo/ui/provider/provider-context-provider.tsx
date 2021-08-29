import React, { ReactNode } from 'react';
import { ProviderContext } from './provider-context';

export type ProviderProviderProps = {
  /**
   * primary color of theme.
   */
  color?: string,

  /**
   * children to be rendered within this theme.
   */
  children: ReactNode
};

export function ProviderProvider({ color, children }: ProviderProviderProps) {
  return <ProviderContext.Provider value={{ color }}>{children}</ProviderContext.Provider>
}
