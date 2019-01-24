import React from 'react';

export const OtherContext = {
  fontSize: '15px',
  color: 'yellow'
};

export const ThemeContext = React.createContext(
  OtherContext
);
