import React from 'react';

export const DefaultContext = {
  fontSize: '11px',
  color: 'blue'
};

export const DefaultThemeContext = React.createContext(
  DefaultContext
);
