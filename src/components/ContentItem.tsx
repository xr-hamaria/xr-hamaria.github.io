import { Box, Card, Typography } from '@mui/material'
import { PropsWithChildren } from 'react'

type Props = {
  title?: string
  subtitle?: string
}

export default function ContentItem(props: PropsWithChildren<Props>) {
  return (
    <Card
      variant='outlined'
      sx={{
        display: 'flex',
        flexDirection: 'column',
        padding: 2
      }}
    >
      <Typography variant='h4'>{props.title}</Typography>
      <Typography sx={{mb: 2}} variant='body1'>{props.subtitle}</Typography>
      <Box>{props.children}</Box>
    </Card>
  )
}
