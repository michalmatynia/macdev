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

// Inputs page components
import InputDynamic from 'pages-sections/material-kit-pro-react-v2.0.0/layouts/sections/input-areas/inputs/components/InputDynamic'
import InputStatic from 'pages-sections/material-kit-pro-react-v2.0.0/layouts/sections/input-areas/inputs/components/InputStatic'
import InputOutlined from 'pages-sections/material-kit-pro-react-v2.0.0/layouts/sections/input-areas/inputs/components/InputOutlined'
import InputIcon from 'pages-sections/material-kit-pro-react-v2.0.0/layouts/sections/input-areas/inputs/components/InputIcon'
import InputSuccess from 'pages-sections/material-kit-pro-react-v2.0.0/layouts/sections/input-areas/inputs/components/InputSuccess'
import InputError from 'pages-sections/material-kit-pro-react-v2.0.0/layouts/sections/input-areas/inputs/components/InputError'
import InputDisabled from 'pages-sections/material-kit-pro-react-v2.0.0/layouts/sections/input-areas/inputs/components/InputDisabled'

// Inputs page components code
import inputDynamicCode from 'pages-sections/material-kit-pro-react-v2.0.0/layouts/sections/input-areas/inputs/components/InputDynamic/code'
import inputStaticCode from 'pages-sections/material-kit-pro-react-v2.0.0/layouts/sections/input-areas/inputs/components/InputStatic/code'
import inputOutlinedCode from 'pages-sections/material-kit-pro-react-v2.0.0/layouts/sections/input-areas/inputs/components/InputOutlined/code'
import inputIconCode from 'pages-sections/material-kit-pro-react-v2.0.0/layouts/sections/input-areas/inputs/components/InputIcon/code'
import inputSuccessCode from 'pages-sections/material-kit-pro-react-v2.0.0/layouts/sections/input-areas/inputs/components/InputSuccess/code'
import inputErrorCode from 'pages-sections/material-kit-pro-react-v2.0.0/layouts/sections/input-areas/inputs/components/InputError/code'
import inputDisabledCode from 'pages-sections/material-kit-pro-react-v2.0.0/layouts/sections/input-areas/inputs/components/InputDisabled/code'

function Inputs() {
  return (
    <BaseLayout
      title="Inputs"
      breadcrumb={[
        { label: 'Page Sections', route: '/sections/input-areas/inputs' },
        { label: 'Inputs' },
      ]}
    >
      <View title="Input dynamic" code={inputDynamicCode}>
        <InputDynamic />
      </View>
      <View title="Input static" code={inputStaticCode}>
        <InputStatic />
      </View>
      <View title="Input outlined" code={inputOutlinedCode}>
        <InputOutlined />
      </View>
      <View title="Input icon" code={inputIconCode}>
        <InputIcon />
      </View>
      <View title="Input success" code={inputSuccessCode}>
        <InputSuccess />
      </View>
      <View title="Input error" code={inputErrorCode}>
        <InputError />
      </View>
      <View title="Input disabled" code={inputDisabledCode}>
        <InputDisabled />
      </View>
    </BaseLayout>
  )
}

export default Inputs
