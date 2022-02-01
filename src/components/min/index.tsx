import { Slider, Typography } from '@mui/material'
import { Box } from '@mui/system'
import { useTotal } from '../../hooks/use-total'
import { FC, useState } from 'react'

const DEFAULT_VALUE = 1
const MAX = 200
const MIN = 1

const Min: FC = () => {
  const { setMins } = useTotal()
  const [minutes, setMinutes] = useState<number>(DEFAULT_VALUE)

  const handleChange = (_: Event, newValue: number) => {
    setMinutes(newValue)
    setMins(newValue)
  }

  return (
    <Box>
      <Typography>Minutes ({minutes})</Typography>
      <Slider
        aria-label="min-slider"
        defaultValue={DEFAULT_VALUE}
        valueLabelDisplay="auto"
        max={MAX}
        min={MIN}
        onChange={handleChange}
      />
    </Box>
  )
}
export default Min
