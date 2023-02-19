import {
  Box,
  Typography,
  Toolbar,
  IconButton,
  AppBar,
  Card,
  CardMedia,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody
} from '@mui/material'
import AdbIcon from '@mui/icons-material/Adb'

import ContentItem from './components/ContentItem'
import Banner from './components/Banner'
import WorkItem from './components/WorkItem'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { CssBaseline } from '@mui/material'

import logo from './assets/logo.png'

function createData(title: string, data: string) {
  return { title, data }
}

const rows = [
  createData('人数', '約15人'),
  createData('部費', '0円'),
  createData('初期費用', '0円'),
  createData('活動日', '2週に1回ディスコードで定例会'),
  createData('活動場所', 'ディスコードまたは大学')
]

const darkTheme = createTheme({
  palette: {
    mode: 'dark'
  }
})

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <AppBar position='static'>
        <Toolbar>
          <Box component='img' src={logo} sx={{ height: 35, mr: 2 }}></Box>
          <Typography variant='h6' component='div'>
            xRサークルはまりあ
          </Typography>
        </Toolbar>
      </AppBar>

      <Banner />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: 3,
          paddingX: { xs: 0, sm: 5 },
          paddingY: 3,
          maxWidth: 1000,
          margin: '0 auto'
        }}
      >
        <ContentItem title='About' subtitle='サークルについて'>
        「静岡大学xRサークルはまりあ（旧：静岡大学xR同好会はまりあ）」は、xR（VR・AR・MRなどの総称）について、学内の認知度と技術力の向上を目指して活動するサークルです。ゲームエンジンやCGモデリングソフトの勉強会、VR体験会、バーチャル上でのイベントなどを開催しています。メンバーの多くが情報学部と工学部の学生ですが、主にオンラインで活動しており場所を選ばないため、教育学部や理学部など静岡キャンパスの学生も所属しています。
          <Table size='small' sx={{}}>
            <TableBody>
              <TableRow>
                {rows.map((el) => (
                  <TableRow>
                    <TableCell variant='head'>{el.title}</TableCell>
                    <TableCell>{el.data}</TableCell>
                  </TableRow>
                ))}
              </TableRow>
              <TableRow></TableRow>
            </TableBody>
          </Table>
        </ContentItem>
        <ContentItem title='Works' subtitle='過去の作品'>
          <Box
            sx={{
              padding: {xs: 0, md: 2},
              display: 'flex',
              flexDirection: 'column',
              gap: 2
            }}
          >
            <WorkItem
              img='https://game.creators-guild.com/wp-content/uploads/2021/11/tmp-329.png'
              title='黄昏の赤ずきん'
              link='https://game.creators-guild.com/gck2021/4786/'
            >
              autem fugiat quasi quae!
              repellat reprehenderit a hic quibusdam ducimus ipsum! Nostrum
              dicta eveniet temporibus vitae eaque in illo! Expedita excepturi
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe
            </WorkItem>
            <WorkItem
              img='https://xr-hamaria.github.io/virtual-inf/img/scshot.png'
              link='https://xr-hamaria.github.io/virtual-inf/'
              title='バーチャル浜松キャンパス'
              reversed
            >
            静岡大学浜松キャンパスをバーチャルで実現したもの、VRゴーグルがなくてもスマホやデスクトップ、タブレットからもアクセスできます！
            </WorkItem>
            <WorkItem
              img='https://via.placeholder.com/300x200/00ff33'
              title='[WIP]浜キャンの七不思議'
            >
            </WorkItem>
          </Box>
        </ContentItem>
        <ContentItem title="Events" subtitle='開催したイベント'>
          <ul>
            <li>Unity勉強会</li>
            <li>静大祭in浜松VR体験ブース</li>
          </ul>

        </ContentItem>
        <ContentItem title='Links' subtitle='リンク集'>
          <ul>
            <li>バーチャル浜キャン</li>
            <li>大学</li>
            <li>ツイッター</li>
            <li>作ったゲーム</li>
          </ul>
        </ContentItem>
      </Box>
      <Box
        sx={{
          background: '#222',
          top: 'auto',
          bottom: 0,
          height: 40,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        © All Rights Reserved, 2020-2023
      </Box>
    </ThemeProvider>
  )
}

export default App
