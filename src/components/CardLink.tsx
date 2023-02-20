import { Card, Typography } from '@mui/material'
import { PropsWithChildren } from 'react'

type Props = {
  icon?: React.ReactNode
  title?: string
  link?: string
}

export default function CardLink(props: PropsWithChildren<Props>) {
  return (
    <Card component='a' href={props.link} target="_blank" sx={{ textDecoration: 'none', padding: 3, display: 'flex', gap: 2}}>
      {props.icon}
      <Typography>{props.title}</Typography>
    </Card>
  )
}
