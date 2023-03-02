import { Box, Typography, Card, Button } from '@mui/material'
import { useEffect, useState, useRef } from 'react'

/**
 * recruitingをtrueにすれば募集中テキストを表示できる
 */

const recruiting = false

const letters = 'あいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもやゆよらりるれろわをん'

export default function Banner() {
  let titleText = '一緒にxRを体験しませんか？'
  const steps = 2

  const [title, setTitle] = useState(titleText)

  const [index, setIndex] = useState(0)

  useEffect(() => {
    let interval = setInterval(() => {
      if (index < titleText.length * steps) {
        setTitle(
          titleText
            .split('')
            .map((letter, idx) =>
              idx * steps > index
                ? letters[Math.floor(Math.random() * letters.length)]
                : letter
            )
            .join('')
        )
        setIndex(index => index + 1)
      } else {
        clearInterval(interval)
      }
    }, 50)

    return () => {
      clearInterval(interval)
    }
  }, [index])

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
        <Typography
          sx={{ fontSize: { xs: 22, sm: 35, md: 50 }, whiteSpace: 'nowrap' }}
        >
          {title}
        </Typography>
        {!recruiting || (
          <Button
            variant='contained'
            component='a'
            target='_blank'
            href='https://example.com'
            sx={{ fontSize: { xs: 15, sm: 20, md: 30 } }}
          >
            部員募集中!
          </Button>
        )}
        {true || (
          <Typography sx={{ fontSize: { xs: 22, sm: 30, md: 35 } }}>
            部員募集中！
          </Typography>
        )}
      </Card>
    </Box>
  )
}
