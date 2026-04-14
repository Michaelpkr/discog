import { Routes, Route, Link as RouterLink, useLocation } from 'react-router-dom'
import {
  AppBar,
  Box,
  Button,
  CssBaseline,
  Toolbar,
  Typography,
} from '@mui/material'
import Blog from './pages/Blog'
import BlogPost from './pages/BlogPost'

function Nav() {
  const { pathname } = useLocation()

  return (
    <AppBar position="static" color="default" elevation={1}>
      <Toolbar>
        <Typography
          variant="h6"
          fontWeight={700}
          component={RouterLink}
          to="/"
          sx={{ textDecoration: 'none', color: 'inherit', flexGrow: 1 }}
        >
          discog
        </Typography>
        <Button
          component={RouterLink}
          to="/blog"
          color={pathname.startsWith('/blog') ? 'primary' : 'inherit'}
        >
          Blog
        </Button>
      </Toolbar>
    </AppBar>
  )
}

function Home() {
  return (
    <Box sx={{ p: 6, textAlign: 'center' }}>
      <Typography variant="h3" fontWeight={600}>
        discog
      </Typography>
      <Typography variant="body1" color="text.secondary" mt={2}>
        Collect and trade your favorite artists.
      </Typography>
    </Box>
  )
}

export default function App() {
  return (
    <>
      <CssBaseline />
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<BlogPost />} />
      </Routes>
    </>
  )
}