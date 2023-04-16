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

// @mui material components
import Grid from '@mui/material/Grid'

// Material Dashboard 2 PRO React components
import MDBox from 'components/ui/material-dashboard-2-pro-react-v2.1.0/MDBox'

// Material Dashboard 2 PRO React components
import MasterCard from 'components/blocks/material-dashboard-2-pro-react-v2.1.0/Cards/MasterCard'
import DefaultInfoCard from 'components/blocks/material-dashboard-2-pro-react-v2.1.0/Cards/InfoCards/DefaultInfoCard'

// Billing page components
import BaseLayout from 'pages-sections/material-dashboard-2-pro-react-v2.1.0/layouts/pages/account/components/BaseLayout'
import PaymentMethod from 'pages-sections/material-dashboard-2-pro-react-v2.1.0/layouts/pages/account/billing/components/PaymentMethod'
import Invoices from 'pages-sections/material-dashboard-2-pro-react-v2.1.0/layouts/pages/account/billing/components/Invoices'
import BillingInformation from 'pages-sections/material-dashboard-2-pro-react-v2.1.0/layouts/pages/account/billing/components/BillingInformation'
import Transactions from 'pages-sections/material-dashboard-2-pro-react-v2.1.0/layouts/pages/account/billing/components/Transactions'

function Billing() {
  return (
    <BaseLayout stickyNavbar>
      <MDBox mt={4}>
        <MDBox mb={3}>
          <Grid container spacing={3}>
            <Grid item xs={12} lg={8}>
              <Grid container spacing={3}>
                <Grid item xs={12} xl={6}>
                  <MasterCard
                    number={4562112245947852}
                    holder="jack peterson"
                    expires="11/22"
                  />
                </Grid>
                <Grid item xs={12} md={6} xl={3}>
                  <DefaultInfoCard
                    icon="account_balance"
                    title="salary"
                    description="Belong Interactive"
                    value="+$2000"
                  />
                </Grid>
                <Grid item xs={12} md={6} xl={3}>
                  <DefaultInfoCard
                    icon="paypal"
                    title="paypal"
                    description="Freelance Payment"
                    value="$455.00"
                  />
                </Grid>
                <Grid item xs={12}>
                  <PaymentMethod />
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} lg={4}>
              <Invoices />
            </Grid>
          </Grid>
        </MDBox>
        <MDBox mb={3}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={7}>
              <BillingInformation />
            </Grid>
            <Grid item xs={12} md={5}>
              <Transactions />
            </Grid>
          </Grid>
        </MDBox>
      </MDBox>
    </BaseLayout>
  )
}

export default Billing