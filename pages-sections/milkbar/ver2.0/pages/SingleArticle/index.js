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

import { useEffect, useRef } from 'react'

// rellax
import Rellax from 'rellax'

// @mui material components
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'

// Material Kit 2 PRO React components
import MKBox from 'components/ui/material-kit-pro-react-v2.0.0/MKBox'
import MKTypography from 'components/ui/material-kit-pro-react-v2.0.0/MKTypography'

// Material Kit 2 PRO React examples
import DefaultNavbar from 'components/blocks/material-kit-pro-react-v2.0.0/Navbars/DefaultNavbar'
import DefaultFooter from 'components/blocks/material-kit-pro-react-v2.0.0/Footers/DefaultFooter'

// About Us page sections
import Information from 'pages-sections/material-kit-pro-react-v2.0.0/pages/Blogs/SingleArticle/sections/Information'
import Steps from 'pages-sections/material-kit-pro-react-v2.0.0/pages/Blogs/SingleArticle/sections/Steps'
import OurEfforts from 'pages-sections/material-kit-pro-react-v2.0.0/pages/Blogs/SingleArticle/sections/OurEfforts'
import Features from 'pages-sections/material-kit-pro-react-v2.0.0/pages/Blogs/SingleArticle/sections/Features'
import Posts from 'pages-sections/material-kit-pro-react-v2.0.0/pages/Blogs/SingleArticle/sections/Posts'
import Support from 'pages-sections/material-kit-pro-react-v2.0.0/pages/Blogs/SingleArticle/sections/Support'

// Images
import bgImage from 'public/img/material-kit-pro-react-v2.0.0/bg5.jpg'

function SingleArticle() {
  const headerRef = useRef(null)

  // Setting up rellax
  useEffect(() => {
    if (headerRef.current) {
      const parallax = new Rellax(headerRef.current, {
        speed: -6,
      })

      return () => {
        parallax.destroy()
      }
    }
  }, [])

  return (
    <>
      <Card
        sx={{
          p: 2,
          mx: { xs: 2, lg: 3 },
          mt: -8,
          mb: 4,
          boxShadow: ({ boxShadows: { xxl } }) => xxl,
        }}
      >
        <Information />
        <Steps />
        <OurEfforts />
        <Features />
        <Posts />
        <Support />
      </Card>
    </>
  )
}

export default SingleArticle
