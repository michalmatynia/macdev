/* eslint-disable no-param-reassign */
/**
=========================================================
* Material Kit 2 PRO React - v2.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-pro-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// Material Kit 2 PRO React examples
import DefaultNavbar from 'components/blocks/material-kit-pro-react-v2.0.0/Navbars/DefaultNavbar'

// Routes
import routes from 'data/material-kit-pro-react-v2.0.0/rootsystem/routes'

function NavbarTransparent() {
  return (
    <DefaultNavbar
      routes={routes}
      action={{
        type: 'external',
        route: 'https://www.creative-tim.com/product/material-kit-pro-react',
        label: 'buy now',
        color: 'info',
      }}
      transparent
      relative
      center
    />
  )
}

export default NavbarTransparent
