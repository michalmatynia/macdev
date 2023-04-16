/** @jsxRuntime classic */

/** @jsx jsx */
import { jsx, css, CSSObject } from '@emotion/react'
import React, { CSSProperties, FC } from 'react'
import { Box, Button } from '@mui/material'

// import FavoriteIcon from '@mui/icons-material/Favorite'
import suit1 from '../../../../../public/img/examples/studio-1.jpg'
import suit2 from '../../../../../public/img/examples/studio-2.jpg'
import suit3 from '../../../../../public/img/examples/studio-3.jpg'
import suit4 from '../../../../../public/img/examples/studio-4.jpg'
import suit5 from '../../../../../public/img/examples/studio-5.jpg'

import stylesUntyped from '../../../../../styles/jssthemes/material-kit-pro-react-v1.9.0/material-kit-pro-react/views/ecommerceSections/productsStyle.js'
import { BasicComponentProps } from 'types/styleTypes/nextjs-material-kit/componentProps.js'
import {
  CT_CardBody,
  CT_Card,
  CT_GridItem,
  CT_GridContainer,
  CT_CardHeader,
  CT_CardFooter,
  OldCMS_SectionLeftMenu,
} from '@components/ui'
import Image from 'next/image'
import Link from 'next/link'

type Props = BasicComponentProps

const OldCMS_SectionProducts: FC<Props> = (): React.ReactElement => {
  const styles = stylesUntyped as { [key: string]: CSSProperties }

  const cardHeaderImageClasses = css({
    ...(styles.cardHeaderImage as CSSObject),
    ...(styles.cardHeaderImage['& img'] as CSSObject),
  })

  return (
    <Box sx={styles.section}>
      <Box sx={styles.container}>
        <h2>Mystore Title</h2>
        <CT_GridContainer>
          <OldCMS_SectionLeftMenu />
          <CT_GridItem md={9} sm={9}>
            <CT_GridContainer>
              <CT_GridItem md={4} sm={4}>
                <CT_Card plain product>
                  <CT_CardHeader noShadow image>
                    <Link href="#pablo" style={{ display: 'block' }}>
                      <Image
                        src={suit1}
                        css={cardHeaderImageClasses}
                        alt=".."
                        width={500}
                        height={200}
                      />
                    </Link>
                  </CT_CardHeader>
                  <CT_CardBody plain>
                    <Link href="#pablo">
                      <h4 css={css({ ...styles.cardTitle })}>
                        Polo Ralph Lauren
                      </h4>
                    </Link>
                    <p css={css({ ...styles.description })}>
                      Impeccably tailored in Italy from lightweight navy wool.
                    </p>
                  </CT_CardBody>
                  <CT_CardFooter
                    plain
                    styleProps={styles.justifyContentBetween}
                  >
                    <div css={css({ ...styles.priceContainer })}>
                      <span css={css({ ...styles.price })}> €800</span>
                    </div>
                    <Button
                      color="primary"
                      size="small"
                      style={{
                        opacity: '0.9',
                      }}
                      onClick={() => null}
                      sx={styles.pullRight}
                    >
                      Buy now
                    </Button>
                    {/* <Tooltip
                      id="tooltip-top"
                      title="Saved to Wishlist"
                      placement="left"
                      sx={{ '&.MuiTooltip-tooltip': styles.tooltip }}
                    >
                      <CT_CustomButton
                        justIcon
                        simple
                        ct_color="primary"
                        styleProps={styles.pullRight}
                      >
                        <FavoriteIcon />
                      </CT_CustomButton>
                    </Tooltip> */}
                  </CT_CardFooter>
                </CT_Card>
              </CT_GridItem>
              <CT_GridItem md={4} sm={4}>
                <CT_Card plain product>
                  <CT_CardHeader noShadow image>
                    <Link href="#pablo" style={{ display: 'block' }}>
                      <Image
                        src={suit2}
                        css={cardHeaderImageClasses}
                        alt=".."
                        width={500}
                        height={200}
                      />
                    </Link>
                  </CT_CardHeader>
                  <CT_CardBody plain>
                    <Link href="#pablo">
                      <h4 css={css({ ...styles.cardTitle })}>Wooyoungmi</h4>
                    </Link>
                    <p css={css({ ...styles.description })}>
                      Dark-grey slub wool, pintucked notch lapels.
                    </p>
                  </CT_CardBody>
                  <CT_CardFooter
                    plain
                    styleProps={styles.justifyContentBetween}
                  >
                    <div css={css({ ...styles.priceContainer })}>
                      <span css={css({ ...styles.price })}> €555</span>
                    </div>
                    <Button
                      color="primary"
                      size="small"
                      style={{
                        opacity: '0.9',
                      }}
                      onClick={() => null}
                      sx={styles.pullRight}
                    >
                      Buy now
                    </Button>
                    {/* <Tooltip
                      id="tooltip-top"
                      title="Saved to Wishlist"
                      placement="left"
                      sx={{ '&.MuiTooltip-tooltip': styles.tooltip }}
                    >
                      <CT_CustomButton
                        justIcon
                        simple
                        ct_color="primary"
                        styleProps={styles.pullRight}
                      >
                        <FavoriteIcon />
                      </CT_CustomButton>
                    </Tooltip> */}
                  </CT_CardFooter>
                </CT_Card>
              </CT_GridItem>
              <CT_GridItem md={4} sm={4}>
                <CT_Card plain product>
                  <CT_CardHeader noShadow image>
                    <Link href="#pablo" style={{ display: 'block' }}>
                      <Image
                        src={suit3}
                        css={cardHeaderImageClasses}
                        alt=".."
                        width={500}
                        height={200}
                      />
                    </Link>
                  </CT_CardHeader>
                  <CT_CardBody plain>
                    <Link href="#pablo">
                      <h4 css={css({ ...styles.cardTitle })}>Tom Ford</h4>
                    </Link>
                    <p css={css({ ...styles.description })}>
                      Immaculate tailoring is TOM FORD{"'"}s forte.
                    </p>
                  </CT_CardBody>
                  <CT_CardFooter
                    plain
                    styleProps={styles.justifyContentBetween}
                  >
                    <div css={css({ ...styles.priceContainer })}>
                      <span css={css({ ...styles.price })}> €879</span>
                    </div>
                    <Button
                      color="primary"
                      size="small"
                      style={{
                        opacity: '0.9',
                      }}
                      onClick={() => null}
                      sx={styles.pullRight}
                    >
                      Buy now
                    </Button>
                    {/* <Tooltip
                      id="tooltip-top"
                      title="Saved to Wishlist"
                      placement="left"
                      sx={{ '&.MuiTooltip-tooltip': styles.tooltip }}
                    >
                      <CT_CustomButton
                        justIcon
                        simple
                        ct_color="primary"
                        styleProps={styles.pullRight}
                      >
                        <FavoriteIcon />
                      </CT_CustomButton>
                    </Tooltip> */}
                  </CT_CardFooter>
                </CT_Card>
              </CT_GridItem>
              <CT_GridItem md={4} sm={4}>
                <CT_Card plain product>
                  <CT_CardHeader noShadow image>
                    <Link href="#pablo" style={{ display: 'block' }}>
                      <Image
                        src={suit4}
                        css={cardHeaderImageClasses}
                        alt=".."
                        width={500}
                        height={200}
                      />
                    </Link>
                  </CT_CardHeader>
                  <CT_CardBody plain>
                    <Link href="#pablo">
                      <h4 css={css({ ...styles.cardTitle })}>Thom Sweeney</h4>
                    </Link>
                    <p css={css({ ...styles.description })}>
                      It{"'"}s made from lightweight grey wool woven.
                    </p>
                  </CT_CardBody>
                  <CT_CardFooter
                    plain
                    styleProps={styles.justifyContentBetween}
                  >
                    <div css={css({ ...styles.priceContainer })}>
                      <span css={css({ ...styles.price })}> €680</span>
                    </div>
                    <Button
                      color="primary"
                      size="small"
                      style={{
                        opacity: '0.9',
                      }}
                      onClick={() => null}
                      sx={styles.pullRight}
                    >
                      Buy now
                    </Button>
                    {/* <Tooltip
                      id="tooltip-top"
                      title="Saved to Wishlist"
                      placement="left"
                      sx={{ '&.MuiTooltip-tooltip': styles.tooltip }}
                    >
                      <CT_CustomButton
                        justIcon
                        simple
                        ct_color="primary"
                        styleProps={styles.pullRight}
                      >
                        <FavoriteIcon />
                      </CT_CustomButton>
                    </Tooltip> */}
                  </CT_CardFooter>
                </CT_Card>
              </CT_GridItem>
              <CT_GridItem md={4} sm={4}>
                <CT_Card plain product>
                  <CT_CardHeader noShadow image>
                    <Link href="#pablo" style={{ display: 'block' }}>
                      <Image
                        src={suit5}
                        css={cardHeaderImageClasses}
                        alt=".."
                        width={500}
                        height={200}
                      />
                    </Link>
                  </CT_CardHeader>
                  <CT_CardBody plain>
                    <Link href="#pablo">
                      <h4 css={css({ ...styles.cardTitle })}>Kingsman</h4>
                    </Link>
                    <p css={css({ ...styles.description })}>
                      Crafted from khaki cotton and fully canvassed.
                    </p>
                  </CT_CardBody>
                  <CT_CardFooter
                    plain
                    styleProps={styles.justifyContentBetween}
                  >
                    <div css={css({ ...styles.priceContainer })}>
                      <span css={css({ ...styles.price })}> €725</span>
                    </div>
                    <Button
                      color="primary"
                      size="small"
                      style={{
                        opacity: '0.9',
                      }}
                      onClick={() => null}
                      sx={styles.pullRight}
                    >
                      Buy now
                    </Button>
                    {/* <Tooltip
                      id="tooltip-top"
                      title="Saved to Wishlist"
                      placement="left"
                      sx={{ '&.MuiTooltip-tooltip': styles.tooltip }}
                    >
                      <CT_CustomButton
                        justIcon
                        simple
                        ct_color="primary"
                        styleProps={styles.pullRight}
                      >
                        <FavoriteIcon />
                      </CT_CustomButton>
                    </Tooltip> */}
                  </CT_CardFooter>
                </CT_Card>
              </CT_GridItem>
              <CT_GridItem md={4} sm={4}>
                <CT_Card plain product>
                  <CT_CardHeader noShadow image>
                    <Link href="#pablo" style={{ display: 'block' }}>
                      <Image
                        src={suit1}
                        css={cardHeaderImageClasses}
                        alt=".."
                        width={500}
                        height={200}
                      />
                    </Link>
                  </CT_CardHeader>
                  <CT_CardBody plain>
                    <Link href="#pablo">
                      <h4 css={css({ ...styles.cardTitle })}>Boglioli</h4>
                    </Link>
                    <p css={css({ ...styles.description })}>
                      Masterfully crafted in Northern Italy.
                    </p>
                  </CT_CardBody>
                  <CT_CardFooter
                    plain
                    styleProps={styles.justifyContentBetween}
                  >
                    <div css={css({ ...styles.priceContainer })}>
                      <span css={css({ ...styles.price })}> €699</span>
                    </div>
                    <Button
                      color="primary"
                      size="small"
                      style={{
                        opacity: '0.9',
                      }}
                      onClick={() => null}
                      sx={styles.pullRight}
                    >
                      Buy now
                    </Button>
                    {/* <Tooltip
                      id="tooltip-top"
                      title="Saved to Wishlist"
                      placement="left"
                      sx={{ '&.MuiTooltip-tooltip': styles.tooltip }}
                    >
                      <CT_CustomButton
                        justIcon
                        simple
                        ct_color="primary"
                        styleProps={styles.pullRight}
                      >
                        <FavoriteIcon />
                      </CT_CustomButton>
                    </Tooltip> */}
                  </CT_CardFooter>
                </CT_Card>
              </CT_GridItem>
            </CT_GridContainer>
          </CT_GridItem>
        </CT_GridContainer>
      </Box>
    </Box>
  )
}

export default OldCMS_SectionProducts
