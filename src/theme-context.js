import React from 'react';

export const themes = {
  webmd: {
    fontSize: '14px'
  },
  sicklecell: {
    fontSize: '11px'
  },
};

export const ThemeContext = React.createContext(
  themes.webmd
);
