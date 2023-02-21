import { Box, Typography, Card } from '@mui/material'

/**
 * recruitingをtrueにすれば募集中テキストを表示できる
 */

const recruiting = false

export default function Banner() {
  return (
    <Box
      sx={{
        width: 1,
        height: 300,
        backgroundImage: `url(/banner.png)`,
        backgroundSize: 'cover',
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
        <Typography sx={{fontSize: {xs: 22, sm: 35, md: 50},whiteSpace: 'nowrap'}}>一緒にxRを経験してみませんか?</Typography>
        {!recruiting || <Typography sx={{fontSize: {xs: 22, sm: 30, md: 35}}}>部員募集中！</Typography>}
      </Card>
    </Box>
  )
}
