# Week 2 Day 3

## CRUD with Express

https://en.wikipedia.org/wiki/Rubber_duck_debugging

HTTP:

- hypertext transfer protocol
- requires more instruction to use... ***
- stateless
  - has no cache, no session
  - we need to send every bit of important info
- returns in chunks
  - request library does all the chunk-mashing automatically
- GET, or some other method
  - POST, PUT, GET, DELETE, // PATCH 

CRUD

Create
Read
Update
Delete

- resources in general
  - Youtube home page:
    
    - usernames
      - videos
        - thumbnails
        - descriptions
        - video lengths
        - audio files
  - Wikipedia
    - Wikipedia article
      - references
      - pictures
      - links
      - text

C --> POST/PUT
R --> GET
U --> PUT /PATCH
D --> DELETE

Today's theme: Netflix Shows

- intro page
- song
- actors
  - many of these
- descriptions
- ratings
- episodes
- trailers
- genre

Sabrina
You
House of Cards
Bird Box
Stranger Things

## MORGAN

https://github.com/expressjs/morgan

## NODEMON

https://www.npmjs.com/package/nodemon

Note: run `nodemon -L express_server.js`, or similar.

Today we HINTED at the idea of REST (REPRESENTATIONAL STATE TRANSFER). I didn't talk about exactly what that was, but you'll find out about it fairly soon...

