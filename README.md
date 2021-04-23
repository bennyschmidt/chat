## Install & Run

-----

### MongoDB

**Prerequisites:**

- Mongo needs Xcode 12.3 (or Command Line Tools 12.3 beta)

**Install mongo:**

`brew tap mongodb/brew`

**Install database tools:**

`brew install mongodb-community@4.4`

**Start local database:**

`brew services start mongodb-community@4.4`

-----

### Server

`cd server`

`npm i`

`npm start`

-----

### Client

`cd client`

`npm i`

`npm start`

#### To run the frontend test with 100k messages

`cd client`

`npm test`

-----

Notes: use Node 14+ 
