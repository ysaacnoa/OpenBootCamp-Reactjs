import logo from './logo.svg';
import './App.css';
import GreetingFunctional from './components/pure/greetingFunctional';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <GreetingFunctional
        name="Ysaac"
        />
      </header>
    </div>
  );
}

export default App;
