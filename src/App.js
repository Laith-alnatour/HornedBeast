import Header from './headers';
import Footer from './footers';
import Main from './Main';


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