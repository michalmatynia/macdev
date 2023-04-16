/** @jsxRuntime classic */

/** @jsx jsx */

import { CSSObject, css, jsx } from '@emotion/react'
import React, { FC } from 'react'

import styles from '../../../../../styles/jss/nextjs-material-kit/components/cardFooterStyle.js'
import { BasicComponentProps } from 'types/styleTypes/nextjs-material-kit/componentProps.js'

interface LocalProps {
  plain?: boolean
  profile?: boolean
  pricing?: boolean
  testimonial?: boolean
}

type Props = LocalProps & BasicComponentProps

const CT_CardFooter: FC<Props> = (props): React.ReactElement => {
  const {
    children,
    plain,
    profile,
    pricing,
    testimonial,
    styleProps,
    className,
    ...rest
  } = props

  const cardFooterClasses = css({
    ...(styles.cardFooter as CSSObject),
    ...(styleProps &&
      ({
        ...styleProps,
      } as CSSObject)),
    ...(plain && (styles.cardFooterPlain as CSSObject)),
    ...((profile || testimonial) && (styles.cardFooterProfile as CSSObject)),
    ...(pricing && (styles.cardFooterPricing as CSSObject)),
    ...(testimonial && (styles.cardFooterTestimonial as CSSObject)),
    ...(className && (styles[className] as CSSObject)),
  })

  return (
    <div {...rest} css={cardFooterClasses}>
      {children}
    </div>
  )
}

export default CT_CardFooter
