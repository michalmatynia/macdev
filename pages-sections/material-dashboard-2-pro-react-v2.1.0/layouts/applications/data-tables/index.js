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

// @mui material components
import Card from '@mui/material/Card'

// Material Dashboard 2 PRO React components
import MDBox from 'components/ui/material-dashboard-2-pro-react-v2.1.0/MDBox'
import MDTypography from 'components/ui/material-dashboard-2-pro-react-v2.1.0/MDTypography'

// Material Dashboard 2 PRO React examples
import DashboardLayout from 'components/blocks/material-dashboard-2-pro-react-v2.1.0/LayoutContainers/DashboardLayout'
import DashboardNavbar from 'components/blocks/material-dashboard-2-pro-react-v2.1.0/Navbars/DashboardNavbar'
import Footer from 'components/blocks/material-dashboard-2-pro-react-v2.1.0/Footer'
import DataTable from 'components/blocks/material-dashboard-2-pro-react-v2.1.0/Tables/DataTable'

// Data
import dataTableData from 'pages-sections/material-dashboard-2-pro-react-v2.1.0/layouts/applications/data-tables/data/dataTableData'

function DataTables() {
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox pt={6} pb={3}>
        <MDBox mb={3}>
          <Card>
            <MDBox p={3} lineHeight={1}>
              <MDTypography variant="h5" fontWeight="medium">
                Datatable Simple
              </MDTypography>
              <MDTypography variant="button" color="text">
                A lightweight, extendable, dependency-free javascript HTML table
                plugin.
              </MDTypography>
            </MDBox>
            <DataTable table={dataTableData} />
          </Card>
        </MDBox>
        <Card>
          <MDBox p={3} lineHeight={1}>
            <MDTypography variant="h5" fontWeight="medium">
              Datatable Search
            </MDTypography>
            <MDTypography variant="button" color="text">
              A lightweight, extendable, dependency-free javascript HTML table
              plugin.
            </MDTypography>
          </MDBox>
          <DataTable table={dataTableData} canSearch />
        </Card>
      </MDBox>
      <Footer />
    </DashboardLayout>
  )
}

export default DataTables
