import "./App.css";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import UsersData from "./UsersData";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import HomePage from "./HomePage";
import MovieData from "./MovieData";

const URI = process.env.REACT_APP_URI;

function App() {
  const client = new ApolloClient({
    cache: new InMemoryCache(),
    uri: URI,
  });

  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="App">
          <Navbar bg="dark" data-bs-theme="dark">
            <Container>
              <Navbar.Brand href="#home">Navbar</Navbar.Brand>
              <Nav className="me-auto">
                <Nav.Link href="#">
                  {" "}
                  <Link to="/" className="text-decoration-none text-white">
                    {" "}
                    Home{" "}
                  </Link>{" "}
                </Nav.Link>
                <Nav.Link href="#">
                  {" "}
                  <Link to="/users" className="text-decoration-none text-white">
                    {" "}
                    Users{" "}
                  </Link>{" "}
                </Nav.Link>
                <Nav.Link href="#">
                  {" "}
                  <Link
                    to="/movies"
                    className="text-decoration-none text-white"
                  >
                    {" "}
                    Movies{" "}
                  </Link>{" "}
                </Nav.Link>
              </Nav>
            </Container>
          </Navbar>

          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/users" element={<UsersData />} />
            <Route path="/movies" element={<MovieData />} />
          </Routes>
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
