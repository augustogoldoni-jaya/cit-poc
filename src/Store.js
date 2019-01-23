import React from 'react';
import {DefaultContext} from './DefaultContext'
import WebmdStore from './WebmdStore';
import DefaultStore from './DefaultStore';
import {WebmdContext} from './WebmdContext'

export const StoresMap = {
  'webmd.tech': {
    Component: WebmdStore,
    Context: WebmdContext
  },
  'sicklecell.tech': {
    Component: DefaultStore,
    Context: DefaultContext
  }
}
