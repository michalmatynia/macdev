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

// @mui material components
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'

// Mataerial Kit 2 PRO React components
import MKBox from 'components/ui/material-kit-pro-react-v2.0.0/MKBox'

// Mataerial Kit 2 PRO React examples
import Breadcrumbs from 'components/blocks/material-kit-pro-react-v2.0.0/Breadcrumbs'

// Sections components
import BaseLayout from 'pages-sections/material-kit-pro-react-v2.0.0/layouts/sections/components/BaseLayout'
import View from 'pages-sections/material-kit-pro-react-v2.0.0/layouts/sections/components/View'

// Breadcrumbs page components code
import breadcrumbsCode from 'pages-sections/material-kit-pro-react-v2.0.0/layouts/sections/elements/breadcrumbs/code'

function BreadcrumbsEl() {
  return (
    <BaseLayout
      title="Breadcrumbs"
      breadcrumb={[
        { label: 'Page Sections', route: '/sections/elements/breadcrumbs' },
        { label: 'Breadcrumbs' },
      ]}
    >
      <View title="Breadcrumbs" code={breadcrumbsCode}>
        <MKBox component="section" bgColor="white" py={8}>
          <Container>
            <Grid container spacing={2} item xs={12} lg={10} mx="auto">
              <Grid item xs={12}>
                <Breadcrumbs
                  routes={[
                    { label: 'Home', route: '/sections/elements/breadcrumbs' },
                  ]}
                />
              </Grid>
              <Grid item xs={12}>
                <Breadcrumbs
                  routes={[
                    { label: 'Home', route: '/sections/elements/breadcrumbs' },
                    { label: 'Library' },
                  ]}
                />
              </Grid>
              <Grid item xs={12}>
                <Breadcrumbs
                  routes={[
                    { label: 'Home', route: '/sections/elements/breadcrumbs' },
                    {
                      label: 'Library',
                      route: '/sections/elements/breadcrumbs',
                    },
                    { label: 'Data' },
                  ]}
                />
              </Grid>
            </Grid>
          </Container>
        </MKBox>
      </View>
    </BaseLayout>
  )
}

export default BreadcrumbsEl
