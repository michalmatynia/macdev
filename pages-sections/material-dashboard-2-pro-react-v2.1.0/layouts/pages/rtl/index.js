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

import { useEffect, useMemo, useState } from 'react'

// @mui material components
import Grid from '@mui/material/Grid'
import Icon from '@mui/material/Icon'

// Material Dashboard 2 PRO React components
import MDBox from 'components/ui/material-dashboard-2-pro-react-v2.1.0/MDBox'
import MDTypography from 'components/ui/material-dashboard-2-pro-react-v2.1.0/MDTypography'

// Material Dashboard 2 PRO React examples
import DashboardLayout from 'components/blocks/material-dashboard-2-pro-react-v2.1.0/LayoutContainers/DashboardLayout'
import DashboardNavbar from 'components/blocks/material-dashboard-2-pro-react-v2.1.0/Navbars/DashboardNavbar'
import Footer from 'components/blocks/material-dashboard-2-pro-react-v2.1.0/Footer'
import MiniStatisticsCard from 'components/blocks/material-dashboard-2-pro-react-v2.1.0/Cards/StatisticsCards/MiniStatisticsCard'
import ProgressLineChart from 'components/blocks/material-dashboard-2-pro-react-v2.1.0/Charts/LineCharts/ProgressLineChart'
import DefaultInfoCard from 'components/blocks/material-dashboard-2-pro-react-v2.1.0/Cards/InfoCards/DefaultInfoCard'
import MasterCard from 'components/blocks/material-dashboard-2-pro-react-v2.1.0/Cards/MasterCard'
import MiniInfoCard from 'components/blocks/material-dashboard-2-pro-react-v2.1.0/Cards/InfoCards/MiniInfoCard'
import ControllerCard from 'components/blocks/material-dashboard-2-pro-react-v2.1.0/Cards/ControllerCard'
import Calendar from 'components/blocks/material-dashboard-2-pro-react-v2.1.0/Calendar'
import CategoriesList from 'components/blocks/material-dashboard-2-pro-react-v2.1.0/Lists/CategoriesList'

// RTL page components
import Steps from 'pages-sections/material-dashboard-2-pro-react-v2.1.0/layouts/pages/rtl/components/Steps'
import FullBody from 'pages-sections/material-dashboard-2-pro-react-v2.1.0/layouts/pages/rtl/components/FullBody'
import MediaPlayer from 'pages-sections/material-dashboard-2-pro-react-v2.1.0/layouts/pages/rtl/components/MediaPlayer'
import OrdersOverview from 'pages-sections/material-dashboard-2-pro-react-v2.1.0/layouts/pages/rtl/components/OrdersOverview'
import UpcomingEvents from 'pages-sections/material-dashboard-2-pro-react-v2.1.0/layouts/pages/rtl/components/UpcomingEvents'
import Chart from 'pages-sections/material-dashboard-2-pro-react-v2.1.0/layouts/pages/rtl/components/Chart'

// Data
import progressLineChartData from 'pages-sections/material-dashboard-2-pro-react-v2.1.0/layouts/pages/rtl/data/progressLineChartData'
import calendarEventsData from 'pages-sections/material-dashboard-2-pro-react-v2.1.0/layouts/pages/rtl/data/calendarEventsData'
import categoriesListData from 'pages-sections/material-dashboard-2-pro-react-v2.1.0/layouts/pages/rtl/data/categoriesListData'
import caloriesChartData from 'pages-sections/material-dashboard-2-pro-react-v2.1.0/layouts/pages/rtl/data/caloriesChartData'

// Material Dashboard 2 PRO React contexts
import {
  useMaterialUIController,
  setDirection,
} from 'contexts/material-dashboard-2-pro-react-v2.1.0/context'

function RTL() {
  const [, dispatch] = useMaterialUIController()
  const [lights, setLights] = useState(false)

  const handleSetLights = () => setLights(!lights)

  // Changing the direction to rtl
  useEffect(() => {
    setDirection(dispatch, 'rtl')

    return () => setDirection(dispatch, 'ltr')
  }, [dispatch])

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox my={3}>
        <MDBox mb={3}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6} lg={4}>
              <UpcomingEvents />
            </Grid>
            <Grid item xs={12} lg={8}>
              <ProgressLineChart
                icon="date_range"
                title="مهام"
                count={480}
                progress={60}
                height="13.375rem"
                chart={progressLineChartData}
              />
            </Grid>
          </Grid>
        </MDBox>
        <MDBox mb={3}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6} lg={3}>
              <MDBox mb={3}>
                <MiniStatisticsCard
                  title={{ text: 'صحة البطارية' }}
                  count="99 %"
                  icon={{ color: 'info', component: 'battery_charging_full' }}
                  direction="left"
                />
              </MDBox>
              <MiniStatisticsCard
                title={{ text: 'طبقة صوت الموسيقا' }}
                count="15/100"
                icon={{ color: 'info', component: 'volume_down' }}
                direction="left"
              />
            </Grid>
            <Grid
              item
              xs={12}
              sm={3}
              lg={5}
              display="flex"
              flexDirection={{ xs: 'column', sm: 'row' }}
            >
              <MDBox width="100%" mr={{ xs: 0, sm: 3 }} mb={{ xs: 3, sm: 0 }}>
                <DefaultInfoCard
                  icon="account_balance"
                  title="مرتب"
                  description="تنتمي التفاعلية"
                  value="+$2000"
                />
              </MDBox>
              <MDBox width="100%">
                <DefaultInfoCard
                  icon="paypal"
                  title="باي بال"
                  description="دفع لحسابهم الخاص"
                  value="$455.00"
                />
              </MDBox>
            </Grid>
            <Grid item xs={12} lg={4}>
              <MasterCard
                number={4562112245947852}
                holder="جاك بيترسون"
                expires="11/22"
              />
            </Grid>
          </Grid>
        </MDBox>
        <MDBox mb={3}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6} lg={3}>
              <FullBody />
            </Grid>
            <Grid item xs={12} md={6} lg={2}>
              <ControllerCard
                state={lights}
                icon={
                  <Icon
                    className={lights ? 'text-white' : 'text-dark'}
                    fontSize="large"
                  >
                    lightbulb
                  </Icon>
                }
                title="درجة حرارة"
                onChange={handleSetLights}
              />
            </Grid>
            <Grid item xs={12} lg={3}>
              <Chart
                title="سعرات حراريه"
                count={97}
                percentage={{ color: 'success', label: '+5%' }}
                chart={caloriesChartData}
              />
            </Grid>
            <Grid item xs={12} md={6} lg={2}>
              <MiniInfoCard
                icon="shortcut"
                title={
                  <>
                    754&nbsp;
                    <MDTypography
                      variant="button"
                      color="secondary"
                      fontWeight="medium"
                    >
                      م
                    </MDTypography>
                  </>
                }
                description="مدينة نيويورك"
              />
            </Grid>
            <Grid item xs={12} md={6} lg={2}>
              <Steps />
            </Grid>
          </Grid>
        </MDBox>
        <Grid container spacing={3}>
          <Grid item xs={12} lg={5}>
            {useMemo(
              () => (
                <Calendar
                  header={{ title: 'تقويم', date: 'Monday, 2021' }}
                  headerToolbar={false}
                  initialView="dayGridMonth"
                  initialDate="2021-08-10"
                  events={calendarEventsData}
                  selectable
                  editable
                />
              ),
              []
            )}
          </Grid>
          <Grid item xs={12} lg={3}>
            <MDBox mb={3}>
              <CategoriesList title="فئات" categories={categoriesListData} />
            </MDBox>
            <MediaPlayer />
          </Grid>
          <Grid item xs={12} lg={4}>
            <OrdersOverview />
          </Grid>
        </Grid>
      </MDBox>
      <Footer />
    </DashboardLayout>
  )
}

export default RTL
