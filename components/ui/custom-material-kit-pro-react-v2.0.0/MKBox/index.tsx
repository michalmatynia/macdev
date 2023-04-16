import { forwardRef } from 'react'
import MKBoxRoot from '@components/ui/custom-material-kit-pro-react-v2.0.0/MKBox/MKBoxRoot'
import { MKBoxProps } from 'types/styleTypes/material-kit-pro-react-v2.0.0/components/MKBox/indexTypes'

type Props = MKBoxProps
const MKBox = forwardRef<HTMLDivElement, Props>(function MKBox(
  {
    variant = 'contained',
    bgColor = 'transparent',
    color = 'dark',
    opacity = 1,
    borderRadius = 'none',
    shadow = 'none',
    coloredShadow = 'none',
    ...rest
  },
  ref
) {
  return (
    <MKBoxRoot
      {...rest}
      ref={ref}
      ownerState={{
        variant,
        bgColor,
        color,
        opacity,
        borderRadius,
        shadow,
        coloredShadow,
      }}
    />
  )
})

export default MKBox
