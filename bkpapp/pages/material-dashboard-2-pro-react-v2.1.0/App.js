/**
=========================================================
* Material Dashboard 2 PRO React - v2.1.0
=========================================================
*/

import { useState, useEffect, useMemo } from 'react'

// react-router components
// import { Routes, Route, Navigate, useLocation } from 'react-router-dom'
import { useRouter } from 'next/router'
import Link from 'next/link'
// @mui material components
import { ThemeProvider } from '@mui/material/styles'
// import CssBaseline from '@mui/material/CssBaseline'
import Icon from '@mui/material/Icon'

// Material Dashboard 2 PRO React components
import MDBox from 'components/ui/material-dashboard-2-pro-react-v2.1.0/MDBox'

// Material Dashboard 2 PRO React examples
import Sidenav from 'components/blocks/material-dashboard-2-pro-react-v2.1.0/Sidenav'
import Configurator from 'components/blocks/material-dashboard-2-pro-react-v2.1.0/Configurator'

// Material Dashboard 2 PRO React themes
import theme from 'themes/material-dashboard-2-pro-react-v2.1.0/theme'
import themeRTL from 'themes/material-dashboard-2-pro-react-v2.1.0/theme/theme-rtl'

// Material Dashboard 2 PRO React Dark Mode themes
import themeDark from 'themes/material-dashboard-2-pro-react-v2.1.0/theme-dark'
import themeDarkRTL from 'themes/material-dashboard-2-pro-react-v2.1.0/theme-dark/theme-rtl'

// RTL plugins
import rtlPlugin from 'stylis-plugin-rtl'
import { CacheProvider } from '@emotion/react'
import createCache from '@emotion/cache'

// Material Dashboard 2 PRO React routes
import routes from 'data/material-dashboard-2-pro-react-v2.1.0/rootsystem/routes'
import Analytics from 'pages-sections/material-dashboard-2-pro-react-v2.1.0/layouts/dashboards/analytics'
// Material Dashboard 2 PRO React contexts
import {
  useMaterialUIController,
  setMiniSidenav,
  setOpenConfigurator,
} from 'contexts/material-dashboard-2-pro-react-v2.1.0/context'

// Images
import brandWhite from 'public/img/material-dashboard-2-pro-react-v2.1.0/logo-ct.png'
import brandDark from 'public/img/material-dashboard-2-pro-react-v2.1.0/logo-ct-dark.png'

export default function App() {
  const [controller, dispatch] = useMaterialUIController()
  const {
    miniSidenav,
    direction,
    layout,
    openConfigurator,
    sidenavColor,
    transparentSidenav,
    whiteSidenav,
    darkMode,
  } = controller
  const [onMouseEnter, setOnMouseEnter] = useState(false)
  const [rtlCache, setRtlCache] = useState(null)
  const { pathname } = useRouter()

  // Cache for the rtl
  useMemo(() => {
    const cacheRtl = createCache({
      key: 'rtl',
      stylisPlugins: [rtlPlugin],
    })

    setRtlCache(cacheRtl)
  }, [])

  // Open sidenav when mouse enter on mini sidenav
  const handleOnMouseEnter = () => {
    if (miniSidenav && !onMouseEnter) {
      setMiniSidenav(dispatch, false)
      setOnMouseEnter(true)
    }
  }

  // Close sidenav when mouse leave mini sidenav
  const handleOnMouseLeave = () => {
    if (onMouseEnter) {
      setMiniSidenav(dispatch, true)
      setOnMouseEnter(false)
    }
  }

  // Change the openConfigurator state
  const handleConfiguratorOpen = () =>
    setOpenConfigurator(dispatch, !openConfigurator)

  // Setting the dir attribute for the body element
  useEffect(() => {
    document.body.setAttribute('dir', direction)
  }, [direction])

  // Setting page scroll to 0 when changing the route
  useEffect(() => {
    document.documentElement.scrollTop = 0
    document.scrollingElement.scrollTop = 0
  }, [pathname])

  const getRoutes = (allRoutes) =>
    allRoutes.map((route) => {
      if (route.collapse) {
        return getRoutes(route.collapse)
      }

      if (route.href) {
        return <Link href={route.href} key={route.key} />
      }

      return null
    })

  const configsButton = (
    <MDBox
      display="flex"
      justifyContent="center"
      alignItems="center"
      width="3.25rem"
      height="3.25rem"
      bgColor="white"
      shadow="sm"
      borderRadius="50%"
      position="fixed"
      right="2rem"
      bottom="2rem"
      zIndex={99}
      color="dark"
      sx={{ cursor: 'pointer' }}
      onClick={handleConfiguratorOpen}
    >
      <Icon fontSize="small" color="inherit">
        settings
      </Icon>
    </MDBox>
  )

  return direction === 'rtl' ? (
    <CacheProvider value={rtlCache}>
      <ThemeProvider theme={darkMode ? themeDarkRTL : themeRTL}>
        {/* <CssBaseline /> */}
        {layout === 'dashboard' && (
          <>
            <Sidenav
              color={sidenavColor}
              brand={
                (transparentSidenav && !darkMode) || whiteSidenav
                  ? brandDark.src
                  : brandWhite.src
              }
              brandName="Material Dashboard PRO"
              routes={routes}
              onMouseEnter={handleOnMouseEnter}
              onMouseLeave={handleOnMouseLeave}
            />
            <Configurator />
            {configsButton}
          </>
        )}
        {layout === 'vr' && <Configurator />}
        {/* <Routes>
          {getRoutes(routes)}
          <Route path="*" element={<Navigate to="/dashboards/analytics" />} />
        </Routes> */}
      </ThemeProvider>
    </CacheProvider>
  ) : (
    <ThemeProvider theme={darkMode ? themeDark : theme}>
      {/* <CssBaseline /> */}
      {layout === 'dashboard' && (
        <>
          <Sidenav
            color={sidenavColor}
            brand={
              (transparentSidenav && !darkMode) || whiteSidenav
                ? brandDark.src
                : brandWhite.src
            }
            brandName="Material Dashboard PRO"
            routes={routes}
            onMouseEnter={handleOnMouseEnter}
            onMouseLeave={handleOnMouseLeave}
          />
          <Configurator />
          {configsButton}
        </>
      )}
      {layout === 'vr' && <Configurator />}
      {/* <Routes>*/}
      {getRoutes(routes)}
      <Analytics />
      {/* <Route path="*" element={<Navigate to="/dashboards/analytics" />} /> */}
      {/* </Routes> */}
    </ThemeProvider>
  )
}
