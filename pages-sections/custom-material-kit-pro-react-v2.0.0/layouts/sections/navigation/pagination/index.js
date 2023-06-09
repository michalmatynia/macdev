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

// Material Kit 2 PRO React components
import MKBox from 'components/ui/material-kit-pro-react-v2.0.0/MKBox'

// Sections components
import BaseLayout from 'pages-sections/material-kit-pro-react-v2.0.0/layouts/sections/components/BaseLayout'
import View from 'pages-sections/material-kit-pro-react-v2.0.0/layouts/sections/components/View'

// Stats page components
import PaginationSimple from 'pages-sections/material-kit-pro-react-v2.0.0/layouts/sections/navigation/pagination/components/PaginationSimple'
import PaginationSizing from 'pages-sections/material-kit-pro-react-v2.0.0/layouts/sections/navigation/pagination/components/PaginationSizing'
import PaginationVariants from 'pages-sections/material-kit-pro-react-v2.0.0/layouts/sections/navigation/pagination/components/PaginationVariants'

// Stats page components code
import paginationSimpleCode from 'pages-sections/material-kit-pro-react-v2.0.0/layouts/sections/navigation/pagination/components/PaginationSimple/code'
import paginationSizingCode from 'pages-sections/material-kit-pro-react-v2.0.0/layouts/sections/navigation/pagination/components/PaginationSizing/code'
import paginationVariantsCode from 'pages-sections/material-kit-pro-react-v2.0.0/layouts/sections/navigation/pagination/components/PaginationVariants/code'

function Pagination() {
  return (
    <BaseLayout
      title="Pagination"
      breadcrumb={[
        { label: 'Page Sections', route: '/sections/navigation/pagination' },
        { label: 'Pagination' },
      ]}
    >
      <View title="Pagination simple" code={paginationSimpleCode}>
        <MKBox py={3}>
          <PaginationSimple />
        </MKBox>
      </View>
      <View title="Pagination sizing" code={paginationSizingCode}>
        <MKBox p={3}>
          <PaginationSizing />
        </MKBox>
      </View>
      <View title="Pagination Variant" code={paginationVariantsCode}>
        <MKBox p={3}>
          <PaginationVariants />
        </MKBox>
      </View>
    </BaseLayout>
  )
}

export default Pagination
