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
import Card from '@mui/material/Card'

// Material Kit 2 PRO React components
import MKBox from 'components/ui/material-kit-pro-react-v2.0.0/MKBox'

// Material Kit 2 PRO React examples
import DefaultNavbar from 'components/blocks/material-kit-pro-react-v2.0.0/Navbars/DefaultNavbar'

// Author page sections
import Profile from 'pages-sections/material-kit-pro-react-v2.0.0/pages/Blogs/Author/sections/Profile'
import Posts from 'pages-sections/material-kit-pro-react-v2.0.0/pages/Blogs/Author/sections/Posts'
import Contact from 'pages-sections/material-kit-pro-react-v2.0.0/pages/Blogs/Author/sections/Contact'
import Footer from 'pages-sections/material-kit-pro-react-v2.0.0/pages/Blogs/Author/sections/Footer'

// Routes
import routes from 'data/material-kit-pro-react-v2.0.0/rootsystem/routes'

// Images
import bgImage from 'public/img/material-kit-pro-react-v2.0.0/city-profile.jpg'

function Author() {
  return (
    <>
      <DefaultNavbar
        routes={routes}
        action={{
          type: 'external',
          route: 'https://www.creative-tim.com/product/material-kit-pro-react',
          label: 'buy now',
          color: 'info',
        }}
        transparent
        light
      />
      <MKBox bgColor="white">
        <MKBox
          minHeight="25rem"
          width="100%"
          sx={{
            backgroundImage: ({
              functions: { linearGradient, rgba },
              palette: { gradients },
            }) =>
              `${linearGradient(
                rgba(gradients.dark.main, 0.8),
                rgba(gradients.dark.state, 0.8)
              )}, url(${bgImage.src})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            display: 'grid',
            placeItems: 'center',
          }}
        />
        <Card
          sx={{
            p: 2,
            mx: { xs: 2, lg: 3 },
            mt: -8,
            mb: 4,
            backgroundColor: ({ palette: { white }, functions: { rgba } }) =>
              rgba(white.main, 0.8),
            backdropFilter: 'saturate(200%) blur(30px)',
            boxShadow: ({ boxShadows: { xxl } }) => xxl,
          }}
        >
          <Profile />
          <Posts />
        </Card>
        <Contact />
        <Footer />
      </MKBox>
    </>
  )
}

export default Author
