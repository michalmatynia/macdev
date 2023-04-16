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

// Forms page components
import FormSimple from 'pages-sections/material-kit-pro-react-v2.0.0/layouts/sections/input-areas/forms/components/FormSimple'
import FormContext from 'pages-sections/material-kit-pro-react-v2.0.0/layouts/sections/input-areas/forms/components/FormContext'

// Forms page components code
import formSimpleCode from 'pages-sections/material-kit-pro-react-v2.0.0/layouts/sections/input-areas/forms/components/FormSimple/code'
import formContextCode from 'pages-sections/material-kit-pro-react-v2.0.0/layouts/sections/input-areas/forms/components/FormContext/code'

function Forms() {
  return (
    <BaseLayout
      title="Forms"
      breadcrumb={[
        { label: 'Page Sections', route: '/sections/input-areas/forms' },
        { label: 'Forms' },
      ]}
    >
      <View title="Form Simple" code={formSimpleCode}>
        <FormSimple />
      </View>
      <View title="Form Context" code={formContextCode}>
        <FormContext />
      </View>
    </BaseLayout>
  )
}

export default Forms
