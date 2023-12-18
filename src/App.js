import Footer from "./components/FooterComp/Footer";
import HomePage from "./components/HomePage";
import './css/App.css'; 

const App =() => {

  return (
    <div className="app" data-test="App" >
      <body>
        <h3 className="brandLogo">Weather Forecast</h3>
        <HomePage />
      </body>
        <footer>
          <Footer/>
        </footer>
    </div>
  );
}
 
export default App;