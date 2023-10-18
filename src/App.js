import logo from './logo.svg';
import './App.css';
import Input from './component/Input/Input';
import Layout from './component/Layout/Layout';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <img src={logo} className="App-logo" alt="logo" />
        <Layout>
          <Input type='text'>Hello</Input>
        </Layout>
        <p> 
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React!!!
        </a>
      </header>
    </div>
  );
}

export default App;
