import './css/App.min.css';
import Navbar from './components/Navbar';
import Carousel from './components/Carousel';

function App() {
  return (
    <div className="App">
      <div className='home-screen'>
        <div className='Navbar'>
          <Navbar/>
        </div>
        <div className=''>
          <Carousel/>


        </div>
      </div>
    </div>
  );
}

export default App;
