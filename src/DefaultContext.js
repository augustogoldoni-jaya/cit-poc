import React from 'react';

export const DefaultContext = {
    fontSize: '11px',
    color: 'blue'
};

export const ThemeContext = React.createContext(
  DefaultContext
);
