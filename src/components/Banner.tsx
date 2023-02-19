import { Box, Typography, Card } from '@mui/material'

export default function Banner() {
  return (
    <Box
      sx={{
        width: 1,
        height: 300,
        backgroundImage: `url(https://via.placeholder.com/800x300/003355)`,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <Card
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: 2,
          padding: 2,
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <Typography sx={{fontSize: {xs: 35, md: 50},whiteSpace: 'nowrap'}}>xRを経験してみませんか?</Typography>
        <Typography sx={{fontSize: {xs: 25, md: 35}}}>部員募集中</Typography>
      </Card>
    </Box>
  )
}
