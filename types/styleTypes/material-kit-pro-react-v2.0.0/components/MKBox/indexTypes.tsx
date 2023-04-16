export type MKBoxValidGreyColorProps =
  | 'grey-100'
  | 'grey-200'
  | 'grey-300'
  | 'grey-400'
  | 'grey-500'
  | 'grey-600'
  | 'grey-700'
  | 'grey-800'
  | 'grey-900'
export type MKBoxValidGradientProps =
  | 'primary'
  | 'secondary'
  | 'info'
  | 'success'
  | 'warning'
  | 'error'
  | 'dark'
  | 'light'

export type MKBoxValidPaletteColorProps =
  | 'primary'
  | 'secondary'
  | 'error'
  | 'warning'
  | 'info'
  | 'success'

export type MKBoxValidColorProps =
  | MKBoxValidGreyColorProps
  | MKBoxValidGradientProps
  | 'white'
  | 'black'
  | 'text'
  | 'transparent'

export interface MKBoxProps {
  variant?: 'contained' | 'gradient'
  bgColor?: MKBoxValidColorProps

  color?: 'dark' | 'light' | MKBoxValidPaletteColorProps
  opacity?: number
  borderRadius?: 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | 'section'
  shadow?: 'none' | 'sm' | 'md' | 'lg' | 'xl'
  coloredShadow?:
    | 'primary'
    | 'secondary'
    | 'info'
    | 'success'
    | 'warning'
    | 'error'
    | 'light'
    | 'dark'
    | 'none'
}
