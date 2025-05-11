This is a template for you guys to try and make a beautiful <q><b>eventer</b></q> out of it..Have fun and add functionality<hr />
No libraries used <hr />
<b>So I used Temporal Polyfill for this task and i learned quite a few things and i'm gonna share it here incase someone get's bored reading through those 10000 lines of instructions </b>
<h2>Temporal solves the hectic work of getting months in a day which is gonna save you 10 minutes and crazy </h2><hr />
<h3>Temporal.Duration</h3>
<li>Always use ISO dates</li>
<li>Get a range error? slap a <q>{relativeTo:<>}</q> onto it</li>
<h3>Temporal.Instant</h3>
<li>For precise points in time</li>
<li>You are gonna be using this the most..convert it to ISO and you are golden</li>
<li>Temporal.Instant.since() does  this-other and the counterpart Temporal.Instant.until does otherwise.</li>
<li>Temporal.Plaindate is meant to be studied on your own</li>
<li><b>Bear with me cuz it's my first time</b></li>
<h1>Everyone should really adapt to it as it is gonna replace Date() constructor soon</h1>