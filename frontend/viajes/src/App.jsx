import {Route, Routes} from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import NavBar from './components/NavBar'
import Footer from './components/Footer';
 

function App() {

  return (
      <> 
       <NavBar />
       <Routes>
        
        <Route path="/" element={<Home />} />
       </Routes>
       <Footer></Footer>
     </>
  );
}

export default App;
