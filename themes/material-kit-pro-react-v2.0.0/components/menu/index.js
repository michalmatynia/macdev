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
import boxShadows from 'themes/material-kit-pro-react-v2.0.0/base/boxShadows'
import typography from 'themes/material-kit-pro-react-v2.0.0/base/typography'
import colors from 'themes/material-kit-pro-react-v2.0.0/base/colors'
import borders from 'themes/material-kit-pro-react-v2.0.0/base/borders'

// Material Kit 2 PRO React helper functions
import pxToRem from 'themes/material-kit-pro-react-v2.0.0/functions/pxToRem'

const { lg } = boxShadows
const { size } = typography
const { text, white } = colors
const { borderRadius } = borders

const menu = {
  defaultProps: {
    disableAutoFocusItem: true,
  },

  styleOverrides: {
    paper: {
      minWidth: pxToRem(160),
      boxShadow: lg,
      padding: `${pxToRem(16)} ${pxToRem(8)}`,
      fontSize: size.sm,
      color: text.main,
      textAlign: 'left',
      backgroundColor: `${white.main} !important`,
      borderRadius: borderRadius.md,
    },
  },
}

export default menu
