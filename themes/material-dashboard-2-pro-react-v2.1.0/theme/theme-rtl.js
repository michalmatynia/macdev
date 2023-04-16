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
import colors from 'themes/material-dashboard-2-pro-react-v2.1.0/theme/base/colors'
import breakpoints from 'themes/material-dashboard-2-pro-react-v2.1.0/theme/base/breakpoints'
import typography from 'themes/material-dashboard-2-pro-react-v2.1.0/theme/base/typography'
import boxShadows from 'themes/material-dashboard-2-pro-react-v2.1.0/theme/base/boxShadows'
import borders from 'themes/material-dashboard-2-pro-react-v2.1.0/theme/base/borders'
import globals from 'themes/material-dashboard-2-pro-react-v2.1.0/theme/base/globals'

// Material Dashboard 2 PRO React helper functions
import boxShadow from 'themes/material-dashboard-2-pro-react-v2.1.0/theme/functions/boxShadow'
import hexToRgb from 'themes/material-dashboard-2-pro-react-v2.1.0/theme/functions/hexToRgb'
import linearGradient from 'themes/material-dashboard-2-pro-react-v2.1.0/theme/functions/linearGradient'
import pxToRem from 'themes/material-dashboard-2-pro-react-v2.1.0/theme/functions/pxToRem'
import rgba from 'themes/material-dashboard-2-pro-react-v2.1.0/theme/functions/rgba'

// Material Dashboard 2 PRO React components base styles for @mui material components
import sidenav from 'themes/material-dashboard-2-pro-react-v2.1.0/theme/components/sidenav'
import list from 'themes/material-dashboard-2-pro-react-v2.1.0/theme/components/list'
import listItem from 'themes/material-dashboard-2-pro-react-v2.1.0/theme/components/list/listItem'
import listItemText from 'themes/material-dashboard-2-pro-react-v2.1.0/theme/components/list/listItemText'
import card from 'themes/material-dashboard-2-pro-react-v2.1.0/theme/components/card'
import cardMedia from 'themes/material-dashboard-2-pro-react-v2.1.0/theme/components/card/cardMedia'
import cardContent from 'themes/material-dashboard-2-pro-react-v2.1.0/theme/components/card/cardContent'
import button from 'themes/material-dashboard-2-pro-react-v2.1.0/theme/components/button'
import iconButton from 'themes/material-dashboard-2-pro-react-v2.1.0/theme/components/iconButton'
import input from 'themes/material-dashboard-2-pro-react-v2.1.0/theme/components/form/input'
import inputLabel from 'themes/material-dashboard-2-pro-react-v2.1.0/theme/components/form/inputLabel'
import inputOutlined from 'themes/material-dashboard-2-pro-react-v2.1.0/theme/components/form/inputOutlined'
import textField from 'themes/material-dashboard-2-pro-react-v2.1.0/theme/components/form/textField'
import menu from 'themes/material-dashboard-2-pro-react-v2.1.0/theme/components/menu'
import menuItem from 'themes/material-dashboard-2-pro-react-v2.1.0/theme/components/menu/menuItem'
import switchButton from 'themes/material-dashboard-2-pro-react-v2.1.0/theme/components/form/switchButton'
import divider from 'themes/material-dashboard-2-pro-react-v2.1.0/theme/components/divider'
import tableContainer from 'themes/material-dashboard-2-pro-react-v2.1.0/theme/components/table/tableContainer'
import tableHead from 'themes/material-dashboard-2-pro-react-v2.1.0/theme/components/table/tableHead'
import tableCell from 'themes/material-dashboard-2-pro-react-v2.1.0/theme/components/table/tableCell'
import linearProgress from 'themes/material-dashboard-2-pro-react-v2.1.0/theme/components/linearProgress'
import breadcrumbs from 'themes/material-dashboard-2-pro-react-v2.1.0/theme/components/breadcrumbs'
import slider from 'themes/material-dashboard-2-pro-react-v2.1.0/theme/components/slider'
import avatar from 'themes/material-dashboard-2-pro-react-v2.1.0/theme/components/avatar'
import tooltip from 'themes/material-dashboard-2-pro-react-v2.1.0/theme/components/tooltip'
import appBar from 'themes/material-dashboard-2-pro-react-v2.1.0/theme/components/appBar'
import tabs from 'themes/material-dashboard-2-pro-react-v2.1.0/theme/components/tabs'
import tab from 'themes/material-dashboard-2-pro-react-v2.1.0/theme/components/tabs/tab'
import stepper from 'themes/material-dashboard-2-pro-react-v2.1.0/theme/components/stepper'
import step from 'themes/material-dashboard-2-pro-react-v2.1.0/theme/components/stepper/step'
import stepConnector from 'themes/material-dashboard-2-pro-react-v2.1.0/theme/components/stepper/stepConnector'
import stepLabel from 'themes/material-dashboard-2-pro-react-v2.1.0/theme/components/stepper/stepLabel'
import stepIcon from 'themes/material-dashboard-2-pro-react-v2.1.0/theme/components/stepper/stepIcon'
import select from 'themes/material-dashboard-2-pro-react-v2.1.0/theme/components/form/select'
import formControlLabel from 'themes/material-dashboard-2-pro-react-v2.1.0/theme/components/form/formControlLabel'
import formLabel from 'themes/material-dashboard-2-pro-react-v2.1.0/theme/components/form/formLabel'
import checkbox from 'themes/material-dashboard-2-pro-react-v2.1.0/theme/components/form/checkbox'
import radio from 'themes/material-dashboard-2-pro-react-v2.1.0/theme/components/form/radio'
import autocomplete from 'themes/material-dashboard-2-pro-react-v2.1.0/theme/components/form/autocomplete'
import flatpickr from 'themes/material-dashboard-2-pro-react-v2.1.0/theme/components/flatpickr'
import container from 'themes/material-dashboard-2-pro-react-v2.1.0/theme/components/container'
import popover from 'themes/material-dashboard-2-pro-react-v2.1.0/theme/components/popover'
import buttonBase from 'themes/material-dashboard-2-pro-react-v2.1.0/theme/components/buttonBase'
import icon from 'themes/material-dashboard-2-pro-react-v2.1.0/theme/components/icon'
import svgIcon from 'themes/material-dashboard-2-pro-react-v2.1.0/theme/components/svgIcon'
import link from 'themes/material-dashboard-2-pro-react-v2.1.0/theme/components/link'
import dialog from 'themes/material-dashboard-2-pro-react-v2.1.0/theme/components/dialog'
import dialogTitle from 'themes/material-dashboard-2-pro-react-v2.1.0/theme/components/dialog/dialogTitle'
import dialogContent from 'themes/material-dashboard-2-pro-react-v2.1.0/theme/components/dialog/dialogContent'
import dialogContentText from 'themes/material-dashboard-2-pro-react-v2.1.0/theme/components/dialog/dialogContentText'
import dialogActions from 'themes/material-dashboard-2-pro-react-v2.1.0/theme/components/dialog/dialogActions'

export default createTheme({
  direction: 'rtl',
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
