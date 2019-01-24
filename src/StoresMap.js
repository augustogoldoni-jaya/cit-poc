import { DefaultContext } from './default/DefaultContext'
import WebmdStore from './webmd/WebmdStore';
import DefaultStore from './default/DefaultStore';
import { WebmdContext } from './webmd/WebmdContext'
import { OtherContext} from './other/OtherContext'

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
