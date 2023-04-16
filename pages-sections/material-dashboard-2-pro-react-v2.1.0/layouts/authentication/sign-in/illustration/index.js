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

import { useState } from 'react'

// react-router-dom components
// import { Link } from 'react-router-dom'
import Link from 'next/link'

// @mui material components
import Switch from '@mui/material/Switch'

// Material Dashboard 2 PRO React components
import MDBox from 'components/ui/material-dashboard-2-pro-react-v2.1.0/MDBox'
import MDTypography from 'components/ui/material-dashboard-2-pro-react-v2.1.0/MDTypography'
import MDInput from 'components/ui/material-dashboard-2-pro-react-v2.1.0/MDInput'
import MDButton from 'components/ui/material-dashboard-2-pro-react-v2.1.0/MDButton'

// Authentication layout components
import IllustrationLayout from 'pages-sections/material-dashboard-2-pro-react-v2.1.0/layouts/authentication/components/IllustrationLayout'

// Image
import bgImage from 'public/img/material-dashboard-2-pro-react-v2.1.0/illustrations/illustration-reset.jpg'

function Illustration() {
  const [rememberMe, setRememberMe] = useState(false)

  const handleSetRememberMe = () => setRememberMe(!rememberMe)

  return (
    <IllustrationLayout
      title="Sign In"
      description="Enter your email and password to sign in"
      illustration={bgImage}
    >
      <MDBox component="form" role="form">
        <MDBox mb={2}>
          <MDInput type="email" label="Email" fullWidth />
        </MDBox>
        <MDBox mb={2}>
          <MDInput type="password" label="Password" fullWidth />
        </MDBox>
        <MDBox display="flex" alignItems="center" ml={-1}>
          <Switch checked={rememberMe} onChange={handleSetRememberMe} />
          <MDTypography
            variant="button"
            fontWeight="regular"
            color="text"
            onClick={handleSetRememberMe}
            sx={{ cursor: 'pointer', userSelect: 'none', ml: -1 }}
          >
            &nbsp;&nbsp;Remember me
          </MDTypography>
        </MDBox>
        <MDBox mt={4} mb={1}>
          <MDButton variant="gradient" color="info" size="large" fullWidth>
            sign in
          </MDButton>
        </MDBox>
        <MDBox mt={3} textAlign="center">
          <MDTypography variant="button" color="text">
            Don&apos;t have an account?{' '}
            <MDTypography
              component={Link}
              href="/authentication/sign-up/cover"
              variant="button"
              color="info"
              fontWeight="medium"
              textGradient
            >
              Sign up
            </MDTypography>
          </MDTypography>
        </MDBox>
      </MDBox>
    </IllustrationLayout>
  )
}

export default Illustration
