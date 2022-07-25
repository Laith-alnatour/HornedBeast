import Header from './components/headers';
import Footer from './components/footers';
import Main from './components/Main';


function App() {

  return (
    <div className="App">
      <div>
        <Header />
      </div>
      <div>
        <Main />
      </div>
      <br/><br/>
      <div>
        <Footer />
      </div>

    </div>
  );
}

export default App;