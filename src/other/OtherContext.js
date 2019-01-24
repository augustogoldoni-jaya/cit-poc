import React from 'react';

export const OtherContext = {
  fontSize: '15px',
  color: 'yellow'
};

export const OtherThemeContext = React.createContext(
  OtherContext
);
