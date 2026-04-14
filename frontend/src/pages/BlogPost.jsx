import { useParams, Link as RouterLink } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'
import remarkBreaks from 'remark-breaks'
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

const markdownComponents = {
  h1: ({ children }) => <Typography variant="h4" fontWeight={600} mt={4} mb={1}>{children}</Typography>,
  h2: ({ children }) => <Typography variant="h5" fontWeight={600} mt={4} mb={1}>{children}</Typography>,
  h3: ({ children }) => <Typography variant="h6" fontWeight={600} mt={3} mb={1}>{children}</Typography>,
  p:  ({ children }) => <Typography variant="body1" mb={3} sx={{ lineHeight: 1.8 }}>{children}</Typography>,
  li: ({ children }) => <Typography component="li" variant="body1" sx={{ lineHeight: 1.8 }}>{children}</Typography>,
  ul: ({ children }) => <Box component="ul" sx={{ pl: 3, mb: 2 }}>{children}</Box>,
  ol: ({ children }) => <Box component="ol" sx={{ pl: 3, mb: 2 }}>{children}</Box>,
  code: ({ children }) => (
    <Box component="code" sx={{ bgcolor: 'action.hover', px: 0.75, py: 0.25, borderRadius: 1, fontFamily: 'monospace', fontSize: '0.875em' }}>
      {children}
    </Box>
  ),
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

      <ReactMarkdown components={markdownComponents} remarkPlugins={[remarkBreaks]}>
        {post.content}
      </ReactMarkdown>
    </Container>
  )
}