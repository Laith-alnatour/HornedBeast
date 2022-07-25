import Header from './components/headers';
import Footer from './components/footers';
import Main from './components/Main';
import NavBar from './components/NavBar';
import './App.css';



function App() {
  return (
    <div className="App">
      <div>
        <NavBar />
      </div>
      <div>
        <Header />
      </div>
      <div>
        <Main />
      </div>
      <div className='footer'>
        <Footer />
      </div>
    </div>
  );
}

export default App;