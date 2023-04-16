import React, { CSSProperties, FC, useState } from 'react'
import { FormControlLabel, Box, Checkbox } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import CheckIcon from '@mui/icons-material/Check'
import Slider from '@mui/material/Slider'

import stylesUntyped from '../../../../../styles/jssthemes/material-kit-pro-react-v1.9.0/material-kit-pro-react/views/ecommerceSections/productsStyle.js'
import { BasicComponentProps } from 'types/styleTypes/nextjs-material-kit/componentProps.js'
import {
  MKIT19_AccordionFunc,
  CT_CardBody,
  CT_Card,
  CT_GridItem,
} from '@components/ui'

type Props = BasicComponentProps

function valuetext(value: number) {
  return `${value}°C`
}

const minDistance = 10

const OldCMS_SectionLeftMenu: FC<Props> = (): React.ReactElement => {
  const styles = stylesUntyped as { [key: string]: CSSProperties }
  const theme = useTheme()

  const [checked, setChecked] = useState([1, 9, 27])

  const [value1, setValue1] = useState<number[]>([20, 37])

  const handleChange1 = (
    event: Event,
    newValue: number | number[],
    activeThumb: number
  ) => {
    if (!Array.isArray(newValue)) {
      return
    }

    if (activeThumb === 0) {
      setValue1([Math.min(newValue[0], value1[1] - minDistance), value1[1]])
    } else {
      setValue1([value1[0], Math.max(newValue[1], value1[0] + minDistance)])
    }
  }

  const handleToggle = (value: number) => {
    const currentIndex = checked.indexOf(value)
    const newChecked = [...checked]
    if (currentIndex === -1) {
      newChecked.push(value)
    } else {
      newChecked.splice(currentIndex, 1)
    }
    setChecked(newChecked)
  }

  return (
    <CT_GridItem md={3} sm={3}>
      <CT_Card plain>
        <CT_CardBody styleProps={styles.cardBodyRefine}>
          <MKIT19_AccordionFunc
            active={[0, 2]}
            activeColor="primary"
            collapses={[
              {
                title: 'Price Range',
                content: (
                  <CT_CardBody styleProps={styles.cardBodyRefine}>
                    <Slider
                      getAriaLabel={() => 'Minimum distance'}
                      value={value1}
                      onChange={handleChange1}
                      valueLabelDisplay="on"
                      getAriaValueText={valuetext}
                      disableSwap
                      color={
                        theme.palette.mode === 'light' ? 'primary' : 'secondary'
                      }
                    />
                  </CT_CardBody>
                ),
              },
              {
                title: 'Clothing',
                content: (
                  <Box sx={styles.customExpandPanel}>
                    <Box
                      sx={{
                        ...styles.checkboxAndRadio,
                        ...styles.checkboxAndRadioHorizontal,
                      }}
                    >
                      <FormControlLabel
                        control={
                          <Checkbox
                            disableRipple
                            tabIndex={-1}
                            onClick={() => handleToggle(1)}
                            checked={checked.indexOf(1) !== -1 ? true : false}
                            checkedIcon={<CheckIcon sx={styles.checkedIcon} />}
                            icon={<CheckIcon sx={styles.uncheckedIcon} />}
                            sx={{
                              '&.Mui-checked': styles.checked,
                              '&.MuiCheckbox-root': styles.checkRoot,
                            }}
                          />
                        }
                        sx={{
                          '&.MuiFormControlLabel-label': styles.label,
                        }}
                        label="Blazers"
                      />
                      <FormControlLabel
                        control={
                          <Checkbox
                            disableRipple
                            tabIndex={-1}
                            onClick={() => handleToggle(2)}
                            checkedIcon={<CheckIcon sx={styles.checkedIcon} />}
                            icon={<CheckIcon sx={styles.uncheckedIcon} />}
                            sx={{
                              '&.Mui-checked': styles.checked,
                              '&.MuiCheckbox-root': styles.checkRoot,
                            }}
                          />
                        }
                        sx={{
                          '&.MuiFormControlLabel-label': styles.label,
                        }}
                        label="Casual Shirts"
                      />
                      <FormControlLabel
                        control={
                          <Checkbox
                            disableRipple
                            tabIndex={-1}
                            onClick={() => handleToggle(3)}
                            checkedIcon={<CheckIcon sx={styles.checkedIcon} />}
                            icon={<CheckIcon sx={styles.uncheckedIcon} />}
                            sx={{
                              '&.Mui-checked': styles.checked,
                              '&.MuiCheckbox-root': styles.checkRoot,
                            }}
                          />
                        }
                        sx={{
                          '&.MuiFormControlLabel-label': styles.label,
                        }}
                        label="Formal Shirts"
                      />
                      <FormControlLabel
                        control={
                          <Checkbox
                            disableRipple
                            tabIndex={-1}
                            onClick={() => handleToggle(4)}
                            checkedIcon={<CheckIcon sx={styles.checkedIcon} />}
                            icon={<CheckIcon sx={styles.uncheckedIcon} />}
                            sx={{
                              '&.Mui-checked': styles.checked,
                              '&.MuiCheckbox-root': styles.checkRoot,
                            }}
                          />
                        }
                        sx={{
                          '&.MuiFormControlLabel-label': styles.label,
                        }}
                        label="Jeans"
                      />
                      <FormControlLabel
                        control={
                          <Checkbox
                            disableRipple
                            tabIndex={-1}
                            onClick={() => handleToggle(5)}
                            checkedIcon={<CheckIcon sx={styles.checkedIcon} />}
                            icon={<CheckIcon sx={styles.uncheckedIcon} />}
                            sx={{
                              '&.Mui-checked': styles.checked,
                              '&.MuiCheckbox-root': styles.checkRoot,
                            }}
                          />
                        }
                        sx={{
                          '&.MuiFormControlLabel-label': styles.label,
                        }}
                        label="Polos"
                      />
                      <FormControlLabel
                        control={
                          <Checkbox
                            disableRipple
                            tabIndex={-1}
                            onClick={() => handleToggle(6)}
                            checkedIcon={<CheckIcon sx={styles.checkedIcon} />}
                            icon={<CheckIcon sx={styles.uncheckedIcon} />}
                            sx={{
                              '&.Mui-checked': styles.checked,
                              '&.MuiCheckbox-root': styles.checkRoot,
                            }}
                          />
                        }
                        sx={{
                          '&.MuiFormControlLabel-label': styles.label,
                        }}
                        label="Pyjamas"
                      />
                      <FormControlLabel
                        control={
                          <Checkbox
                            disableRipple
                            tabIndex={-1}
                            onClick={() => handleToggle(7)}
                            checkedIcon={<CheckIcon sx={styles.checkedIcon} />}
                            icon={<CheckIcon sx={styles.uncheckedIcon} />}
                            sx={{
                              '&.Mui-checked': styles.checked,
                              '&.MuiCheckbox-root': styles.checkRoot,
                            }}
                          />
                        }
                        sx={{
                          '&.MuiFormControlLabel-label': styles.label,
                        }}
                        label="Shorts"
                      />
                      <FormControlLabel
                        control={
                          <Checkbox
                            disableRipple
                            tabIndex={-1}
                            onClick={() => handleToggle(8)}
                            checkedIcon={<CheckIcon sx={styles.checkedIcon} />}
                            icon={<CheckIcon sx={styles.uncheckedIcon} />}
                            sx={{
                              '&.Mui-checked': styles.checked,
                              '&.MuiCheckbox-root': styles.checkRoot,
                            }}
                          />
                        }
                        sx={{
                          '&.MuiFormControlLabel-label': styles.label,
                        }}
                        label="Trousers"
                      />
                    </Box>
                  </Box>
                ),
              },
              {
                title: 'Clothing',
                content: (
                  <Box sx={styles.customExpandPanel}>
                    <Box
                      sx={{
                        ...styles.checkboxAndRadio,
                        ...styles.checkboxAndRadioHorizontal,
                      }}
                    >
                      <FormControlLabel
                        control={
                          <Checkbox
                            disableRipple
                            tabIndex={-1}
                            onClick={() => handleToggle(9)}
                            checked={checked.indexOf(9) !== -1 ? true : false}
                            checkedIcon={<CheckIcon sx={styles.checkedIcon} />}
                            icon={<CheckIcon sx={styles.uncheckedIcon} />}
                            sx={{
                              '&.Mui-checked': styles.checked,
                              '&.MuiCheckbox-root': styles.checkRoot,
                            }}
                          />
                        }
                        sx={{
                          '&.MuiFormControlLabel-label': styles.label,
                        }}
                        label="All"
                      />
                      <FormControlLabel
                        control={
                          <Checkbox
                            disableRipple
                            tabIndex={-1}
                            onClick={() => handleToggle(10)}
                            checkedIcon={<CheckIcon sx={styles.checkedIcon} />}
                            icon={<CheckIcon sx={styles.uncheckedIcon} />}
                            sx={{
                              '&.Mui-checked': styles.checked,
                              '&.MuiCheckbox-root': styles.checkRoot,
                            }}
                          />
                        }
                        sx={{
                          '&.MuiFormControlLabel-label': styles.label,
                        }}
                        label="Polo Ralph Lauren"
                      />
                      <FormControlLabel
                        control={
                          <Checkbox
                            disableRipple
                            tabIndex={-1}
                            onClick={() => handleToggle(11)}
                            checkedIcon={<CheckIcon sx={styles.checkedIcon} />}
                            icon={<CheckIcon sx={styles.uncheckedIcon} />}
                            sx={{
                              '&.Mui-checked': styles.checked,
                              '&.MuiCheckbox-root': styles.checkRoot,
                            }}
                          />
                        }
                        sx={{
                          '&.MuiFormControlLabel-label': styles.label,
                        }}
                        label="Wooyoungmi"
                      />
                      <FormControlLabel
                        control={
                          <Checkbox
                            disableRipple
                            tabIndex={-1}
                            onClick={() => handleToggle(12)}
                            checkedIcon={<CheckIcon sx={styles.checkedIcon} />}
                            icon={<CheckIcon sx={styles.uncheckedIcon} />}
                            sx={{
                              '&.Mui-checked': styles.checked,
                              '&.MuiCheckbox-root': styles.checkRoot,
                            }}
                          />
                        }
                        sx={{
                          '&.MuiFormControlLabel-label': styles.label,
                        }}
                        label="Alexander McQueen"
                      />
                      <FormControlLabel
                        control={
                          <Checkbox
                            disableRipple
                            tabIndex={-1}
                            onClick={() => handleToggle(13)}
                            checkedIcon={<CheckIcon sx={styles.checkedIcon} />}
                            icon={<CheckIcon sx={styles.uncheckedIcon} />}
                            sx={{
                              '&.Mui-checked': styles.checked,
                              '&.MuiCheckbox-root': styles.checkRoot,
                            }}
                          />
                        }
                        sx={{
                          '&.MuiFormControlLabel-label': styles.label,
                        }}
                        label="Tom Ford"
                      />
                      <FormControlLabel
                        control={
                          <Checkbox
                            disableRipple
                            tabIndex={-1}
                            onClick={() => handleToggle(14)}
                            checkedIcon={<CheckIcon sx={styles.checkedIcon} />}
                            icon={<CheckIcon sx={styles.uncheckedIcon} />}
                            sx={{
                              '&.Mui-checked': styles.checked,
                              '&.MuiCheckbox-root': styles.checkRoot,
                            }}
                          />
                        }
                        sx={{
                          '&.MuiFormControlLabel-label': styles.label,
                        }}
                        label="AMI"
                      />
                      <FormControlLabel
                        control={
                          <Checkbox
                            disableRipple
                            tabIndex={-1}
                            onClick={() => handleToggle(15)}
                            checkedIcon={<CheckIcon sx={styles.checkedIcon} />}
                            icon={<CheckIcon sx={styles.uncheckedIcon} />}
                            sx={{
                              '&.Mui-checked': styles.checked,
                              '&.MuiCheckbox-root': styles.checkRoot,
                            }}
                          />
                        }
                        sx={{
                          '&.MuiFormControlLabel-label': styles.label,
                        }}
                        label="Berena"
                      />
                      <FormControlLabel
                        control={
                          <Checkbox
                            disableRipple
                            tabIndex={-1}
                            onClick={() => handleToggle(16)}
                            checkedIcon={<CheckIcon sx={styles.checkedIcon} />}
                            icon={<CheckIcon sx={styles.uncheckedIcon} />}
                            sx={{
                              '&.Mui-checked': styles.checked,
                              '&.MuiCheckbox-root': styles.checkRoot,
                            }}
                          />
                        }
                        sx={{
                          '&.MuiFormControlLabel-label': styles.label,
                        }}
                        label="Thom Sweeney"
                      />
                      <FormControlLabel
                        control={
                          <Checkbox
                            disableRipple
                            tabIndex={-1}
                            onClick={() => handleToggle(17)}
                            checkedIcon={<CheckIcon sx={styles.checkedIcon} />}
                            icon={<CheckIcon sx={styles.uncheckedIcon} />}
                            sx={{
                              '&.Mui-checked': styles.checked,
                              '&.MuiCheckbox-root': styles.checkRoot,
                            }}
                          />
                        }
                        sx={{
                          '&.MuiFormControlLabel-label': styles.label,
                        }}
                        label="Burberry Prorsum"
                      />
                      <FormControlLabel
                        control={
                          <Checkbox
                            disableRipple
                            tabIndex={-1}
                            onClick={() => handleToggle(18)}
                            checkedIcon={<CheckIcon sx={styles.checkedIcon} />}
                            icon={<CheckIcon sx={styles.uncheckedIcon} />}
                            sx={{
                              '&.Mui-checked': styles.checked,
                              '&.MuiCheckbox-root': styles.checkRoot,
                            }}
                          />
                        }
                        sx={{
                          '&.MuiFormControlLabel-label': styles.label,
                        }}
                        label="Calvin Klein"
                      />
                      <FormControlLabel
                        control={
                          <Checkbox
                            disableRipple
                            tabIndex={-1}
                            onClick={() => handleToggle(19)}
                            checkedIcon={<CheckIcon sx={styles.checkedIcon} />}
                            icon={<CheckIcon sx={styles.uncheckedIcon} />}
                            sx={{
                              '&.Mui-checked': styles.checked,
                              '&.MuiCheckbox-root': styles.checkRoot,
                            }}
                          />
                        }
                        sx={{
                          '&.MuiFormControlLabel-label': styles.label,
                        }}
                        label="Kingsman"
                      />
                      <FormControlLabel
                        control={
                          <Checkbox
                            disableRipple
                            tabIndex={-1}
                            onClick={() => handleToggle(20)}
                            checkedIcon={<CheckIcon sx={styles.checkedIcon} />}
                            icon={<CheckIcon sx={styles.uncheckedIcon} />}
                            sx={{
                              '&.Mui-checked': styles.checked,
                              '&.MuiCheckbox-root': styles.checkRoot,
                            }}
                          />
                        }
                        sx={{
                          '&.MuiFormControlLabel-label': styles.label,
                        }}
                        label="Club Monaco"
                      />
                      <FormControlLabel
                        control={
                          <Checkbox
                            disableRipple
                            tabIndex={-1}
                            onClick={() => handleToggle(21)}
                            checkedIcon={<CheckIcon sx={styles.checkedIcon} />}
                            icon={<CheckIcon sx={styles.uncheckedIcon} />}
                            sx={{
                              '&.Mui-checked': styles.checked,
                              '&.MuiCheckbox-root': styles.checkRoot,
                            }}
                          />
                        }
                        sx={{
                          '&.MuiFormControlLabel-label': styles.label,
                        }}
                        label="Dolce & Gabbana"
                      />
                      <FormControlLabel
                        control={
                          <Checkbox
                            disableRipple
                            tabIndex={-1}
                            onClick={() => handleToggle(22)}
                            checkedIcon={<CheckIcon sx={styles.checkedIcon} />}
                            icon={<CheckIcon sx={styles.uncheckedIcon} />}
                            sx={{
                              '&.Mui-checked': styles.checked,
                              '&.MuiCheckbox-root': styles.checkRoot,
                            }}
                          />
                        }
                        sx={{
                          '&.MuiFormControlLabel-label': styles.label,
                        }}
                        label="Gucci"
                      />
                      <FormControlLabel
                        control={
                          <Checkbox
                            disableRipple
                            tabIndex={-1}
                            onClick={() => handleToggle(23)}
                            checkedIcon={<CheckIcon sx={styles.checkedIcon} />}
                            icon={<CheckIcon sx={styles.uncheckedIcon} />}
                            sx={{
                              '&.Mui-checked': styles.checked,
                              '&.MuiCheckbox-root': styles.checkRoot,
                            }}
                          />
                        }
                        sx={{
                          '&.MuiFormControlLabel-label': styles.label,
                        }}
                        label="Biglioli"
                      />
                      <FormControlLabel
                        control={
                          <Checkbox
                            disableRipple
                            tabIndex={-1}
                            onClick={() => handleToggle(24)}
                            checkedIcon={<CheckIcon sx={styles.checkedIcon} />}
                            icon={<CheckIcon sx={styles.uncheckedIcon} />}
                            sx={{
                              '&.Mui-checked': styles.checked,
                              '&.MuiCheckbox-root': styles.checkRoot,
                            }}
                          />
                        }
                        sx={{
                          '&.MuiFormControlLabel-label': styles.label,
                        }}
                        label="Lanvin"
                      />
                      <FormControlLabel
                        control={
                          <Checkbox
                            disableRipple
                            tabIndex={-1}
                            onClick={() => handleToggle(25)}
                            checkedIcon={<CheckIcon sx={styles.checkedIcon} />}
                            icon={<CheckIcon sx={styles.uncheckedIcon} />}
                            sx={{
                              '&.Mui-checked': styles.checked,
                              '&.MuiCheckbox-root': styles.checkRoot,
                            }}
                          />
                        }
                        sx={{
                          '&.MuiFormControlLabel-label': styles.label,
                        }}
                        label="Loro Piana"
                      />
                      <FormControlLabel
                        control={
                          <Checkbox
                            disableRipple
                            tabIndex={-1}
                            onClick={() => handleToggle(26)}
                            checkedIcon={<CheckIcon sx={styles.checkedIcon} />}
                            icon={<CheckIcon sx={styles.uncheckedIcon} />}
                            sx={{
                              '&.Mui-checked': styles.checked,
                              '&.MuiCheckbox-root': styles.checkRoot,
                            }}
                          />
                        }
                        sx={{
                          '&.MuiFormControlLabel-label': styles.label,
                        }}
                        label="Massimo Alba"
                      />
                    </Box>
                  </Box>
                ),
              },
              {
                title: 'Colour',
                content: (
                  <Box sx={styles.customExpandPanel}>
                    <Box
                      sx={{
                        ...styles.checkboxAndRadio,
                        ...styles.checkboxAndRadioHorizontal,
                      }}
                    >
                      <FormControlLabel
                        control={
                          <Checkbox
                            disableRipple
                            tabIndex={-1}
                            onClick={() => handleToggle(27)}
                            checked={checked.indexOf(27) !== -1 ? true : false}
                            checkedIcon={<CheckIcon sx={styles.checkedIcon} />}
                            icon={<CheckIcon sx={styles.uncheckedIcon} />}
                            sx={{
                              '&.Mui-checked': styles.checked,
                              '&.MuiCheckbox-root': styles.checkRoot,
                            }}
                          />
                        }
                        sx={{
                          '&.MuiFormControlLabel-label': styles.label,
                        }}
                        label="All"
                      />
                      <FormControlLabel
                        control={
                          <Checkbox
                            disableRipple
                            tabIndex={-1}
                            onClick={() => handleToggle(28)}
                            checkedIcon={<CheckIcon sx={styles.checkedIcon} />}
                            icon={<CheckIcon sx={styles.uncheckedIcon} />}
                            sx={{
                              '&.Mui-checked': styles.checked,
                              '&.MuiCheckbox-root': styles.checkRoot,
                            }}
                          />
                        }
                        sx={{
                          '&.MuiFormControlLabel-label': styles.label,
                        }}
                        label="Black"
                      />
                      <FormControlLabel
                        control={
                          <Checkbox
                            disableRipple
                            tabIndex={-1}
                            onClick={() => handleToggle(29)}
                            checkedIcon={<CheckIcon sx={styles.checkedIcon} />}
                            icon={<CheckIcon sx={styles.uncheckedIcon} />}
                            sx={{
                              '&.Mui-checked': styles.checked,
                              '&.MuiCheckbox-root': styles.checkRoot,
                            }}
                          />
                        }
                        sx={{
                          '&.MuiFormControlLabel-label': styles.label,
                        }}
                        label="Blue"
                      />
                      <FormControlLabel
                        control={
                          <Checkbox
                            disableRipple
                            tabIndex={-1}
                            onClick={() => handleToggle(30)}
                            checkedIcon={<CheckIcon sx={styles.checkedIcon} />}
                            icon={<CheckIcon sx={styles.uncheckedIcon} />}
                            sx={{
                              '&.Mui-checked': styles.checked,
                              '&.MuiCheckbox-root': styles.checkRoot,
                            }}
                          />
                        }
                        sx={{
                          '&.MuiFormControlLabel-label': styles.label,
                        }}
                        label="Brown"
                      />
                      <FormControlLabel
                        control={
                          <Checkbox
                            disableRipple
                            tabIndex={-1}
                            onClick={() => handleToggle(31)}
                            checkedIcon={<CheckIcon sx={styles.checkedIcon} />}
                            icon={<CheckIcon sx={styles.uncheckedIcon} />}
                            sx={{
                              '&.Mui-checked': styles.checked,
                              '&.MuiCheckbox-root': styles.checkRoot,
                            }}
                          />
                        }
                        sx={{
                          '&.MuiFormControlLabel-label': styles.label,
                        }}
                        label="Gray"
                      />
                      <FormControlLabel
                        control={
                          <Checkbox
                            disableRipple
                            tabIndex={-1}
                            onClick={() => handleToggle(32)}
                            checkedIcon={<CheckIcon sx={styles.checkedIcon} />}
                            icon={<CheckIcon sx={styles.uncheckedIcon} />}
                            sx={{
                              '&.Mui-checked': styles.checked,
                              '&.MuiCheckbox-root': styles.checkRoot,
                            }}
                          />
                        }
                        sx={{
                          '&.MuiFormControlLabel-label': styles.label,
                        }}
                        label="Green"
                      />
                      <FormControlLabel
                        control={
                          <Checkbox
                            disableRipple
                            tabIndex={-1}
                            onClick={() => handleToggle(33)}
                            checkedIcon={<CheckIcon sx={styles.checkedIcon} />}
                            icon={<CheckIcon sx={styles.uncheckedIcon} />}
                            sx={{
                              '&.Mui-checked': styles.checked,
                              '&.MuiCheckbox-root': styles.checkRoot,
                            }}
                          />
                        }
                        sx={{
                          '&.MuiFormControlLabel-label': styles.label,
                        }}
                        label="Neutrals"
                      />
                      <FormControlLabel
                        control={
                          <Checkbox
                            disableRipple
                            tabIndex={-1}
                            onClick={() => handleToggle(34)}
                            checkedIcon={<CheckIcon sx={styles.checkedIcon} />}
                            icon={<CheckIcon sx={styles.uncheckedIcon} />}
                            sx={{
                              '&.Mui-checked': styles.checked,
                              '&.MuiCheckbox-root': styles.checkRoot,
                            }}
                          />
                        }
                        sx={{
                          '&.MuiFormControlLabel-label': styles.label,
                        }}
                        label="Purple"
                      />
                    </Box>
                  </Box>
                ),
              },
            ]}
          />
        </CT_CardBody>
      </CT_Card>
    </CT_GridItem>
  )
}

export default OldCMS_SectionLeftMenu
