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

// Material Dashboard 2 PRO React helper functions
import pxToRem from 'themes/material-dashboard-2-pro-react-v2.1.0/theme-dark/functions/pxToRem'

// Material Dashboard 2 PRO React base styles
import colors from 'themes/material-dashboard-2-pro-react-v2.1.0/theme-dark/base/colors'
import boxShadows from 'themes/material-dashboard-2-pro-react-v2.1.0/theme-dark/base/boxShadows'
import borders from 'themes/material-dashboard-2-pro-react-v2.1.0/theme-dark/base/borders'

const { transparent } = colors
const { md } = boxShadows
const { borderRadius } = borders

const popover = {
  styleOverrides: {
    paper: {
      backgroundColor: transparent.main,
      boxShadow: md,
      padding: pxToRem(8),
      borderRadius: borderRadius.md,
    },
  },
}

export default popover
