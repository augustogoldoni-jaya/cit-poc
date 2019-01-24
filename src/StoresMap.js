import { DefaultContext, DefaultThemeContext } from './default/DefaultContext'
import WebmdStore from './webmd/WebmdStore';
import DefaultStore from './default/DefaultStore';
import { WebmdContext, WebmdThemeContext } from './webmd/WebmdContext'
import { OtherContext, OtherThemeContext } from './other/OtherContext'

export const StoresMap = [
  {
    Component: WebmdStore,
    Context: WebmdContext,
    Domain: process.env.REACT_APP_WEBMD_DOMAIN,
    ThemeContext: WebmdThemeContext
  },
  {
    Component: DefaultStore,
    Context: DefaultContext,
    Domain: process.env.REACT_APP_SICKLECELL_DOMAIN,
    ThemeContext: DefaultThemeContext
  },
  {
    Component: DefaultStore,
    Context: OtherContext,
    Domain: process.env.REACT_APP_OTHER_DOMAIN,
    ThemeContext: OtherThemeContext
  }
]
