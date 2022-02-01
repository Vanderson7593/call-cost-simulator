import { InputLabel, MenuItem, Select, SelectChangeEvent, FormControl } from '@mui/material'
import { useTotal } from '../../hooks/use-total'
import { FC, useState } from 'react'
import { v4 } from 'uuid'
import { PlansProps } from './plans.types'

const Plans: FC<PlansProps> = ({ plans }) => {
  const { setPlanMin } = useTotal()
  const [plan, setPlan] = useState<string>('30')

  const handleChange = (event: SelectChangeEvent) => {
    setPlan(event.target.value)
    setPlanMin(Number(event.target.value))
  }

  return (
    <FormControl fullWidth>
      <InputLabel>Plan</InputLabel>
      <Select aria-label="plans-select" value={plan} label="Plan" onChange={handleChange}>
        {plans.map(({ title, mins }) => (
          <MenuItem key={v4()} value={mins}>{`${title} - ${mins}mins`}</MenuItem>
        ))}
      </Select>
    </FormControl>
  )
}
export default Plans
