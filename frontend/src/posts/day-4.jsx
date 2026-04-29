
export default function Day4() {
  return (
      <div>
         <p>It's been a little bit since I've posted anything, or changed anything on this application.</p>
         <p>I lost traction. I got so hung up on making the application, that I forgot that I was supposed to be actually learning.</p>
         <p>I fell into the trap of asking AI to clean up my mess, and before I knew it, I didn't know what I was even writing anymore. I was simply following commands by something that didn't possess intelligence of its own.</p>
         <p>I don't think that's how this whole learning thing is supposed to go.</p>
         <p>So I'm restarting. I'm not deleting any code, but I'm retracing my steps, and writing out why every file exists, what it does, and why it's important.</p>
         <p>I had a thought earlier about how non-linear making an application feels. Everything seems to consume or reference everything else, and it can be become a bit of an Ouroboros. That being said, my plan tonight was to retrace my steps, and write out everything, but linear and verbose to a comical extent.</p>
         <p>Where I've really been struggling, is trying to understand why Client, Service, and Controller exist, and what individual roles they play in the makeup of the application. I'm starting to get there, and you can see some of the understanding in the text below.</p>
         <hr/>
         <p>I want to get information about Artists from Spotify.</p>
         <p>Spotify has an API that can give me that information.</p>
         <p>However, I can't just call that API for that information. I need to get a "token" from Spotify to in order to use their API.</p>
         <p>To do that, I need to call Spotify's API that gives tokens. It's called https://accounts.spotify.com/api/token.</p>
         <p>This will take a lot of effort to set up every single time. If I make a file that houses all the boilerplate code, it would be way easier.</p>
         <p>I'll make a file in my own application that will talk to Spotify's token API, whenever I ask it to. That type of file is called a Client. I'll call it SpotifyAuthorizationClient.</p>
         <p>All it does, is it call https://accounts.spotify/api/token, and it provides the two things Spotify asks for: Authorization, and grant_type.</p>
         <p>I already got the Authorization code from Spotify themselves. It's just a long string of characters that Spotify themselves generated.</p>
         <p>grant_type, is just the type of credentials I'm trying to attain. The grant_type I need is called "client_credentials".</p>
         <p>When I talk to Spotify, and get information back, it comes back in just a big blob of text called JSON. My application wouldn't know what to do with it as is, so it would be far more helpful, if I could take that blob, and organize it first. I handle that organization by creating a Java class.</p>
         <p>That Java class maps the data it receives back from Spotify, into an object that my application can better handle. It's predictable, and I can write code around manipulating that predictable shape.</p>
         <p>That class is called SpotifyTokenResponse, because we're organizing the response we got back from Spotify's Token API. It contains three pieces of information: access_token, token_type, and expires_in.</p>
         <p>I now have a way for my application to talk to Spotify Token API (client), and a predictable shape in which I'm expecting the token data (class). I now some sort of a signal to kick off the request to Spotify to get the token. I can house that more complex logic in a file called SpotifyTokenService. Any tasks related to tokens and Spotify, can be housed here.</p>
         <p>I've created a method (a tool used to complete a task) called getAccessToken. Every time my application says getAccessToken(), the logic in this file will run. That logic is basically just "Here's my Spotify Authorization code, this is my grant_type, please give me my token."</p>
         <p>I store that token so that my application can use it when it needs to, I do that using a variable called cachedToken.</p>
         <hr/>
         <p>That's where I'm leaving off tonight, and I hope to pick this back up, and continue until I'm talking through creating the controller, and accessing it through the frontend.</p>
         <p>Michael</p>
      </div>
  )
}