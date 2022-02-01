import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import { useTotal } from '../../hooks/use-total'
import { FC } from 'react'
import { Card } from './cost.styles'

const Cost: FC = () => {
  const { total } = useTotal()

  return (
    <Box>
      <Typography variant="h5">Call cost</Typography>
      <Box display="flex" style={{ gap: 5 }}>
        <Card>
          <Typography>With Plan:</Typography>
          <Typography color="primary" fontWeight="bold">
            {`R$ ${total?.withPlan || 0}`}
          </Typography>
        </Card>
        <Card>
          <Typography>Without Plan:</Typography>
          <Typography color="primary" fontWeight="bold">
            {`R$ ${total?.withoutPlan || 0}`}
          </Typography>
        </Card>
      </Box>
    </Box>
  )
}
export default Cost
