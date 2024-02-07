<div align="center">
  <h1><strong>Node GraphQL Server with Apollo Server</strong></h1>
</div>

<p align="center">This repository contains a simple Node.js project that implements a GraphQL server using Apollo Server. Follow the steps below to set up and run the server.</p>

<h2><strong>Getting Started</strong></h2>

<ol>
  <li><strong>Create a Node.js project:</strong></li>
  <code>npm init -y</code>

  <li><strong>Install dependencies:</strong></li>
  <ul>
    <li>Apollo Server: <code>npm install apollo-server</code></li>
    <li>GraphQL: <code>npm install graphql</code></li>
    <li>Nodemon (optional, for auto-restarting the server during development): <code>npm install nodemon --save-dev</code></li>
  </ul>

  <li><strong>Set up the server:</strong></li>
  <p>Create a <code>server.js</code> file.</p>

  <li><strong>Create the schema:</strong></li>
  <ul>
    <li>Create a <code>schema</code> folder.</li>
    <li>Inside the <code>schema</code> folder, create <code>type-defs.js</code> and <code>resolvers.js</code>.</li>
  </ul>

  <li><strong>Define GraphQL types and resolvers:</strong></li>
  <ul>
    <li>Define your GraphQL types in <code>type-defs.js</code>.</li>
    <li>Implement resolver functions in <code>resolvers.js</code>.</li>
  </ul>

  <li><strong>Create fake data:</strong></li>
  <p>Generate fake data for users.</p>

  <li><strong>Run the server:</strong></li>
  <code>npm start</code>
</ol>

<h2><strong>Testing GraphQL Queries</strong></h2>

<p>You can test your GraphQL queries using GraphQL Playground.</p>

<ol>
  <li>Run the server:</li>
  <code>npm start</code>

  <li>Open GraphQL Playground in your browser (by default, it's available at <code>http://localhost:4000</code>).</li>

  <li>Test the <code>getAllUsers</code> query:</li>
  <pre>
  <code>query GetAllUsers {
      users {
          name
          id
          nationality
          # You can add other fields defined in the schema
      }
  }</code>
  </pre>
</ol>
