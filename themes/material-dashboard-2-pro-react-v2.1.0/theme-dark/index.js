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
import { createTheme } from '@mui/material/styles'
// import Fade from "@mui/material/Fade";

// Material Dashboard 2 PRO React base styles
import colors from 'themes/material-dashboard-2-pro-react-v2.1.0/theme-dark/base/colors'
import breakpoints from 'themes/material-dashboard-2-pro-react-v2.1.0/theme-dark/base/breakpoints'
import typography from 'themes/material-dashboard-2-pro-react-v2.1.0/theme-dark/base/typography'
import boxShadows from 'themes/material-dashboard-2-pro-react-v2.1.0/theme-dark/base/boxShadows'
import borders from 'themes/material-dashboard-2-pro-react-v2.1.0/theme-dark/base/borders'
import globals from 'themes/material-dashboard-2-pro-react-v2.1.0/theme-dark/base/globals'

// Material Dashboard 2 PRO React helper functions
import boxShadow from 'themes/material-dashboard-2-pro-react-v2.1.0/theme-dark/functions/boxShadow'
import hexToRgb from 'themes/material-dashboard-2-pro-react-v2.1.0/theme-dark/functions/hexToRgb'
import linearGradient from 'themes/material-dashboard-2-pro-react-v2.1.0/theme-dark/functions/linearGradient'
import pxToRem from 'themes/material-dashboard-2-pro-react-v2.1.0/theme-dark/functions/pxToRem'
import rgba from 'themes/material-dashboard-2-pro-react-v2.1.0/theme-dark/functions/rgba'

// Material Dashboard 2 PRO React components base styles for @mui material components
import sidenav from 'themes/material-dashboard-2-pro-react-v2.1.0/theme-dark/components/sidenav'
import list from 'themes/material-dashboard-2-pro-react-v2.1.0/theme-dark/components/list'
import listItem from 'themes/material-dashboard-2-pro-react-v2.1.0/theme-dark/components/list/listItem'
import listItemText from 'themes/material-dashboard-2-pro-react-v2.1.0/theme-dark/components/list/listItemText'
import card from 'themes/material-dashboard-2-pro-react-v2.1.0/theme-dark/components/card'
import cardMedia from 'themes/material-dashboard-2-pro-react-v2.1.0/theme-dark/components/card/cardMedia'
import cardContent from 'themes/material-dashboard-2-pro-react-v2.1.0/theme-dark/components/card/cardContent'
import button from 'themes/material-dashboard-2-pro-react-v2.1.0/theme-dark/components/button'
import iconButton from 'themes/material-dashboard-2-pro-react-v2.1.0/theme-dark/components/iconButton'
import input from 'themes/material-dashboard-2-pro-react-v2.1.0/theme-dark/components/form/input'
import inputLabel from 'themes/material-dashboard-2-pro-react-v2.1.0/theme-dark/components/form/inputLabel'
import inputOutlined from 'themes/material-dashboard-2-pro-react-v2.1.0/theme-dark/components/form/inputOutlined'
import textField from 'themes/material-dashboard-2-pro-react-v2.1.0/theme-dark/components/form/textField'
import menu from 'themes/material-dashboard-2-pro-react-v2.1.0/theme-dark/components/menu'
import menuItem from 'themes/material-dashboard-2-pro-react-v2.1.0/theme-dark/components/menu/menuItem'
import switchButton from 'themes/material-dashboard-2-pro-react-v2.1.0/theme-dark/components/form/switchButton'
import divider from 'themes/material-dashboard-2-pro-react-v2.1.0/theme-dark/components/divider'
import tableContainer from 'themes/material-dashboard-2-pro-react-v2.1.0/theme-dark/components/table/tableContainer'
import tableHead from 'themes/material-dashboard-2-pro-react-v2.1.0/theme-dark/components/table/tableHead'
import tableCell from 'themes/material-dashboard-2-pro-react-v2.1.0/theme-dark/components/table/tableCell'
import linearProgress from 'themes/material-dashboard-2-pro-react-v2.1.0/theme-dark/components/linearProgress'
import breadcrumbs from 'themes/material-dashboard-2-pro-react-v2.1.0/theme-dark/components/breadcrumbs'
import slider from 'themes/material-dashboard-2-pro-react-v2.1.0/theme-dark/components/slider'
import avatar from 'themes/material-dashboard-2-pro-react-v2.1.0/theme-dark/components/avatar'
import tooltip from 'themes/material-dashboard-2-pro-react-v2.1.0/theme-dark/components/tooltip'
import appBar from 'themes/material-dashboard-2-pro-react-v2.1.0/theme-dark/components/appBar'
import tabs from 'themes/material-dashboard-2-pro-react-v2.1.0/theme-dark/components/tabs'
import tab from 'themes/material-dashboard-2-pro-react-v2.1.0/theme-dark/components/tabs/tab'
import stepper from 'themes/material-dashboard-2-pro-react-v2.1.0/theme-dark/components/stepper'
import step from 'themes/material-dashboard-2-pro-react-v2.1.0/theme-dark/components/stepper/step'
import stepConnector from 'themes/material-dashboard-2-pro-react-v2.1.0/theme-dark/components/stepper/stepConnector'
import stepLabel from 'themes/material-dashboard-2-pro-react-v2.1.0/theme-dark/components/stepper/stepLabel'
import stepIcon from 'themes/material-dashboard-2-pro-react-v2.1.0/theme-dark/components/stepper/stepIcon'
import select from 'themes/material-dashboard-2-pro-react-v2.1.0/theme-dark/components/form/select'
import formControlLabel from 'themes/material-dashboard-2-pro-react-v2.1.0/theme-dark/components/form/formControlLabel'
import formLabel from 'themes/material-dashboard-2-pro-react-v2.1.0/theme-dark/components/form/formLabel'
import checkbox from 'themes/material-dashboard-2-pro-react-v2.1.0/theme-dark/components/form/checkbox'
import radio from 'themes/material-dashboard-2-pro-react-v2.1.0/theme-dark/components/form/radio'
import autocomplete from 'themes/material-dashboard-2-pro-react-v2.1.0/theme-dark/components/form/autocomplete'
import flatpickr from 'themes/material-dashboard-2-pro-react-v2.1.0/theme-dark/components/flatpickr'
import container from 'themes/material-dashboard-2-pro-react-v2.1.0/theme-dark/components/container'
import popover from 'themes/material-dashboard-2-pro-react-v2.1.0/theme-dark/components/popover'
import buttonBase from 'themes/material-dashboard-2-pro-react-v2.1.0/theme-dark/components/buttonBase'
import icon from 'themes/material-dashboard-2-pro-react-v2.1.0/theme-dark/components/icon'
import svgIcon from 'themes/material-dashboard-2-pro-react-v2.1.0/theme-dark/components/svgIcon'
import link from 'themes/material-dashboard-2-pro-react-v2.1.0/theme-dark/components/link'
import dialog from 'themes/material-dashboard-2-pro-react-v2.1.0/theme-dark/components/dialog'
import dialogTitle from 'themes/material-dashboard-2-pro-react-v2.1.0/theme-dark/components/dialog/dialogTitle'
import dialogContent from 'themes/material-dashboard-2-pro-react-v2.1.0/theme-dark/components/dialog/dialogContent'
import dialogContentText from 'themes/material-dashboard-2-pro-react-v2.1.0/theme-dark/components/dialog/dialogContentText'
import dialogActions from 'themes/material-dashboard-2-pro-react-v2.1.0/theme-dark/components/dialog/dialogActions'

export default createTheme({
  breakpoints: { ...breakpoints },
  palette: { ...colors },
  typography: { ...typography },
  boxShadows: { ...boxShadows },
  borders: { ...borders },
  functions: {
    boxShadow,
    hexToRgb,
    linearGradient,
    pxToRem,
    rgba,
  },

  components: {
    MuiCssBaseline: {
      styleOverrides: {
        ...globals,
        ...flatpickr,
        ...container,
      },
    },
    MuiDrawer: { ...sidenav },
    MuiList: { ...list },
    MuiListItem: { ...listItem },
    MuiListItemText: { ...listItemText },
    MuiCard: { ...card },
    MuiCardMedia: { ...cardMedia },
    MuiCardContent: { ...cardContent },
    MuiButton: { ...button },
    MuiIconButton: { ...iconButton },
    MuiInput: { ...input },
    MuiInputLabel: { ...inputLabel },
    MuiOutlinedInput: { ...inputOutlined },
    MuiTextField: { ...textField },
    MuiMenu: { ...menu },
    MuiMenuItem: { ...menuItem },
    MuiSwitch: { ...switchButton },
    MuiDivider: { ...divider },
    MuiTableContainer: { ...tableContainer },
    MuiTableHead: { ...tableHead },
    MuiTableCell: { ...tableCell },
    MuiLinearProgress: { ...linearProgress },
    MuiBreadcrumbs: { ...breadcrumbs },
    MuiSlider: { ...slider },
    MuiAvatar: { ...avatar },
    MuiTooltip: { ...tooltip },
    MuiAppBar: { ...appBar },
    MuiTabs: { ...tabs },
    MuiTab: { ...tab },
    MuiStepper: { ...stepper },
    MuiStep: { ...step },
    MuiStepConnector: { ...stepConnector },
    MuiStepLabel: { ...stepLabel },
    MuiStepIcon: { ...stepIcon },
    MuiSelect: { ...select },
    MuiFormControlLabel: { ...formControlLabel },
    MuiFormLabel: { ...formLabel },
    MuiCheckbox: { ...checkbox },
    MuiRadio: { ...radio },
    MuiAutocomplete: { ...autocomplete },
    MuiPopover: { ...popover },
    MuiButtonBase: { ...buttonBase },
    MuiIcon: { ...icon },
    MuiSvgIcon: { ...svgIcon },
    MuiLink: { ...link },
    MuiDialog: { ...dialog },
    MuiDialogTitle: { ...dialogTitle },
    MuiDialogContent: { ...dialogContent },
    MuiDialogContentText: { ...dialogContentText },
    MuiDialogActions: { ...dialogActions },
  },
})
