/** @jsxRuntime classic */

/** @jsx jsx */

import { css, jsx } from '@emotion/react'
import React, { CSSProperties, FC, ReactNode } from 'react'
import {
  CT_GridContainer,
  CT_GridItem,
  CT_Parallax,
  OldCMS_SectionProducts,
} from '@components/ui'
import stylesUntyped from '../../../styles/jssthemes/material-kit-pro-react-v1.9.0/material-kit-pro-react/views/ecommerceStyle.js'

import { Box } from '@mui/material'

// const dashboardRoutes = []

export default function Webstore(props: FC): ReactNode {
  const styles = stylesUntyped as { [key: string]: CSSProperties }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { ...rest } = props

  return (
    <>
      <CT_Parallax filter responsive image="/img/milkbar/title/grid_0.png">
        <Box sx={styles.container}>
          <CT_GridContainer>
            <CT_GridItem xs={12} sm={12} md={6}>
              <Box sx={styles.brand}>
                <h1 css={css({ ...styles.title })}>Webstore</h1>
                <h4>My store</h4>
              </Box>
            </CT_GridItem>
          </CT_GridContainer>
        </Box>
      </CT_Parallax>
      <Box sx={{ ...styles.main, ...styles.mainRaised }}>
        {/* <Box sx={styles.container}></Box> */}
        <OldCMS_SectionProducts />
      </Box>
    </>
  )
}
