import './App.css';
import Body from './component/Body/Body';
import Header from './component/Header/Header';
import Navbar from './component/Navbar/Navbar';

function App() {
  return (
    <div className="app">
      <Header />
      <Navbar />
      <Body />
    </div>
  );
}

export default App;
