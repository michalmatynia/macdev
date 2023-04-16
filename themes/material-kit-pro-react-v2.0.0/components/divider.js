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

// Material Kit 2 PRO React base styles
import colors from 'themes/material-kit-pro-react-v2.0.0/base/colors'

// Material Kit 2 PRO React helper functions
import rgba from 'themes/material-kit-pro-react-v2.0.0/functions/rgba'
import pxToRem from 'themes/material-kit-pro-react-v2.0.0/functions/pxToRem'

const { dark, white } = colors

const divider = {
  styleOverrides: {
    root: {
      background: rgba(dark.main, 0.2),
      height: pxToRem(1),
      margin: `${pxToRem(16)} 0`,
      borderBottom: 'none',
      opacity: 0.25,
    },

    vertical: {
      background: rgba(dark.main, 0.2),
      width: pxToRem(1),
      height: '100%',
      margin: `0 ${pxToRem(16)}`,
      borderRight: 'none',
    },

    light: {
      background: rgba(white.main, 0.2),

      '&.MuiDivider-vertical': {
        background: rgba(white.main, 0.2),
      },
    },
  },
}

export default divider
