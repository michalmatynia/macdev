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
import borders from 'themes/material-kit-pro-react-v2.0.0/base/borders'
import boxShadows from 'themes/material-kit-pro-react-v2.0.0/base/boxShadows'

const { borderRadius } = borders
const { xxl } = boxShadows

const dialog = {
  styleOverrides: {
    paper: {
      borderRadius: borderRadius.lg,
      boxShadow: xxl,
    },

    paperFullScreen: {
      borderRadius: 0,
    },
  },
}

export default dialog
