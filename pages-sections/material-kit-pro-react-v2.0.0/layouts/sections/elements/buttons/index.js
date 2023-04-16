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

// Buttons page components
import ButtonsGradient from 'pages-sections/material-kit-pro-react-v2.0.0/layouts/sections/elements/buttons/components/ButtonsGradient'
import ButtonsContained from 'pages-sections/material-kit-pro-react-v2.0.0/layouts/sections/elements/buttons/components/ButtonsContained'
import ButtonsOutlined from 'pages-sections/material-kit-pro-react-v2.0.0/layouts/sections/elements/buttons/components/ButtonsOutlined'
import ButtonsSizes from 'pages-sections/material-kit-pro-react-v2.0.0/layouts/sections/elements/buttons/components/ButtonsSizes'
import ButtonsIconLeft from 'pages-sections/material-kit-pro-react-v2.0.0/layouts/sections/elements/buttons/components/ButtonsIconLeft'
import ButtonsIconRight from 'pages-sections/material-kit-pro-react-v2.0.0/layouts/sections/elements/buttons/components/ButtonsIconRight'

// Buttons page components code
import buttonsGradientCode from 'pages-sections/material-kit-pro-react-v2.0.0/layouts/sections/elements/buttons/components/ButtonsGradient/code'
import buttonsContainedCode from 'pages-sections/material-kit-pro-react-v2.0.0/layouts/sections/elements/buttons/components/ButtonsContained/code'
import buttonsOutlinedCode from 'pages-sections/material-kit-pro-react-v2.0.0/layouts/sections/elements/buttons/components/ButtonsOutlined/code'
import buttonsSizesCode from 'pages-sections/material-kit-pro-react-v2.0.0/layouts/sections/elements/buttons/components/ButtonsSizes/code'
import buttonsIconLeftCode from 'pages-sections/material-kit-pro-react-v2.0.0/layouts/sections/elements/buttons/components/ButtonsIconLeft/code'
import buttonsIconRightCode from 'pages-sections/material-kit-pro-react-v2.0.0/layouts/sections/elements/buttons/components/ButtonsIconRight/code'

function Buttons() {
  return (
    <BaseLayout
      title="Buttons"
      breadcrumb={[
        { label: 'Page Sections', route: '/sections/elements/buttons' },
        { label: 'Buttons' },
      ]}
    >
      <View title="Buttons gradient" code={buttonsGradientCode}>
        <ButtonsGradient />
      </View>
      <View title="Buttons contained" code={buttonsContainedCode}>
        <ButtonsContained />
      </View>
      <View title="Buttons outlined" code={buttonsOutlinedCode}>
        <ButtonsOutlined />
      </View>
      <View title="Buttons sizes" code={buttonsSizesCode}>
        <ButtonsSizes />
      </View>
      <View title="Buttons icon left" code={buttonsIconLeftCode}>
        <ButtonsIconLeft />
      </View>
      <View title="Buttons icon right" code={buttonsIconRightCode}>
        <ButtonsIconRight />
      </View>
    </BaseLayout>
  )
}

export default Buttons
