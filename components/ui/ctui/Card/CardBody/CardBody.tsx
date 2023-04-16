/** @jsxRuntime classic */

/** @jsx jsx */

import { CSSObject, css, jsx } from '@emotion/react'
import React, { FC } from 'react'

import styles from '../../../../../styles/jss/nextjs-material-kit/components/cardBodyStyle.js'
import { BasicComponentProps } from 'types/styleTypes/nextjs-material-kit/componentProps.js'

interface LocalProps {
  background?: boolean
  plain?: boolean
  formHorizontal?: boolean
  pricing?: boolean
  signup?: boolean
  color?: boolean
}

type Props = LocalProps & BasicComponentProps

const CT_CardBody: FC<Props> = (props): React.ReactElement => {
  const {
    children,
    className,
    background,
    plain,
    formHorizontal,
    pricing,
    signup,
    color,
    styleProps,
    ...rest
  } = props

  const cardBodyClasses = css({
    ...(styles.cardBody as CSSObject),
    ...(styleProps &&
      ({
        ...styleProps,
      } as CSSObject)),
    ...(background && (styles.cardBodyBackground as CSSObject)),
    ...(plain && (styles.cardFooterPlain as CSSObject)),
    ...(formHorizontal && (styles.cardBodyFormHorizontal as CSSObject)),
    ...(pricing && (styles.cardPricing as CSSObject)),
    ...(signup && (styles.cardSignup as CSSObject)),
    ...(color && (styles.cardBodyColor as CSSObject)),
    ...(className && (styles[className] as CSSObject)),
  })

  return (
    <div {...rest} css={cardBodyClasses}>
      {children}
    </div>
  )
}

export default CT_CardBody
