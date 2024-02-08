import "./App.css";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

const URI = process.env.URI;

function App() {
  const client = new ApolloClient({
    cache: new InMemoryCache(),
    uri: URI,
  });
  
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <h1> List of users </h1>
      </div>
    </ApolloProvider>
  );
}

export default App;
