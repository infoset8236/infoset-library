/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as BImport } from './routes/b'
import { Route as AImport } from './routes/a'
import { Route as IndexImport } from './routes/index'
import { Route as SmartIndexImport } from './routes/smart.index'
import { Route as KioskIndexImport } from './routes/kiosk.index'
import { Route as SmartBImport } from './routes/smart.b'
import { Route as SmartAImport } from './routes/smart.a'
import { Route as KioskBImport } from './routes/kiosk.b'
import { Route as KioskAImport } from './routes/kiosk.a'

// Create/Update Routes

const BRoute = BImport.update({
  id: '/b',
  path: '/b',
  getParentRoute: () => rootRoute,
} as any)

const ARoute = AImport.update({
  id: '/a',
  path: '/a',
  getParentRoute: () => rootRoute,
} as any)

const IndexRoute = IndexImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

const SmartIndexRoute = SmartIndexImport.update({
  id: '/smart/',
  path: '/smart/',
  getParentRoute: () => rootRoute,
} as any)

const KioskIndexRoute = KioskIndexImport.update({
  id: '/kiosk/',
  path: '/kiosk/',
  getParentRoute: () => rootRoute,
} as any)

const SmartBRoute = SmartBImport.update({
  id: '/smart/b',
  path: '/smart/b',
  getParentRoute: () => rootRoute,
} as any)

const SmartARoute = SmartAImport.update({
  id: '/smart/a',
  path: '/smart/a',
  getParentRoute: () => rootRoute,
} as any)

const KioskBRoute = KioskBImport.update({
  id: '/kiosk/b',
  path: '/kiosk/b',
  getParentRoute: () => rootRoute,
} as any)

const KioskARoute = KioskAImport.update({
  id: '/kiosk/a',
  path: '/kiosk/a',
  getParentRoute: () => rootRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/a': {
      id: '/a'
      path: '/a'
      fullPath: '/a'
      preLoaderRoute: typeof AImport
      parentRoute: typeof rootRoute
    }
    '/b': {
      id: '/b'
      path: '/b'
      fullPath: '/b'
      preLoaderRoute: typeof BImport
      parentRoute: typeof rootRoute
    }
    '/kiosk/a': {
      id: '/kiosk/a'
      path: '/kiosk/a'
      fullPath: '/kiosk/a'
      preLoaderRoute: typeof KioskAImport
      parentRoute: typeof rootRoute
    }
    '/kiosk/b': {
      id: '/kiosk/b'
      path: '/kiosk/b'
      fullPath: '/kiosk/b'
      preLoaderRoute: typeof KioskBImport
      parentRoute: typeof rootRoute
    }
    '/smart/a': {
      id: '/smart/a'
      path: '/smart/a'
      fullPath: '/smart/a'
      preLoaderRoute: typeof SmartAImport
      parentRoute: typeof rootRoute
    }
    '/smart/b': {
      id: '/smart/b'
      path: '/smart/b'
      fullPath: '/smart/b'
      preLoaderRoute: typeof SmartBImport
      parentRoute: typeof rootRoute
    }
    '/kiosk/': {
      id: '/kiosk/'
      path: '/kiosk'
      fullPath: '/kiosk'
      preLoaderRoute: typeof KioskIndexImport
      parentRoute: typeof rootRoute
    }
    '/smart/': {
      id: '/smart/'
      path: '/smart'
      fullPath: '/smart'
      preLoaderRoute: typeof SmartIndexImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export interface FileRoutesByFullPath {
  '/': typeof IndexRoute
  '/a': typeof ARoute
  '/b': typeof BRoute
  '/kiosk/a': typeof KioskARoute
  '/kiosk/b': typeof KioskBRoute
  '/smart/a': typeof SmartARoute
  '/smart/b': typeof SmartBRoute
  '/kiosk': typeof KioskIndexRoute
  '/smart': typeof SmartIndexRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexRoute
  '/a': typeof ARoute
  '/b': typeof BRoute
  '/kiosk/a': typeof KioskARoute
  '/kiosk/b': typeof KioskBRoute
  '/smart/a': typeof SmartARoute
  '/smart/b': typeof SmartBRoute
  '/kiosk': typeof KioskIndexRoute
  '/smart': typeof SmartIndexRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexRoute
  '/a': typeof ARoute
  '/b': typeof BRoute
  '/kiosk/a': typeof KioskARoute
  '/kiosk/b': typeof KioskBRoute
  '/smart/a': typeof SmartARoute
  '/smart/b': typeof SmartBRoute
  '/kiosk/': typeof KioskIndexRoute
  '/smart/': typeof SmartIndexRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths:
    | '/'
    | '/a'
    | '/b'
    | '/kiosk/a'
    | '/kiosk/b'
    | '/smart/a'
    | '/smart/b'
    | '/kiosk'
    | '/smart'
  fileRoutesByTo: FileRoutesByTo
  to:
    | '/'
    | '/a'
    | '/b'
    | '/kiosk/a'
    | '/kiosk/b'
    | '/smart/a'
    | '/smart/b'
    | '/kiosk'
    | '/smart'
  id:
    | '__root__'
    | '/'
    | '/a'
    | '/b'
    | '/kiosk/a'
    | '/kiosk/b'
    | '/smart/a'
    | '/smart/b'
    | '/kiosk/'
    | '/smart/'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  ARoute: typeof ARoute
  BRoute: typeof BRoute
  KioskARoute: typeof KioskARoute
  KioskBRoute: typeof KioskBRoute
  SmartARoute: typeof SmartARoute
  SmartBRoute: typeof SmartBRoute
  KioskIndexRoute: typeof KioskIndexRoute
  SmartIndexRoute: typeof SmartIndexRoute
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  ARoute: ARoute,
  BRoute: BRoute,
  KioskARoute: KioskARoute,
  KioskBRoute: KioskBRoute,
  SmartARoute: SmartARoute,
  SmartBRoute: SmartBRoute,
  KioskIndexRoute: KioskIndexRoute,
  SmartIndexRoute: SmartIndexRoute,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* prettier-ignore-end */

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/a",
        "/b",
        "/kiosk/a",
        "/kiosk/b",
        "/smart/a",
        "/smart/b",
        "/kiosk/",
        "/smart/"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/a": {
      "filePath": "a.tsx"
    },
    "/b": {
      "filePath": "b.tsx"
    },
    "/kiosk/a": {
      "filePath": "kiosk.a.tsx"
    },
    "/kiosk/b": {
      "filePath": "kiosk.b.tsx"
    },
    "/smart/a": {
      "filePath": "smart.a.tsx"
    },
    "/smart/b": {
      "filePath": "smart.b.tsx"
    },
    "/kiosk/": {
      "filePath": "kiosk.index.tsx"
    },
    "/smart/": {
      "filePath": "smart.index.tsx"
    }
  }
}
ROUTE_MANIFEST_END */