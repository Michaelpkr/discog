
export default function Day5() {
  return (
      <div>
        <p>Today, I'll be learning about what the controller is, and why it's important to the application.</p>
          <p>Specifically, this the ArtistController. It provides an endpoint, that allows the frontend to interface with the backend. This is the bridge.</p>
          <p>When I make a button in the frontend, I will actually be pointing it at the Controller.</p>
          <p>It doesn't house any logic, it just calls the service (which does house logic), and says "do the thing".</p>
          <p>The reason why all of these pieces and parts exist and live separately from each other, comes down to one thing: resilience.</p>
          <p>When I first heard the idea of all of these components existing separately and dividing up responsibilities as granularly as they do, I thought it was overkill.</p>
          <p>But what would happen if I wanted to call Tidal, instead of Spotify?</p>
          <p>Because this is structured the way that it is, I would never have to touch the controller for that change.</p>
          <p>Everything is loosely coupled, rather than tightly coupled. The best way to explain this, is cell phones.</p>
          <p>In the early to mid 2000s, it was super simple to remove the plastic backing off of a cell phone, and replace your battery. It was a push of a button.</p>
          <p>In contrast, the modern iPhone, has a very tightly coupled battery to the rest of the design of the phone. It takes specialized tools just to replace it.</p>
          <p>Which phone is easier to maintain? The battery, at some point, will deteriorate. Code, similarly will deteriorate.</p>
          <p>I would much rather work on one, or two, cleanly separated modules, rather than a tangled mess of interdependent code.</p>
          <p>That's why these files exist. To keep the application organized, and easier to maintain.</p>
          <p>To repeat it all back (so that I selfishly can feel that I've learned something worthwhile):</p>
          <ul>
              <li>
                  <p><strong>The Service</strong></p>
                  <p>This houses all of the intricate logic in your application. In this instance it's where we're saying "only get 10 random artists".</p>
              </li>
              <li>
                  <p><strong>The Controller</strong></p>
                  <p>This is where the endpoints for the backend are defined. The frontend can call those endpoints, the controller tells the service to go get the requested information, and it is then delivered to the frontend. I often think of this as an air traffic controller, or a triage desk at a hospital.</p>
              </li>
              <li>
                  <p><strong>The Client</strong></p>
                  <p>This is how this application communicates with other APIs. In this instance, it's Spotify. We have individual API calls, along with their required parameters. We know that if the Client is up-to-date with Spotify's API documentation, the rest of our application will be able to interface with Spotify without any issue. I think of this as the international ambassador, who keeps up with all important foreign relations.</p>
              </li>
          </ul>
          <p>I don't entirely know where to channel my learning from here. I do feel like I have a lot stronger of a grasp on why everything exists within the application, and may feel confident enough to start picking it back up and adding functionality. I think tomorrow night, I'll work on getting an individual artist, or getting 10 random artists. That would require new logic in the ArtistService (it already grabs 10 random artists), and then a new endpoint in the controller, so the frontend would have something unique to point to.</p>
          <p>Easy enough in theory. Let's see how reality is.</p>
          <p>Michael</p>
      </div>
  )
}