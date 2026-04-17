
export default function Day3() {
  return (
      <div>
         <h1>Tonight the backend actually worked.</h1>
         <h2>After a lot of things that didn't.</h2>
         <p>Fair warning — like last time, this is AI assisted. I asked Claude to write it based on what we worked through tonight. It's gotten pretty good at the sign-off.</p>
         <p>The goal was to finish what I started on day 2: take the token service I built, wire it to a real Spotify search, filter the results down to obscure artists, and expose an endpoint the frontend could eventually call. Simple enough on paper.</p>
         <h2>The first wall</h2>
         <p>The very first request I made to Spotify's auth endpoint came back with a 411: Length Required. That's an HTTP error that basically means "you sent a request with no body length, and I won't accept it." Feign — the library I'm using to make HTTP calls — wasn't attaching a Content-Length header automatically.</p>
         <p>The fix was changing how I was passing the form body. Instead of a single string field, I needed to pass a MultiValueMap, which is Java's way of representing form data. Once I did that, Spotify could see the body, and the 411 went away.</p>
         <p>Then I got a 400: Invalid Client.</p>
         <p>My credentials were correct. I triple checked. Turns out IntelliJ had been wrapping the environment variable values in extra quotes in the run configuration. So instead of sending my actual client ID, it was sending "my-actual-client-id" — with the quotes baked in. Removed the quotes, and suddenly I had a token.</p>
         <h2>The second wall</h2>
         <p>With the token working, I moved on to the search. Built the DTOs — the Java classes that map Spotify's JSON response into objects I can work with — and got the search calling correctly. Artists were coming back.</p>
         <p>Except every popularity value was null.</p>
         <p>I tried filtering by follower count instead. Also null. I added debug logging to print the raw JSON Spotify was actually sending back, and that's when I found out: Spotify's search endpoint doesn't return popularity or follower count. At all. Those fields just aren't in the response.</p>
         <p>This is something nobody warns you about when you start working with third-party APIs. The documentation shows you what a full object looks like. It doesn't always tell you which endpoints give you the full object and which give you a stripped-down version.</p>
         <h2>The fix</h2>
         <p>Spotify has a separate endpoint — /v1/artists/{id} — that returns the full artist object. So I added a second API call: for each artist from the search, fetch their full details individually. That meant ten separate requests instead of one, but it was the only way to get the data I needed.</p>
         <p>Except even that didn't give me popularity. The raw JSON from the individual artist endpoint also came back without it. I'm still not sure why — it might be a limitation of the client credentials flow, or something Spotify changed recently. It's a known issue I'm leaving for later.</p>
         <p>For now, the endpoint filters by whether an artist has images, which at least confirms they're a real artist with some presence on Spotify. It's not the obscurity filter I wanted, but the data's flowing, the endpoint works, and I have something to build the frontend on.</p>
         <h2>What I learned</h2>
         <p>Third-party APIs will humble you. The docs show you the happy path. Reality is messier — missing fields, undocumented limitations, credentials that look right but aren't.</p>
         <p>Also: when something isn't mapping correctly in Java, print the raw response before you spend an hour assuming it's your code. Nine times out of ten, the data you're expecting just isn't there.</p>
         <h2>What's next</h2>
         <p>The backend is done for now. Next session I wire up the frontend — a search bar, a list of artists, their images. The stuff you can actually see.</p>
         <p>Finally.</p>
         <p>Michael.</p>
      </div>
  )
}