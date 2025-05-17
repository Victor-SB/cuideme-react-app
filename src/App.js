import './App.css';
import Brand from './components/Brand';
import LoginForm from './components/LoginForm';
import Ellipse from "./Images/ellipse.svg";

function App() {
  return (
    <>
      <img 
      src={Ellipse}
      alt="ellipse"
      style={{ position: "absolute", top: 0, right: 0 }}
      />
      <div className="App">
        <Brand />
        <LoginForm />
      </div>;
      <img
        src={Ellipse}
        alt="ellipse"
        style={{position: "absolute", bottom: 0, left: 0, transform: "rotate(180deg)"}}
      />
    </>
  );
}

export default App;
