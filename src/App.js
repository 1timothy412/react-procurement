import logo from './logo.svg';
import './App.css';
import {Container, CssBaseline} from "@mui/material";
import Procurement from "./components/Procurement";

function App() {
  return (
      <div className="App">
          <h1>Please add your requisition items below</h1>
        <CssBaseline />

        <Container component={Procurement} maxWidth="lg" />
      </div>
  );
}

export default App;
