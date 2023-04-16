/**
=========================================================
* Material Dashboard 2 PRO React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-pro-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// Material Dashboard 2 PRO React components
import MDBox from 'components/ui/material-dashboard-2-pro-react-v2.1.0/MDBox'
import MDProgress from 'components/ui/material-dashboard-2-pro-react-v2.1.0/MDProgress'

// ProductPage page components
import ProductCell from 'pages-sections/material-dashboard-2-pro-react-v2.1.0/layouts/ecommerce/products/product-page/components/ProductCell'
import ReviewCell from 'pages-sections/material-dashboard-2-pro-react-v2.1.0/layouts/ecommerce/products/product-page/components/ReviewCell'
import DefaultCell from 'pages-sections/material-dashboard-2-pro-react-v2.1.0/layouts/ecommerce/products/product-page/components/DefaultCell'

// Images
import blackChair from 'public/img/material-dashboard-2-pro-react-v2.1.0/ecommerce/black-chair.jpeg'
import chairPink from 'public/img/material-dashboard-2-pro-react-v2.1.0/ecommerce/chair-pink.jpeg'
import chairSteel from 'public/img/material-dashboard-2-pro-react-v2.1.0/ecommerce/chair-steel.jpeg'
import chairWood from 'public/img/material-dashboard-2-pro-react-v2.1.0/ecommerce/chair-wood.jpeg'

const dataTableData = {
  columns: [
    { Header: 'product', accessor: 'product', width: '50%' },
    { Header: 'price', accessor: 'price', width: '10%' },
    { Header: 'review', accessor: 'review', align: 'center' },
    {
      Header: 'availability',
      accessor: 'availability',
      align: 'center',
      width: '40%',
    },
    { Header: 'id', accessor: 'id', align: 'center' },
  ],

  rows: [
    {
      product: (
        <ProductCell image={blackChair.src} name="Christopher Knight Home" />
      ),
      price: <DefaultCell>$89.53</DefaultCell>,
      review: <ReviewCell rating={4.5} />,
      availability: (
        <MDBox width="8rem">
          <MDProgress variant="gradient" value={80} color="success" />
        </MDBox>
      ),
      id: <DefaultCell>230019</DefaultCell>,
    },
    {
      product: (
        <ProductCell image={chairPink.src} name="Bar Height Swivel Barstool" />
      ),
      price: <DefaultCell>$99.99</DefaultCell>,
      review: <ReviewCell rating={5} />,
      availability: (
        <MDBox width="8rem">
          <MDProgress variant="gradient" value={90} color="success" />
        </MDBox>
      ),
      id: <DefaultCell>87120</DefaultCell>,
    },
    {
      product: (
        <ProductCell image={chairSteel.src} name="Signature Design by Ashley" />
      ),
      price: <DefaultCell>$129.00</DefaultCell>,
      review: <ReviewCell rating={4.5} />,
      availability: (
        <MDBox width="8rem">
          <MDProgress variant="gradient" value={60} color="warning" />
        </MDBox>
      ),
      id: <DefaultCell>412301</DefaultCell>,
    },
    {
      product: <ProductCell image={chairWood.src} name="Modern Square" />,
      price: <DefaultCell>$59.99</DefaultCell>,
      review: <ReviewCell rating={4.5} />,
      availability: (
        <MDBox width="8rem">
          <MDProgress variant="gradient" value={40} color="warning" />
        </MDBox>
      ),
      id: <DefaultCell>001992</DefaultCell>,
    },
  ],
}

export default dataTableData
