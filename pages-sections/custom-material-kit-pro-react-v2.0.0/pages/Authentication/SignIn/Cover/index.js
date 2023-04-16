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
import Card from '@mui/material/Card'
import Switch from '@mui/material/Switch'

// Material Kit 2 PRO React components
import MKBox from 'components/ui/material-kit-pro-react-v2.0.0/MKBox'
import MKTypography from 'components/ui/material-kit-pro-react-v2.0.0/MKTypography'
import MKInput from 'components/ui/material-kit-pro-react-v2.0.0/MKInput'
import MKButton from 'components/ui/material-kit-pro-react-v2.0.0/MKButton'

// Authentication layout components
import CoverLayout from 'pages-sections/material-kit-pro-react-v2.0.0/pages/Authentication/components/CoverLayout'

// Images
import bgImage from 'public/img/material-kit-pro-react-v2.0.0/bg-sign-in-cover.jpeg'

function SignInCover() {
  const [rememberMe, setRememberMe] = useState(true)

  const handleSetRememberMe = () => setRememberMe(!rememberMe)

  return (
    <CoverLayout image={bgImage.src}>
      <Card>
        <MKBox
          variant="gradient"
          bgColor="info"
          borderRadius="lg"
          coloredShadow="success"
          mx={2}
          mt={-3}
          p={3}
          mb={1}
          textAlign="center"
        >
          <MKTypography variant="h4" fontWeight="medium" color="white" mt={1}>
            Sign in
          </MKTypography>
          <MKTypography display="block" variant="button" color="white" my={1}>
            Enter your email and password to Sign In
          </MKTypography>
        </MKBox>
        <MKBox pt={4} pb={3} px={3}>
          <MKBox component="form" role="form">
            <MKBox mb={2}>
              <MKInput
                type="email"
                label="Email"
                variant="standard"
                fullWidth
                placeholder="john@example.com"
                InputLabelProps={{ shrink: true }}
              />
            </MKBox>
            <MKBox mb={2}>
              <MKInput
                type="password"
                label="Password"
                variant="standard"
                fullWidth
                placeholder="************"
                InputLabelProps={{ shrink: true }}
              />
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
              <MKButton variant="gradient" color="info" fullWidth>
                sign in
              </MKButton>
            </MKBox>
            <MKBox mt={3} mb={1} textAlign="center">
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
        </MKBox>
      </Card>
    </CoverLayout>
  )
}

export default SignInCover
