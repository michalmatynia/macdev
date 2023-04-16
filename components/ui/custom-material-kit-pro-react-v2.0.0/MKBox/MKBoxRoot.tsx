// @mui material components
import { Palette } from '@mui/material'
import Box from '@mui/material/Box'
import { Theme, styled } from '@mui/material/styles'
import {
  MKBoxProps,
  MKBoxValidColorProps,
  MKBoxValidGradientProps,
  MKBoxValidGreyColorProps,
  MKBoxValidPaletteColorProps,
} from 'types/styleTypes/material-kit-pro-react-v2.0.0/components/MKBox/indexTypes'

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
}

interface AdditionalThemeProps {
  functions: {
    linearGradient: (color?: string, state?: string) => string
  }
  borders: { borderRadius: MKBoxProps['borderRadius'] }
  boxShadows: { colored: MKBoxProps['coloredShadow'] }
}
type StyledProps = StyledComponentProps

export default styled(Box, {
  shouldForwardProp: (prop) => prop !== 'ownerState',
})<StyledProps>(({ theme, ownerState }) => {
  const { palette, functions, borders, boxShadows } = theme as Theme &
    AdditionalThemeProps
  const {
    variant,
    bgColor,
    color,
    opacity,
    borderRadius,
    shadow,
    coloredShadow,
  } = ownerState

  const { gradients, grey, white } = palette as Palette & {
    gradients: ValidGradientObjectProps
    white: {
      main: typeof palette.common.white
      state: string
    }
  }
  const { linearGradient } = functions
  const { borderRadius: radius } = borders
  const { colored } = boxShadows

  const greyColors = {
    'grey-100': grey[100],
    'grey-200': grey[200],
    'grey-300': grey[300],
    'grey-400': grey[400],
    'grey-500': grey[500],
    'grey-600': grey[600],
    'grey-700': grey[700],
    'grey-800': grey[800],
    'grey-900': grey[900],
  } as { [Property in MKBoxValidGreyColorProps]: string }

  const validGradients: MKBoxValidGradientProps[] = [
    'primary',
    'secondary',
    'info',
    'success',
    'warning',
    'error',
    'dark',
    'light',
  ]

  const validColors: MKBoxValidColorProps[] = [
    'transparent',
    'white',
    'black',
    'primary',
    'secondary',
    'info',
    'success',
    'warning',
    'error',
    'light',
    'dark',
    'text',
    'grey-100',
    'grey-200',
    'grey-300',
    'grey-400',
    'grey-500',
    'grey-600',
    'grey-700',
    'grey-800',
    'grey-900',
  ]

  const validBorderRadius = ['xs', 'sm', 'md', 'lg', 'xl', 'xxl', 'section']
  const validBoxShadows = ['xs', 'sm', 'md', 'lg', 'xl', 'xxl', 'inset']

  // // background value
  let backgroundValue: string | undefined = bgColor

  if (variant === 'gradient' && bgColor) {
    backgroundValue = validGradients.find((el) => el === bgColor)
      ? linearGradient(
          gradients[bgColor as MKBoxValidGradientProps].main,
          gradients[bgColor as MKBoxValidGradientProps].state
        )
      : white.main
  } else if (validColors.find((el) => el === bgColor) && bgColor) {
    if (palette && palette[bgColor]) {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      backgroundValue = palette[bgColor as MKBoxValidPaletteColorProps]
        ? palette[bgColor as MKBoxValidPaletteColorProps].main
        : greyColors[bgColor]
    }
  } else {
    backgroundValue = bgColor
  }

  // color value
  let colorValue = color

  if (validColors.find((el) => el === color) && color) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
    colorValue = palette[color] ? palette[color].main : greyColors[color]
  }

  // borderRadius value
  let borderRadiusValue = borderRadius

  if (
    validBorderRadius.find((el) => el === borderRadius) &&
    radius &&
    borderRadius
  ) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    borderRadiusValue = radius[borderRadius]
  }

  // // boxShadow value
  let boxShadowValue = 'none'

  if (validBoxShadows.find((el) => el === shadow) && shadow) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    boxShadowValue = boxShadows[shadow]
  } else if (coloredShadow && colored) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    boxShadowValue = colored[coloredShadow] ? colored[coloredShadow] : 'none'
  }

  return {
    opacity,
    background: backgroundValue,
    color: colorValue,
    borderRadius: borderRadiusValue,
    boxShadow: boxShadowValue,
  }
})
