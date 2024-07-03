# NVS (Node Vanilla Server)

NVS is an experimental project aimed at creating a web server using vanilla Node.js. The goal is to write endpoint logic as simple scripts within a special context. Future plans include creating a user context upon login, ensuring that all requests operate within an isolated sandbox specific to the user.

## Features Implemented
- Loading files from the file system and checking for non-existence.
- TypeScript types for API and library (lib/fileRunner).
- Running scripts within an isolated sandbox.

## TODO
- Create a reusable user context for each user request.
- Display a list of possible status codes for each endpoint.
- Show a list of potential errors that each method can throw.
