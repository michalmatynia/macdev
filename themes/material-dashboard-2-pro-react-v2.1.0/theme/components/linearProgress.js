/**
=========================================================
* Material Dashboard 2 PRO React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-pro-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// Material Dashboard 2 PRO React base styles
import borders from 'themes/material-dashboard-2-pro-react-v2.1.0/theme/base/borders'
import colors from 'themes/material-dashboard-2-pro-react-v2.1.0/theme/base/colors'

// Material Dashboard 2 PRO React helper functions
import pxToRem from 'themes/material-dashboard-2-pro-react-v2.1.0/theme/functions/pxToRem'

const { borderRadius } = borders
const { light } = colors

const linearProgress = {
  styleOverrides: {
    root: {
      height: pxToRem(6),
      borderRadius: borderRadius.md,
      overflow: 'visible',
      position: 'relative',
    },

    colorPrimary: {
      backgroundColor: light.main,
    },

    colorSecondary: {
      backgroundColor: light.main,
    },

    bar: {
      height: pxToRem(6),
      borderRadius: borderRadius.sm,
      position: 'absolute',
      transform: `translate(0, 0) !important`,
      transition: 'width 0.6s ease !important',
    },
  },
}

export default linearProgress
