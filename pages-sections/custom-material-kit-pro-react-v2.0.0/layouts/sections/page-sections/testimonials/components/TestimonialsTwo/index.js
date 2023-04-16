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

import { useRef } from 'react'

// SwiperJS
import SwiperCore, { Autoplay, Navigation } from 'swiper'

// SwiperJS react components
// import { Swiper, SwiperSlide } from 'swiper/react/swiper-react'
import { Swiper, SwiperSlide } from 'swiper/react'

// SwiperJS styles
import 'swiper/css'

// import 'swiper/swiper.min.css'
// import 'swiper/modules/navigation/navigation.min.css'

// @mui material components
import Container from '@mui/material/Container'
import Icon from '@mui/material/Icon'

// Material Kit 2 PRO React components
import MKBox from 'components/ui/material-kit-pro-react-v2.0.0/MKBox'
import MKTypography from 'components/ui/material-kit-pro-react-v2.0.0/MKTypography'

// Material Kit 2 PRO React examples
import ComplexReviewCard from 'components/blocks/material-kit-pro-react-v2.0.0/Cards/ReviewCards/ComplexReviewCard'

// Images
import review1 from 'public/img/material-kit-pro-react-v2.0.0/examples/clem-onojegaw.jpg'
import review2 from 'public/img/material-kit-pro-react-v2.0.0/examples/studio-3.jpg'
import logoSpotify from 'public/img/material-kit-pro-react-v2.0.0/logos/small-logos/logo-spotify.svg'
import logoSlack from 'public/img/material-kit-pro-react-v2.0.0/logos/small-logos/logo-slack.svg'

function TestimonialsTwo() {
  // install SwiperJS modules
  SwiperCore.use([Autoplay, Navigation])

  // Swiper navigation buttons styles
  const navigationStyles = {
    position: 'absolute',
    top: 0,
    zIndex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '15%',
    height: '100%',
    textAlign: 'center',
    opacity: 0.5,
    cursor: 'pointer',
    transition: 'opacity 0.15s ease',

    '&:hover, &:focus': {
      opacity: 1,
    },
  }

  // SwiperJS navigation buttons ref
  const navigationPrevRef = useRef(null)
  const navigationNextRef = useRef(null)

  return (
    <MKBox py={8} position="relative">
      <Swiper
        onInit={({ params, navigation }) => {
          const { navigation: nav } = params

          nav.prevEl = navigationPrevRef.current
          nav.nextEl = navigationNextRef.current
          navigation.init()
          navigation.update()
        }}
        autoplay={{ delay: 5000 }}
        speed={800}
        spaceBetween={0}
        slidesPerView={1}
        loop
      >
        <SwiperSlide>
          <Container>
            <ComplexReviewCard
              image={review1.src}
              title="Excelent payment service. You guys are the best!"
              review="Let the brain, muscles, nerves, every part of your body, be full of that idea, and just leave every other idea alone. This is the way to success."
              author={{
                logo: logoSpotify.src,
                name: 'Mathew Glock',
                role: 'Marketing Manager - Spotify',
              }}
            />
          </Container>
        </SwiperSlide>
        <SwiperSlide>
          <Container>
            <ComplexReviewCard
              image={review2.src}
              title="Awesome services! Fast and secure."
              review="Wealth creation is an evolutionarily recent positive-sum game. Status is an old zero-sum game. Those attacking wealth creation are often just seeking status."
              author={{
                logo: logoSlack.src,
                name: 'Mathew Glock',
                role: 'CFO - Slack',
              }}
            />
          </Container>
        </SwiperSlide>
        <MKTypography
          variant="h2"
          color="dark"
          sx={{
            ...navigationStyles,
            left: 0,
          }}
          ref={navigationPrevRef}
        >
          <Icon>chevron_left</Icon>
        </MKTypography>
        <MKTypography
          variant="h2"
          color="dark"
          sx={{
            ...navigationStyles,
            right: 0,
          }}
          ref={navigationNextRef}
        >
          <Icon>chevron_right</Icon>
        </MKTypography>
      </Swiper>
    </MKBox>
  )
}

export default TestimonialsTwo
