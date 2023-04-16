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

import { useState } from 'react'

// react-router-dom components
// import { Link } from 'react-router-dom'
import Link from 'next/link'
// @mui material components
import Switch from '@mui/material/Switch'

// Material Kit 2 PRO React components
import MKBox from 'components/ui/custom-material-kit-pro-react-v2.0.0/MKBox'
import MKTypography from 'components/ui/custom-material-kit-pro-react-v2.0.0/MKTypography'
import MKInput from 'components/ui/custom-material-kit-pro-react-v2.0.0/MKInput'
import MKButton from 'components/ui/custom-material-kit-pro-react-v2.0.0/MKButton'

// Authentication layout components
import IllustrationLayout from 'pages-sections/milkbar/ver2.0/pages/Authentication/components/IllustrationLayout'

// Image
import bgImage from 'public/img/milkbar/ver2.0/login/Mosaic_architectural_photography_of_a_modern_interior_3939a935-db99-4afd-abc3-3df67b44fca1.png'

function Illustration() {
  const [rememberMe, setRememberMe] = useState(false)

  const handleSetRememberMe = () => setRememberMe(!rememberMe)

  return (
    <IllustrationLayout
      title="Sign In"
      description="Enter your email and password to sign in"
      illustration={bgImage.src}
    >
      <MKBox component="form" role="form">
        <MKBox mb={2}>
          <MKInput type="email" label="Email" fullWidth />
        </MKBox>
        <MKBox mb={2}>
          <MKInput type="password" label="Password" fullWidth />
        </MKBox>
        <MKBox display="flex" alignItems="center" ml={-1}>
          <Switch checked={rememberMe} onChange={handleSetRememberMe} />
          <MKTypography
            variant="button"
            fontWeight="regular"
            color="text"
            onClick={handleSetRememberMe}
            sx={{ cursor: 'pointer', userSelect: 'none', ml: -1 }}
          >
            &nbsp;&nbsp;Remember me
          </MKTypography>
        </MKBox>
        <MKBox mt={4} mb={1}>
          <MKButton variant="gradient" color="info" size="large" fullWidth>
            sign in
          </MKButton>
        </MKBox>
        <MKBox mt={3} textAlign="center">
          <MKTypography variant="button" color="text">
            Don&apos;t have an account?{' '}
            <MKTypography
              component={Link}
              href="/authentication/sign-up/cover"
              variant="button"
              color="info"
              fontWeight="medium"
              textGradient
            >
              Sign up
            </MKTypography>
          </MKTypography>
        </MKBox>
      </MKBox>
    </IllustrationLayout>
  )
}

export default Illustration
