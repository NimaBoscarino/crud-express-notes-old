# W2D3

# CRUD with Express

REPO: https://github.com/NimaBoscarino/crud-express-notes

What's this week about?

  - Server side web app code
  - Client-server code and how they interact (HTTP)
  - HTTP request handling (GET, POST, routes)
  - Are we learning all of "Full Stack Web Dev" this week?
    - **No, not entirely**
    - Not covering Client-side much (CSS, HTML, JS)
    - Not covering Databases (persisting data properly)

## Review from Yesterday

- _What is HTTP?_
  - A resource based protocol
    - Dealing with resources or "documents" like html, css, js, etc.
  - Client-server communication (Networking)
  - A Text-based protocol
    - We see the metadata and data in curl or our DevTools->Network tab.
  - A stateless protocol
    - Transactional. Doesn't really care about you
  - A Protocol implemented overtop TCP
  - HTTP Verbs aka HTTP methods (GET / POST)
  - HTTP Status codes
    - So that both sides understand each other about how things went (good, bad, ugly, nightmare?)

- _What is Express?_ 
  - Just a library that helps us write web servers in a more easier way than using `http.createServer` directly. Express uses `http` behind the scenes for us. 

- _What is Middleware?_
  - A functional approach to HTTP servers. 
  - "Pipe" the request through a series of callback functions (in a particular) order. These functions are registered using `app.use`. 
    - _Note: This is not the most accurate description but it's close. This is what you need to know 
  - Examples of middleware include things like `body-parser`, `morgan`, and many many others.
  - Express is very minimal, and expects you to use these middleware based "plugins" (if you will), to create real-world webapps. 


## DEMO

We implemented a CRUD app to store Netflix shows.

### Morgan: Server-side Logging 

I introduced the idea of using [morgan](https://github.com/expressjs/morgan) for logging. Please add it to your TinyApp.

### POST requests: Render vs Redirect

I didn't really touch on this, but a good convention is to have a POST response redirect on success, and render on failure.

You can add some data validation (e.g. `showName !=== ""` to see if the name exists or not when creating a new show) in order to showcase when we render an error page vs redirect.

If we rendered on success, then the user could _refresh to resubmit_ the form. This is not "expected behavior", right?

### Form Data (URL Encoded String)

We talked about how form params actually make their way up as a "URL Encoded" string. 

![](https://d.pr/i/wjYmNi+) <https://d.pr/i/wjYmNi>

Instead of having to split this string ourselves, we leverage a npm module called `body-parser`. It turns this into a nice k/v object for us in `req.body`.

### ASIDE:

> Q: How does the (req, res) callback work exactly?

- `app.get` is calling our callback function by passing in two big objects in the appropriate order. The Express dev decided that this is how they want to have you interact with their Express library.
- the 1st param is the request details (after parsing the HTTP request text data). It's an object with a bunch of properties.
  - Some of those properties are set by middleware and not directly by Express. An example of this is `req.body` which is set by the _body-parser_ middleware.
- the 2nd is an object to help us handle the request. It's mainly a collection of methods

Pseudocode of how app.get calls our callback.

```js
callback( // call the callback
  { // <<= req object
    body: {
      sweetness: '',
      name:      '',
      ...
    },
    ...
  },
  {  // <= res object
    send: function(),
    render: function(),
    redirect: function(),
    ...
  }
)
```