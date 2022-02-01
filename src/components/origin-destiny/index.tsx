import { Box } from '@mui/system'
import { InputLabel, MenuItem, Select, SelectChangeEvent, FormControl } from '@mui/material'
import { FC, useState } from 'react'
import { v4 } from 'uuid'
import { getMins } from '../../helpers/get-mins'
import { useTotal } from '../../hooks/use-total'

const DDDS_MAP: Record<string, string[]> = {
  '': ['011', '016', '017', '018'],
  '011': ['016', '017', '018'],
  '016': ['011', '017', '018'],
  '017': ['011', '016', '018'],
  '018': ['011', '016', '017']
}

const OriginDestiny: FC = () => {
  const { setCost } = useTotal()
  const [origin, setOrigin] = useState<string>('')
  const [destiny, setDestiny] = useState<string>('')

  const handleChangeOrigin = (e: SelectChangeEvent) => {
    setOrigin(e.target.value)
    setCost(getMins(`${e.target.value}-${destiny}`))
  }

  const handleChangeDestiny = (e: SelectChangeEvent) => {
    setDestiny(e.target.value)
    if (origin) setCost(getMins(`${origin}-${e.target.value}`))
  }

  return (
    <Box display="flex" style={{ gap: 10 }}>
      <FormControl aria-label="origin-select" fullWidth>
        <InputLabel>Origin</InputLabel>
        <Select value={origin} label="Origin" onChange={handleChangeOrigin}>
          {DDDS_MAP[destiny].map((item, index) => (
            <MenuItem key={index} value={item}>
              {item}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl fullWidth>
        <InputLabel>Destiny</InputLabel>
        <Select
          aria-label="destiny-select"
          value={destiny}
          label="Destiny"
          onChange={handleChangeDestiny}
        >
          {DDDS_MAP[origin].map((item, index) => (
            <MenuItem key={index} value={item}>
              {item}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  )
}
export default OriginDestiny
