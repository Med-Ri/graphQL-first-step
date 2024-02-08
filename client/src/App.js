import "./App.css";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import DisplayData from "./DisplayData";

const URI = process.env.REACT_APP_URI

function App() {
  const client = new ApolloClient({
    cache: new InMemoryCache(),
    uri: URI,
  });
  
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <h1> List of users </h1>
        <DisplayData/>
      </div>
    </ApolloProvider>
  );
}

export default App;
