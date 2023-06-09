/*
=========================================================
* Material Kit 2 PRO React - v2.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-pro-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// prop-types is a library for typechecking of props
import PropTypes from 'prop-types'

// @mui material components
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'

// Material Kit 2 PRO React components
import MKBox from 'components/ui/material-kit-pro-react-v2.0.0/MKBox'
import MKTypography from 'components/ui/material-kit-pro-react-v2.0.0/MKTypography'

// Material Kit 2 PRO React examples
import DefaultNavbar from 'components/blocks/material-kit-pro-react-v2.0.0/Navbars/DefaultNavbar'
import CenteredFooter from 'components/blocks/material-kit-pro-react-v2.0.0/Footers/CenteredFooter'
import Breadcrumbs from 'components/blocks/material-kit-pro-react-v2.0.0/Breadcrumbs'

// Routes
import routes from 'data/material-kit-pro-react-v2.0.0/rootsystem/routes'

function BaseLayout({ breadcrumb, title, children }) {
  return (
    <MKBox
      display="flex"
      flexDirection="column"
      bgColor="white"
      minHeight="100vh"
    >
      <MKBox bgColor="white" shadow="sm" py={0.25}>
        <DefaultNavbar
          routes={routes}
          action={{
            type: 'external',
            route:
              'https://www.creative-tim.com/product/material-kit-pro-react',
            label: 'buy now',
            color: 'info',
          }}
          transparent
          relative
        />
      </MKBox>
      <Container sx={{ mt: 6 }}>
        <Grid
          container
          item
          xs={12}
          flexDirection="column"
          justifyContent="center"
          mx="auto"
        >
          <MKBox width={{ xs: '100%', md: '50%', lg: '25%' }} mb={3}>
            <Breadcrumbs routes={breadcrumb} />
          </MKBox>
          <MKTypography variant="h3" mb={1}>
            {title}
          </MKTypography>
          {children}
        </Grid>
      </Container>
      <MKBox mt="auto">
        <CenteredFooter />
      </MKBox>
    </MKBox>
  )
}

// Typechecking props for the BaseLayout
BaseLayout.propTypes = {
  breadcrumb: PropTypes.arrayOf(PropTypes.object).isRequired,
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
}

export default BaseLayout
