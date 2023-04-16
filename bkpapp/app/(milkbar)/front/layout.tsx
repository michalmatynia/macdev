'use client'
import theme from 'themes/material-kit-pro-react-v2.0.0/index'
import '/styles/scss/nextjs-material-kit.scss?v=1.2.0'
/* MUI Material */
import { ThemeProvider } from '@mui/material'

import { BasicComponentProps } from 'types/styleTypes/nextjs-material-kit/componentProps'
import { FC } from 'react'

import DefaultNavbar from 'components/blocks/custom-material-kit-pro-react-v2.0.0/Navbars/DefaultNavbar'

// Routes
import routes from 'data/milkbar/ver2.0/rootsystem/routes'
import MKBox from 'components/ui/custom-material-kit-pro-react-v2.0.0/MKBox'

import SimpleFooter from 'components/blocks/custom-material-kit-pro-react-v2.0.0/Footers/SimpleFooter'
import logoImage from 'public/img//milkbar/ver2.0/logo/LOGO_BLUE_05small.png'

const FrontLayout: FC<BasicComponentProps> = ({
  children,
}): React.ReactElement => {
  return (
    <ThemeProvider theme={theme}>
      <DefaultNavbar
        routes={routes}
        brandIcon={logoImage.src}
        brand=""
        sticky
      />
      {children}
      <MKBox pt={6} px={1} mt={6}>
        <SimpleFooter />
      </MKBox>
    </ThemeProvider>
  )
}

export default FrontLayout
