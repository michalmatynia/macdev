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

// Material Kit 2 PRO React Base Styles
import colors from 'themes/material-kit-pro-react-v2.0.0/base/colors'
import borders from 'themes/material-kit-pro-react-v2.0.0/base/borders'
import boxShadows from 'themes/material-kit-pro-react-v2.0.0/base/boxShadows'

// Material Kit 2 PRO React Helper Function
import rgba from 'themes/material-kit-pro-react-v2.0.0/functions/rgba'

const { black, white } = colors
const { borderWidth, borderRadius } = borders
const { md } = boxShadows

const card = {
  styleOverrides: {
    root: {
      display: 'flex',
      flexDirection: 'column',
      position: 'relative',
      minWidth: 0,
      wordWrap: 'break-word',
      backgroundColor: white.main,
      backgroundClip: 'border-box',
      border: `${borderWidth[0]} solid ${rgba(black.main, 0.125)}`,
      borderRadius: borderRadius.xl,
      boxShadow: md,
      overflow: 'visible',
    },
  },
}

export default card
