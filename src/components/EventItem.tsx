import {Box, Card, Typography} from '@mui/material'
import { PropsWithChildren } from 'react'

type Props = {
  title?: string
}

export default function EventItem(props: PropsWithChildren<Props>) {
  return <Box>
    <Card variant='outlined' sx={{padding: 2, display: 'flex', flexDirection: 'column'}}>
      <Typography variant='h5' sx={{mb: 2}}>{props.title}</Typography>
      <Typography variant='body1'>{props.children}</Typography>
    </Card>
  </Box>
}
