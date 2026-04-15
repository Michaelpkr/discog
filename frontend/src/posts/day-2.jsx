
export default function Day2() {
  return (
      <div>
         <h1>Today I messed with the backend for the first time.</h1>
         <h2>Not nearly as terrifying as I thought. Mostly.</h2>
          <p>I'll be real, what you read below this line is AI generated. I didn't have it in me to write another long post after what I worked on tonight. I had Claude sum up everything I worked on tonight. I do find it weird how it tried to mimic my existing writing style.</p>
         <p>The goal for today was simple in concept: connect to Spotify's API through the backend so I can pull in artists with fewer than 100 followers. The execution? A little more involved.</p>
         <p>Here's the thing nobody tells you about backend development — you can't just call an API and get data back. There's a whole chain of things that have to happen first, and each link in that chain is its own file, its own class, its own set of rules.</p>
         <h2>The Chain</h2>
         <p>Before you get any data from Spotify, you have to prove you're allowed to ask for it. That means getting an access token. And before you can get a token, you need to securely store your credentials somewhere your code can reach them. And before that, you need to understand how Spring Boot actually manages objects and wires things together.</p>
         <p>It's a lot.</p>
         <p>Today I built three files, and started a fourth:</p>
         <ul>
            <li>A config class that reads my Spotify credentials out of a properties file and makes them available to the rest of the app</li>
            <li>An auth client — an interface that describes how to call Spotify's login endpoint without actually writing any of the HTTP logic myself (a library called Feign handles that part)</li>
            <li>A response class that maps Spotify's JSON response into a Java object I can actually work with</li>
            <li>The beginning of a token service that will manage fetching and caching the token so I'm not calling Spotify on every single request</li>
         </ul>
         <h2>What I actually learned today</h2>
         <p>Java is verbose. Every field needs a type, an access modifier, and a semicolon. Every class needs a package declaration. Every annotation needs to be on the exact right thing — put it in the wrong place and it does nothing, or worse, breaks everything.</p>
         <p>But I also learned that a lot of the boilerplate writes itself if you know the right annotations. @Data from Lombok generates all your getters and setters. @RequiredArgsConstructor generates your constructor. Spring handles wiring everything together as long as you tell it what things are with @Component or @Service.</p>
         <p>The mental model that helped most: annotations are just instructions to the framework. You're not writing logic, you're labeling things so Spring knows what to do with them.</p>
         <h2>What's left</h2>
         <p>I still need to finish the token service, build the actual search client, write the filtering logic, and expose an endpoint the frontend can call. Probably another session or two.</p>
         <p>But today I wrote real Java. From scratch. And it compiled.</p>
         <p>That's enough for tonight.</p>
         <p>Michael.</p>
      </div>
  )
}