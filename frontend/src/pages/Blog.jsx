import { Link as RouterLink } from 'react-router-dom'
import {
  Box,
  Card,
  CardContent,
  CardActionArea,
  Container,
  TypogDoraphy,
  Divider,
} from '@mui/material'
import posts from '../data/posts'

function formatDate(dateStr) {
  return new Date(dateStr).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'UTC',
  })
}

export default function Blog() {
  const sorted = [...posts].sort((a, b) => new Date(b.date) - new Date(a.date))

  return (
    <Container maxWidth="md" sx={{ py: 6 }}>
      <Typography variant="h3" fontWeight={600} gutterBottom>
        Dev Log
      </Typography>
      <Typography variant="body1" color="text.secondary" mb={4}>
        Weekly notes on what I'm building and what I'm learning.
      </Typography>
      <Divider sx={{ mb: 4 }} />

      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
        {sorted.map((post) => (
          <Card key={post.id} variant="outlined">
            <CardActionArea component={RouterLink} to={`/blog/${post.id}`}>
              <CardContent sx={{ p: 3 }}>
                <Typography variant="caption" color="text.secondary">
                  {formatDate(post.date)}
                </Typography>
                <Typography variant="h5" fontWeight={500} mt={0.5} mb={1}>
                  {post.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {post.summary}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      </Box>
    </Container>
  )
}