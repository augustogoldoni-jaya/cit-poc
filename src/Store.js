import {DefaultContext} from './DefaultContext'
import WebmdStore from './WebmdStore';
import DefaultStore from './DefaultStore';
import {WebmdContext} from './WebmdContext'
import {OtherContext} from './OtherContext'

export const StoresMap = [
  {
    Component: WebmdStore,
    Context: WebmdContext,
    Domain: process.env.REACT_APP_WEBMD_DOMAIN
  },
  {
    Component: DefaultStore,
    Context: DefaultContext,
    Domain: process.env.REACT_APP_SICKLECELL_DOMAIN
  },
  {
    Component: DefaultStore,
    Context: OtherContext,
    Domain: process.env.REACT_APP_OTHER_DOMAIN
  }
]
