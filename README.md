# Launch project locally

In the project directory, you need to run in the terminal:

### `npm i`

After successful installation of all depencies you need to run:

### `npm start`

This command will launch the project on localhost:3000 in a new tab of your
browser. 
Please make sure that you have all necessary environment variables in `.env` file (just let me know if there are any issues).

# What was done within this task:
1. There are 5 integrated endpoints (GET, POST, GET by Id, PUT and DELETE) 
for `/documents` API.

So, with this FE app it's possible to gel all documents for the client,
create new document, get document by document id, update document and delete document.

2. All security sensitive data is stored in environment variables (`.env` file).

3. A sample unit test for `DocumentsList` component was added with mocked API request.
In order to launch unit-test execute `npm test` command in terminal.

4. From external libraries I installed only minimum necessary libs: 
`React testing library`, `http-proxy-middleware` to handle CORS issues and `react-router-dom`.

# Points for improvements:
1. Adding css preprocessors, such as `sass` in order to have css nesting, mixins etc.
2. Adding `React Query` for more convenient handling client-server async logic.
3. Adding error handling, especially for network errors.
4. Adding some modals with confirmation messages, especially for such as `Delete document` button 
in order to avoid accidental user actions.
5. Also considering atomic architecture for better scalability - atoms, molecules
and organisms.


