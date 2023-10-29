import '../styles/index.css';

import {Route, Routes} from 'react-router-dom'
import Main from '../components/Main'
import Admin from '../components/Admin';


function App() {
  return (
    <>
      

      <Routes>
            <Route path='/' element={<Main/>}></Route>
            <Route path='/admin' element={<Admin/>}> </Route>
      </Routes>
          
        
        
    </>
  );
}

export default App;
