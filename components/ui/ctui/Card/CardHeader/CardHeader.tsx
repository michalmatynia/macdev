/** @jsxRuntime classic */

/** @jsx jsx */

import { CSSObject, css, jsx } from '@emotion/react'
import React, { FC } from 'react'

import styles from '../../../../../styles/jss/nextjs-material-kit/components/cardHeaderStyle.js'
import { BasicComponentProps } from 'types/styleTypes/nextjs-material-kit/componentProps.js'

interface LocalProps {
  color?: 'warning' | 'success' | 'danger' | 'info' | 'primary' | 'rose'
  plain?: boolean
  image?: boolean
  contact?: boolean
  signup?: boolean
  noShadow?: boolean
}
type Props = LocalProps & BasicComponentProps

const CT_CardHeader: FC<Props> = (props): React.ReactElement => {
  const {
    children,
    color,
    plain,
    styleProps,
    image,
    contact,
    signup,
    noShadow,
    ...rest
  } = props

  const cardHeaderClasses = css({
    ...(styleProps &&
      ({
        ...styleProps,
      } as CSSObject)),
    ...(styles.cardHeader as CSSObject),
    ...(color &&
      ({
        ...styles[color + 'CardHeader'],
      } as CSSObject)),
    ...(plain &&
      ({
        ...styles.cardHeaderPlain,
      } as CSSObject)),
    ...(image &&
      ({
        ...styles.cardHeaderImage,
      } as CSSObject)),
    ...(contact &&
      ({
        ...styles.cardHeaderContact,
      } as CSSObject)),
    ...(signup &&
      ({
        ...styles.cardHeaderSignup,
      } as CSSObject)),
    ...(noShadow &&
      ({
        ...styles.noShadow,
      } as CSSObject)),
  })

  return (
    <div css={cardHeaderClasses} {...rest}>
      {children}
    </div>
  )
}

export default CT_CardHeader
