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

// GeneralCards page components
import CardRaised from 'pages-sections/material-kit-pro-react-v2.0.0/layouts/sections/page-sections/general-cards/components/CardRaised'
import CardImageInside from 'pages-sections/material-kit-pro-react-v2.0.0/layouts/sections/page-sections/general-cards/components/CardImageInside'
import CardWithColoredShadow from 'pages-sections/material-kit-pro-react-v2.0.0/layouts/sections/page-sections/general-cards/components/CardWithColoredShadow'
import CardRotate from 'pages-sections/material-kit-pro-react-v2.0.0/layouts/sections/page-sections/general-cards/components/CardRotate'
import CardPricing from 'pages-sections/material-kit-pro-react-v2.0.0/layouts/sections/page-sections/general-cards/components/CardPricing'

// GeneralCards page components code
import cardRaisedCode from 'pages-sections/material-kit-pro-react-v2.0.0/layouts/sections/page-sections/general-cards/components/CardRaised/code'
import cardImageInsideCode from 'pages-sections/material-kit-pro-react-v2.0.0/layouts/sections/page-sections/general-cards/components/CardImageInside/code'
import cardWithColoredShadowCode from 'pages-sections/material-kit-pro-react-v2.0.0/layouts/sections/page-sections/general-cards/components/CardWithColoredShadow/code'
import cardRotateCode from 'pages-sections/material-kit-pro-react-v2.0.0/layouts/sections/page-sections/general-cards/components/CardRotate/code'
import cardPricingCode from 'pages-sections/material-kit-pro-react-v2.0.0/layouts/sections/page-sections/general-cards/components/CardPricing/code'

function GeneralCards() {
  return (
    <BaseLayout
      title="General Cards"
      breadcrumb={[
        {
          label: 'Page Sections',
          route: '/sections/page-sections/general-cards',
        },
        { label: 'General Cards' },
      ]}
    >
      <View title="Card Raised" code={cardRaisedCode}>
        <CardRaised />
      </View>
      <View title="Card image inside" code={cardImageInsideCode}>
        <CardImageInside />
      </View>
      <View title="Card with colored shadow" code={cardWithColoredShadowCode}>
        <CardWithColoredShadow />
      </View>
      <View title="Card rotate" code={cardRotateCode}>
        <CardRotate />
      </View>
      <View title="Card pricing" code={cardPricingCode}>
        <CardPricing />
      </View>
    </BaseLayout>
  )
}

export default GeneralCards
