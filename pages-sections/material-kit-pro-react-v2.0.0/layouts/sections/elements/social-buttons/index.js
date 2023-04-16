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

// Sections components
import BaseLayout from 'pages-sections/material-kit-pro-react-v2.0.0/layouts/sections/components/BaseLayout'
import View from 'pages-sections/material-kit-pro-react-v2.0.0/layouts/sections/components/View'

// SocialButtons page components
import SocialButtonsSection from 'pages-sections/material-kit-pro-react-v2.0.0/layouts/sections/elements/social-buttons/components/SocialButtons'
import SocialButtonsIcon from 'pages-sections/material-kit-pro-react-v2.0.0/layouts/sections/elements/social-buttons/components/SocialButtonsIcon'

// SocialButtons page components code
import socialButtonsSectionCode from 'pages-sections/material-kit-pro-react-v2.0.0/layouts/sections/elements/social-buttons/components/SocialButtons/code'
import socialButtonsIconCode from 'pages-sections/material-kit-pro-react-v2.0.0/layouts/sections/elements/social-buttons/components/SocialButtonsIcon/code'

function SocialButtons() {
  return (
    <BaseLayout
      title="Social Buttons"
      breadcrumb={[
        { label: 'Page Sections', route: '/sections/elements/social-buttons' },
        { label: 'Social Buttons' },
      ]}
    >
      <View title="Social buttons" code={socialButtonsSectionCode}>
        <SocialButtonsSection />
      </View>
      <View title="Social buttons icon only" code={socialButtonsIconCode}>
        <SocialButtonsIcon />
      </View>
    </BaseLayout>
  )
}

export default SocialButtons
