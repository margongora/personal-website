/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as QualificationsImport } from './routes/qualifications'
import { Route as PortfolioImport } from './routes/Portfolio'
import { Route as HomeImport } from './routes/Home'

// Create/Update Routes

const QualificationsRoute = QualificationsImport.update({
  path: '/qualifications',
  getParentRoute: () => rootRoute,
} as any)

const PortfolioRoute = PortfolioImport.update({
  path: '/Portfolio',
  getParentRoute: () => rootRoute,
} as any)

const HomeRoute = HomeImport.update({
  path: '/Home',
  getParentRoute: () => rootRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/Home': {
      preLoaderRoute: typeof HomeImport
      parentRoute: typeof rootRoute
    }
    '/Portfolio': {
      preLoaderRoute: typeof PortfolioImport
      parentRoute: typeof rootRoute
    }
    '/qualifications': {
      preLoaderRoute: typeof QualificationsImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export const routeTree = rootRoute.addChildren([
  HomeRoute,
  PortfolioRoute,
  QualificationsRoute,
])

/* prettier-ignore-end */
