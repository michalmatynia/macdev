// @mui material components
import { BoxProps, CSSObject, Color, Palette } from '@mui/material'
import Box from '@mui/material/Box'
import { Theme, styled } from '@mui/material/styles'
import { CSSProperties } from 'react'
import { BasicComponentProps } from 'types/styleTypes/nextjs-material-kit/componentProps'
import {
  MKBoxProps,
  MKBoxValidGradientProps,
  MKBoxValidGreyColorProps,
} from 'types/styleTypes/material-kit-pro-react-v2.0.0/components/MKBox/indexTypes'

type ValidGradientProps =
  | 'primary'
  | 'secondary'
  | 'info'
  | 'success'
  | 'warning'
  | 'error'
  | 'dark'
  | 'light'

interface ValidGradientObjectProps {
  primary: { main?: string; state?: string }
  secondary: { main?: string; state?: string }
  info: { main?: string; state?: string }
  success: { main?: string; state?: string }
  warning: { main?: string; state?: string }
  error: { main?: string; state?: string }
  dark: { main?: string; state?: string }
  light: { main?: string; state?: string }
  transparent: { main?: string; state?: string }
}

interface StyledComponentProps {
  ownerState: MKBoxProps
  testStat: string
}

type BackgroundValueProps =
  | 'transparent'
  | 'dark'
  | 'info'
  | 'secondary'
  | 'light'
  | 'primary'
  | 'success'
  | 'error'
  | 'warning'

// interface AdditionalThemeProps {
//   functions: {
//     linearGradient: (color?: string, state?: string) => string
//   }
//   borders: { borderRadius: MKBoxProps['borderRadius'] }
//   boxShadows: { colored: object }
// }
type StyledProps = StyledComponentProps
//  &
//   Theme &
//   AdditionalThemeProps &
//   BoxProps

export default styled(Box, {
  shouldForwardProp: (prop) => prop !== 'ownerState' && prop !== 'testStat',
})<StyledProps>(({ theme, ownerState, testStat }) => {
  // const { palette, functions, borders, boxShadows } = theme as Theme &
  //   AdditionalThemeProps
  const {
    variant,
    // bgColor,
    // color,
    // opacity,
    // borderRadius,
    // shadow,
    // coloredShadow,
  } = ownerState

  console.log(testStat)

  // const { gradients, grey, white } = palette as Palette & {
  //   gradients: ValidGradientObjectProps
  //   white: {
  //     main: typeof palette.common.white
  //     state: string
  //   }
  // }
  // const { linearGradient } = functions
  // const { borderRadius: radius } = borders
  // const { colored } = boxShadows

  // const greyColors = {
  //   'grey-100': grey[100],
  //   'grey-200': grey[200],
  //   'grey-300': grey[300],
  //   'grey-400': grey[400],
  //   'grey-500': grey[500],
  //   'grey-600': grey[600],
  //   'grey-700': grey[700],
  //   'grey-800': grey[800],
  //   'grey-900': grey[900],
  // } as { [Property in MKBoxValidGreyColorProps]: string }

  // const validGradients: MKBoxValidGradientProps[] = [
  //   'primary',
  //   'secondary',
  //   'info',
  //   'success',
  //   'warning',
  //   'error',
  //   'dark',
  //   'light',
  // ]

  // const validColors = [
  //   'transparent',
  //   'white',
  //   'black',
  //   'primary',
  //   'secondary',
  //   'info',
  //   'success',
  //   'warning',
  //   'error',
  //   'light',
  //   'dark',
  //   'text',
  //   'grey-100',
  //   'grey-200',
  //   'grey-300',
  //   'grey-400',
  //   'grey-500',
  //   'grey-600',
  //   'grey-700',
  //   'grey-800',
  //   'grey-900',
  // ]

  // const validBorderRadius = ['xs', 'sm', 'md', 'lg', 'xl', 'xxl', 'section']
  // const validBoxShadows = ['xs', 'sm', 'md', 'lg', 'xl', 'xxl', 'inset']

  // // background value
  // let backgroundValue: string | undefined = bgColor

  // // ---
  // if (bgColor) {
  //   console.log(typeof gradients[bgColor])
  // }

  // if (variant === 'gradient' && bgColor) {
  //   backgroundValue = validGradients.find((el) => el === bgColor)
  //     ? linearGradient(gradients[bgColor as MKBoxValidGradientProps].main, 'ds')
  //     : white.main
  // } else if (validColors.find((el) => el === bgColor) && bgColor) {
  //   if (palette && palette[bgColor]) {
  //     // backgroundValue = palette[bgColor]
  //   }
  // } else {
  //   backgroundValue = bgColor
  // }
  // ----
  // if (variant === 'gradient' && bgColor) {
  //   backgroundValue = validGradients.find((el) => el === bgColor)
  //     ? linearGradient(gradients[bgColor].main, gradients[bgColor].state)
  //     : white.main
  // } else if (validColors.find((el) => el === bgColor) && bgColor) {
  //   if (palette && palette[bgColor]) {
  //     // backgroundValue = palette[bgColor]
  //   }
  // }
  //   // backgroundValue = palette[bgColor]
  //   //   ? palette[bgColor].main
  //   //   : greyColors[bgColor]
  // } else {
  //   backgroundValue = bgColor
  // }

  // ---

  // if (variant === 'gradient') {
  //   backgroundValue = validGradients.find((el) => el === bgColor)
  //     ? linearGradient(gradients[bgColor].main, gradients[bgColor].state)
  //     : white.main
  // } else if (validColors.find((el) => el === bgColor)) {
  //   backgroundValue = palette[bgColor]
  //     ? palette[bgColor].main
  //     : greyColors[bgColor]
  // } else {
  //   backgroundValue = bgColor
  // }

  // color value
  // const colorValue = color

  // if (validColors.find((el) => el === color)) {
  //   colorValue = palette[color] ? palette[color].main : greyColors[color]
  // }

  // // borderRadius value
  // let borderRadiusValue = borderRadius

  // if (validBorderRadius.find((el) => el === borderRadius)) {
  //   borderRadiusValue = radius[borderRadius]
  // }

  // boxShadow value
  const boxShadowValue = 'none'

  // if (validBoxShadows.find((el) => el === shadow)) {
  //   boxShadowValue = boxShadows[shadow]
  // } else if (coloredShadow) {
  //   boxShadowValue = colored[coloredShadow] ? colored[coloredShadow] : 'none'
  // }

  return {
    // opacity,
    // background: backgroundValue,
    // color: colorValue,
    // borderRadius: borderRadiusValue,
    boxShadow: boxShadowValue,
  }
})
