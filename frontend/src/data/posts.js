import day1 from '../posts/day-1.jsx'
import day2 from '../posts/day-2.jsx'
import day3 from '../posts/day-3.jsx'
import day4 from '../posts/day-4.jsx'
import day5 from '../posts/day-5.jsx'
import day6 from '../posts/day-6.jsx'

const posts = [
  {
    id: 1,
    title: "Day 1",
    date: "2026-04-13",
    summary: "Setting up the environment.",
    content: day1,
  },
  {
    id: 2,
    title: "Day 2",
    date: "2026-04-14",
    summary: "Trying to call Spotify.",
    content: day2,
  },
  {
    id: 3,
    title: "Day 3",
    date: "2026-04-16",
    summary: "The backend actually worked. After a lot of things that didn't.",
    content: day3,
  },
  {
    id: 4,
    title: "Day 4",
    date: "2026-04-28",
    summary: "Let's back up.",
    content: day4,
  },
  {
    id: 5,
    title: "Day 5",
    date: "2026-05-04",
    summary: "Continuing through the Controller and into the frontend.",
    content: day5,
  },
  {
    id: 6,
    title: "Day 6",
    date: "2026-05-11",
    summary: "CORS errors, type bugs, and finding the limits of Spotify's API.",
    content: day6,
  },
]

export default posts
