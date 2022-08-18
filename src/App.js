// import './App.css';
import { BrowserRouter , Routes , Route} from 'react-router-dom';
import Home from '../src/pages/home/Home';
import List from '../src/pages/list/List';
import Hotel from '../src/pages/hotel/Hotel';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/'  element={<Home/>} />
        <Route path='/hotels' element={<List/>} />
        <Route path='/hotel/id' element={<Hotel/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
