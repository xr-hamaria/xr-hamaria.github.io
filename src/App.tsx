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
import TwitterIcon from '@mui/icons-material/Twitter'
import SchoolIcon from '@mui/icons-material/School'
import BlenderIcon from '@mui/icons-material/Blender'

import ContentItem from './components/ContentItem'
import Banner from './components/Banner'
import WorkItem from './components/WorkItem'
import CardLink from './components/CardLink'
import EventItem from './components/EventItem'
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
  createData('活動日', '2週に1回Discordで定例会'),
  createData('活動場所', 'Discordまたは大学')
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
              {rows.map((el, i) => (
                <TableRow key={i}>
                  <TableCell variant='head'>{el.title}</TableCell>
                  <TableCell>{el.data}</TableCell>
                </TableRow>
              ))}
              <TableRow></TableRow>
            </TableBody>
          </Table>
        </ContentItem>
        {true || (
          <ContentItem title='Recruiting Information' subtitle='募集情報'>
            部員を募集しています！VRヘッドセットを所有するにも関わらず、xRに興味があれば大歓迎です！
            <br />
            加入しようとする方は以下のDiscordリンクをアクセスしてください！
          </ContentItem>
        )}
        <ContentItem title='Works' subtitle='過去の作品'>
          <Box
            sx={{
              padding: { xs: 0, md: 2 },
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
              おばあさんからたくさんお菓子をもらってお家に帰ろうとしたらあたりはすっかり暗くなっていた。
              お菓子の匂いにひきつけられお腹のすいたおばけたちがあなたに迫りくる。
              生き延びるにはおばけにお菓子を投げ、夜明けを待つしかない。
            </WorkItem>
            <WorkItem
              img='https://xr-hamaria.github.io/virtual-inf/img/scshot.png'
              link='https://xr-hamaria.github.io/virtual-inf/'
              title='バーチャル浜松キャンパス'
              reversed
            >
              静岡大学浜松キャンパスをバーチャルで実現したもの、VRゴーグルがなくてもスマホやデスクトップ、タブレットからもアクセスできます！
            </WorkItem>
          </Box>
        </ContentItem>
        <ContentItem title='Events' subtitle='開催したイベント'>
          <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
            <EventItem title='静大祭in浜松VR体験ブース'>
              VRを体験したことない方向けに、静大祭で体験ブースとして開催しました
            </EventItem>
            <EventItem title='Unity勉強会'>
              VRゲーム開発のために、Unityというゲームエンジンの勉強会
            </EventItem>
            <EventItem title='Blender勉強会'>
              3Dモデリングの基本を一緒に勉強する勉強会
            </EventItem>
          </Box>
        </ContentItem>
        <ContentItem title='Links' subtitle='リンク集'>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
            <CardLink
              icon={<TwitterIcon />}
              title='公式ツイッター'
              link='https://twitter.com/xR_Hamamatsu'
            />
            <CardLink
              icon={<SchoolIcon />}
              title='静岡大学'
              link='https://www.shizuoka.ac.jp'
            />
          </Box>
        </ContentItem>
      </Box>
      <Box
        sx={{
          fontSize: {xs: 12, sm: 16},
          background: '#222',
          top: 'auto',
          bottom: 0,
          height: 40,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        © All Rights Reserved, xR Association Hamaria, 2020-2023
      </Box>
    </ThemeProvider>
  )
}

export default App
