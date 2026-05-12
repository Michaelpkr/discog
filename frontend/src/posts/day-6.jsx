
export default function Day6() {
  return (
      <div>
          <p>Today was pretty straightforward as far as changes went. I added a new endpoint in the controller, which allows the user to get just one individual artist.</p>
          <p>There were some growing pains there, as I forgot to change the actual URL for that endpoint in the controller, which was giving me a CORS error (which was a 404). In the frontend, I ran into typing issues (I was getting an array back, and trying to just use it as is. I learned about destructuring as a result).</p>
          <p>I got all of these individual errors resolved, and did a bit of styling updates (just in spacing, I haven't decided how this application will look. I know it currently looks like trash.</p>
          <p>I'm keeping the search by genre on the same page for now, but I think I eventually want it to be in a separate tab, like a discovery view, and for it to operate as a feed, not a search.</p>
          <p>I've found a lot of limitations with Spotify's API. They've deprecated Popularity, and follower counts as info that I can get, so I'll need to look elsewhere for this information.</p>
          <p>I found a decent replacement called SoundCharts, and they have all of the data I would want to pull for this application. Hindsight is 20/20. Do your research before you start writing code.</p>
          <p>The next time I code, I'll see about setting up a client for SoundCharts, and see how versatile/durable my code was, when I have to pull data from a new place.</p>
          <p>All of this is getting a little easier each time? I hope that's a good sign.
          </p>
          <p>Michael</p>
      </div>
  )
}