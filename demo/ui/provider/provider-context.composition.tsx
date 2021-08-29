import React, { useContext } from 'react';
import { ProviderProvider } from './provider-context-provider';
import { ProviderContext } from './provider-context';

export function MockComponent() {
  const theme = useContext(ProviderContext);

  return <div style={{ color: theme.color }}>this should be {theme.color}</div>;
}

export const BasicThemeUsage = () => {
  return (
    <ProviderProvider color="blue">
      <MockComponent />
    </ProviderProvider>
  );
};
