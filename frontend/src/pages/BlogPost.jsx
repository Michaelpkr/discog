import { useParams, Link as RouterLink } from 'react-router-dom'
import {
  Box,
  Button,
  Container,
  Divider,
  Typography,
} from '@mui/material'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import posts from '../data/posts'

function formatDate(dateStr) {
  return new Date(dateStr).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'UTC',
  })
}

export default function BlogPost() {
  const { id } = useParams()
  const post = posts.find((p) => p.id === Number(id))

  if (!post) {
    return (
      <Container maxWidth="md" sx={{ py: 6 }}>
        <Typography variant="h5">Post not found.</Typography>
        <Button component={RouterLink} to="/blog" sx={{ mt: 2 }}>
          Back to Blog
        </Button>
      </Container>
    )
  }

  return (
    <Container maxWidth="md" sx={{ py: 6 }}>
      <Button
        component={RouterLink}
        to="/blog"
        startIcon={<ArrowBackIcon />}
        sx={{ mb: 4 }}
      >
        Blog
      </Button>

      <Typography variant="caption" color="text.secondary" display="block">
        {formatDate(post.date)}
      </Typography>
      <Typography variant="h3" fontWeight={600} mt={0.5} mb={3}>
        {post.title}
      </Typography>
      <Divider sx={{ mb: 4 }} />

      <ReactMarkdown components={markdownComponents}>
        {post.content}
      </ReactMarkdown>
    </Container>
  )
}