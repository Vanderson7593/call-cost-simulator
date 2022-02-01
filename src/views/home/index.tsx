import { FC } from 'react'
import { Min, Plans, OriginDestiny, Cost } from '@components'
import { Box, Typography } from '@mui/material'
import { PLANS_MOCK } from '@mocks'
import { Container } from '../../styles/global.styles'

const HomeView: FC = () => {
  return (
    <Container>
      <Typography color="primary" variant="h4">
        Telzir call cost simulator
      </Typography>
      <Box display="flex" flexDirection="column" style={{ gap: 20 }} my={5}>
        <OriginDestiny />
        <Min />
        <Plans plans={PLANS_MOCK} />
        <Cost />
      </Box>
    </Container>
  )
}
export default HomeView
