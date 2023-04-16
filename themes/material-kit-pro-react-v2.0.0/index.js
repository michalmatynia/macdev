/**
=========================================================
* Material Kit 2 PRO React React - v2.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/soft-ui-dashboard-pro-material-ui
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import { createTheme } from '@mui/material/styles'
// import Fade from "@mui/material/Fade";

// Material Kit 2 PRO React base styles
import colors from 'themes/material-kit-pro-react-v2.0.0/base/colors'
import breakpoints from 'themes/material-kit-pro-react-v2.0.0/base/breakpoints'
import typography from 'themes/material-kit-pro-react-v2.0.0/base/typography'
import boxShadows from 'themes/material-kit-pro-react-v2.0.0/base/boxShadows'
import borders from 'themes/material-kit-pro-react-v2.0.0/base/borders'
import globals from 'themes/material-kit-pro-react-v2.0.0/base/globals'

// Material Kit 2 PRO React helper functions
import boxShadow from 'themes/material-kit-pro-react-v2.0.0/functions/boxShadow'
import hexToRgb from 'themes/material-kit-pro-react-v2.0.0/functions/hexToRgb'
import linearGradient from 'themes/material-kit-pro-react-v2.0.0/functions/linearGradient'
import pxToRem from 'themes/material-kit-pro-react-v2.0.0/functions/pxToRem'
import rgba from 'themes/material-kit-pro-react-v2.0.0/functions/rgba'

// Material Kit 2 PRO React components base styles for @mui material components
import list from 'themes/material-kit-pro-react-v2.0.0/components/list'
import listItem from 'themes/material-kit-pro-react-v2.0.0/components/list/listItem'
import listItemText from 'themes/material-kit-pro-react-v2.0.0/components/list/listItemText'
import card from 'themes/material-kit-pro-react-v2.0.0/components/card'
import cardMedia from 'themes/material-kit-pro-react-v2.0.0/components/card/cardMedia'
import cardContent from 'themes/material-kit-pro-react-v2.0.0/components/card/cardContent'
import button from 'themes/material-kit-pro-react-v2.0.0/components/button'
import iconButton from 'themes/material-kit-pro-react-v2.0.0/components/iconButton'
import input from 'themes/material-kit-pro-react-v2.0.0/components/form/input'
import inputLabel from 'themes/material-kit-pro-react-v2.0.0/components/form/inputLabel'
import inputOutlined from 'themes/material-kit-pro-react-v2.0.0/components/form/inputOutlined'
import textField from 'themes/material-kit-pro-react-v2.0.0/components/form/textField'
import menu from 'themes/material-kit-pro-react-v2.0.0/components/menu'
import menuItem from 'themes/material-kit-pro-react-v2.0.0/components/menu/menuItem'
import switchButton from 'themes/material-kit-pro-react-v2.0.0/components/form/switchButton'
import divider from 'themes/material-kit-pro-react-v2.0.0/components/divider'
import tableContainer from 'themes/material-kit-pro-react-v2.0.0/components/table/tableContainer'
import tableHead from 'themes/material-kit-pro-react-v2.0.0/components/table/tableHead'
import tableCell from 'themes/material-kit-pro-react-v2.0.0/components/table/tableCell'
import linearProgress from 'themes/material-kit-pro-react-v2.0.0/components/linearProgress'
import breadcrumbs from 'themes/material-kit-pro-react-v2.0.0/components/breadcrumbs'
import slider from 'themes/material-kit-pro-react-v2.0.0/components/slider'
import avatar from 'themes/material-kit-pro-react-v2.0.0/components/avatar'
import tooltip from 'themes/material-kit-pro-react-v2.0.0/components/tooltip'
import appBar from 'themes/material-kit-pro-react-v2.0.0/components/appBar'
import tabs from 'themes/material-kit-pro-react-v2.0.0/components/tabs'
import tab from 'themes/material-kit-pro-react-v2.0.0/components/tabs/tab'
import stepper from 'themes/material-kit-pro-react-v2.0.0/components/stepper'
import step from 'themes/material-kit-pro-react-v2.0.0/components/stepper/step'
import stepConnector from 'themes/material-kit-pro-react-v2.0.0/components/stepper/stepConnector'
import stepLabel from 'themes/material-kit-pro-react-v2.0.0/components/stepper/stepLabel'
import stepIcon from 'themes/material-kit-pro-react-v2.0.0/components/stepper/stepIcon'
import select from 'themes/material-kit-pro-react-v2.0.0/components/form/select'
import formControlLabel from 'themes/material-kit-pro-react-v2.0.0/components/form/formControlLabel'
import formLabel from 'themes/material-kit-pro-react-v2.0.0/components/form/formLabel'
import checkbox from 'themes/material-kit-pro-react-v2.0.0/components/form/checkbox'
import radio from 'themes/material-kit-pro-react-v2.0.0/components/form/radio'
import autocomplete from 'themes/material-kit-pro-react-v2.0.0/components/form/autocomplete'
import flatpickr from 'themes/material-kit-pro-react-v2.0.0/components/flatpickr'
import container from 'themes/material-kit-pro-react-v2.0.0/components/container'
import popover from 'themes/material-kit-pro-react-v2.0.0/components/popover'
import buttonBase from 'themes/material-kit-pro-react-v2.0.0/components/buttonBase'
import icon from 'themes/material-kit-pro-react-v2.0.0/components/icon'
import svgIcon from 'themes/material-kit-pro-react-v2.0.0/components/svgIcon'
import link from 'themes/material-kit-pro-react-v2.0.0/components/link'
import dialog from 'themes/material-kit-pro-react-v2.0.0/components/dialog'
import dialogTitle from 'themes/material-kit-pro-react-v2.0.0/components/dialog/dialogTitle'
import dialogContent from 'themes/material-kit-pro-react-v2.0.0/components/dialog/dialogContent'
import dialogContentText from 'themes/material-kit-pro-react-v2.0.0/components/dialog/dialogContentText'
import dialogActions from 'themes/material-kit-pro-react-v2.0.0/components/dialog/dialogActions'
import swiper from 'themes/material-kit-pro-react-v2.0.0/components/swiper'

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
        ...swiper,
      },
    },
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
