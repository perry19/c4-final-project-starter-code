// TODO: Once your application is deployed, copy an API id here so that the frontend could interact with it
const apiId = '54sooggqk0'
export const apiEndpoint = `https://${apiId}.execute-api.us-east-1.amazonaws.com/dev`

export const authConfig = {
  // TODO: Create an Auth0 application and copy values from it into this map. For example:
  // domain: 'dev-nd9990-p4.us.auth0.com',
  domain: 'dev-z7dha2gw8gn2nll7.us.auth0.com',            // Auth0 domain
  clientId: 'cc8o1ClMj02j08UlZ9ZixLuD2ygC36Sm',          // Auth0 client id
  callbackUrl: 'http://localhost:3000/callback'
}
