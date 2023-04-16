/** @jsxRuntime classic */

/** @jsx jsx */

import { css, jsx, CSSObject } from '@emotion/react'
import React, { CSSProperties, FC } from 'react'

import stylesUntyped from '../../../../../styles/jss/nextjs-material-kit/components/cardStyle.js'
import { BasicComponentProps } from 'types/styleTypes/nextjs-material-kit/componentProps.js'
interface LocalProps {
  plain?: boolean
  profile?: boolean
  blog?: boolean
  raised?: boolean
  background?: boolean
  pricing?: boolean
  testimonial?: boolean
  color?: 'primary' | 'info' | 'success' | 'warning' | 'danger' | 'rose'
  product?: boolean
  carousel?: boolean
}

type Props = LocalProps & BasicComponentProps

const CT_Card: FC<Props> = (props): React.ReactElement => {
  const styles = stylesUntyped as { [key: string]: CSSProperties }

  const {
    children,
    plain,
    background,
    raised,
    profile,
    pricing,
    testimonial,
    blog,
    color,
    product,
    carousel,
    styleProps,
    className,
    ...rest
  } = props

  const cardStyle = css({
    ...styles.card,
    ...(styleProps &&
      ({
        ...styleProps,
      } as CSSObject)),
    ...(plain && {
      ...styles.cardPlain,
    }),
    ...((profile || testimonial) && {
      ...styles.cardProfile,
    }),
    ...(blog && {
      ...styles.cardBlog,
    }),
    ...(raised && {
      ...styles.cardRaised,
    }),
    ...(background && {
      ...styles.cardBackground,
    }),
    ...(((pricing && color !== undefined) ||
      (pricing && background !== undefined)) && {
      ...styles.cardPricingColor,
    }),
    ...(color && {
      ...(styles[color as string] as CSSObject),
    }),
    ...(pricing && {
      ...styles.cardPricing,
    }),
    ...(product && {
      ...styles.cardProduct,
    }),
    ...(carousel && {
      ...styles.cardCarousel,
    }),
    ...(className && (styles[className] as CSSObject)),
  })
  return (
    <div {...rest} css={cardStyle}>
      {children}
    </div>
  )
}

export default CT_Card
