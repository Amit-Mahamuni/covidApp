import './App.css';
import { Container, Navbar } from "react-bootstrap";
import SearchFrm from './Components/SearchFrm';
function App() {
  return (
    <div className="mb-5">
      <Navbar bg="light" className="bg-white shadow mb-3">
        <Container>
          <Navbar.Brand href="#">COVID</Navbar.Brand>
        </Container>
      </Navbar>
      <Container >
        <SearchFrm />
      </Container>  
    </div>
  );
}

export default App;
