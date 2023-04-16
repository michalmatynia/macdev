/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from '@emotion/react'
import React, { CSSProperties, FC, ReactNode, useState } from 'react'
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  useTheme,
  Box,
} from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { BasicComponentProps } from 'types/styleTypes/nextjs-material-kit/componentProps'

import stylesFc from '../../../../styles/jssthemes/material-kit-pro-react-v1.9.0/material-kit-pro-react/components/accordionStyle.js'

interface AccordionCollapse {
  title: string
  content: ReactNode
}

interface LocalProps {
  active?: number[] | number // update this line

  collapses: AccordionCollapse[]
  activeColor?:
    | 'primary'
    | 'secondary'
    | 'warning'
    | 'danger'
    | 'success'
    | 'info'
    | 'rose'
}

type Props = LocalProps & BasicComponentProps

const MKIT19_AccordionFunc: FC<Props> = (props): React.ReactElement => {
  const theme = useTheme()
  const { collapses, activeColor = 'primary' } = props

  const styles = stylesFc(theme) as { [key: string]: CSSProperties }

  const [active, setActive] = useState(
    Array.isArray(props.active) ? props.active : [props.active]
  )
  const [single] = useState(Array.isArray(props.active) ? false : true)

  const handleChange = (panel: number) => () => {
    let newArray: number[]

    if (single) {
      if (active[0] === panel) {
        newArray = []
      } else {
        newArray = [panel]
      }
    } else {
      if (active.indexOf(panel) === -1) {
        newArray = [...active, panel]
      } else {
        newArray = [...active]
        newArray.splice(active.indexOf(panel), 1)
      }
    }
    setActive(newArray)
  }
  return (
    <Box sx={styles.root}>
      {collapses.map((prop, key) => {
        return (
          <Accordion
            //   expanded={active === key || active.indexOf(key) !== -1} To był oryginał

            expanded={active.includes(key)}
            onChange={handleChange(key)}
            key={key}
            sx={{
              '&.MuiAccordion-root': styles.expansionPanel,
              '&.Mui-expanded': styles.expansionPanelExpanded,
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              sx={{
                '&.MuiAccordionSummary-root': {
                  ...styles.expansionPanelSummary,
                  ...styles[activeColor + 'ExpansionPanelSummary'],
                },
                '&.Mui-expanded': {
                  ...styles.expansionPanelSummaryExpaned,
                  ...styles[activeColor + 'ExpansionPanelSummaryExpaned'],
                },
                '&.MuiAccordionSummary-content': {
                  ...styles.expansionPanelSummaryContent,
                },
                '&.MuiAccordionSummary-expandIconWrapper': {
                  ...styles.expansionPanelSummaryExpandIcon,
                },
              }}
            >
              <h4 css={css({ ...styles.title })}>{prop.title}</h4>
            </AccordionSummary>
            <AccordionDetails sx={styles.expansionPanelDetails}>
              {prop.content}
            </AccordionDetails>
          </Accordion>
        )
      })}
    </Box>
  )
}
export default MKIT19_AccordionFunc
