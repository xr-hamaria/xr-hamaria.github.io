import { Card, CardMedia, Typography, Box, Button } from '@mui/material'
import { PropsWithChildren } from 'react'

type Props = {
  title?: string
  desc?: string
  img?: string
  link?: string
  reversed?: boolean
}

export default function WorkItem(props: PropsWithChildren<Props>) {
  return (
    <Card
      sx={{
        display: 'flex',
        flexDirection: props.reversed ? 'row-reverse' : 'row',
        flexWrap: 'wrap'
      }}
      variant='outlined'
    >
      <CardMedia
        component='img'
        src={props.img}
        sx={{ objectFit: 'cover', flexGrow: 1, width: 235, height: 300 }}
      ></CardMedia>
      <Box
        sx={{
          width: 300,
          padding: 3,
          flexGrow: 1,
          display: 'flex',
          flexDirection: 'column'
        }}
      >
        <Typography variant='h4' sx={{mb: 3}}>{props.title}</Typography>
        <Typography variant='body1' sx={{ flexGrow: 1 }}>
          {props.children}
        </Typography>
        <Box sx={{ textAlign: 'right' }}>
          {props.link ? (
            <Button
              component='a'
              href={props.link}
              target='_blank'
              variant='text'
              sx={{ justifySelf: 'right' }}
            >
              詳細
            </Button>
          ) : (
            ''
          )}
        </Box>
      </Box>
    </Card>
  )
}
