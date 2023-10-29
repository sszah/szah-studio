import '../styles/index.css';

import {Route, Routes} from 'react-router-dom'
import Main from '../components/Main'
import Admin from '../components/Admin';
import Crud from '../components/Crud'

function App() {
  return (
    <>
      

      <Routes>
            <Route path='/' element={<Main/>}></Route>
            <Route path='/admin' element={<Admin/>}> </Route>
            <Route path='/crud' element = {<Crud/>}></Route>
      </Routes>
          
        
        
    </>
  );
}

export default App;
