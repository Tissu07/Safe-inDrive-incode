import './index.css'
import './App.css';
import Message from './component/Message';
import Home from './component/Home';
import UserState from './Context/UserState';
import Number from './component/Number';
import RideAvailable from './component/RideAvailable';
import Onway from './component/Onway';
import Final from './component/Final';
import Over from './component/Over';
import Mode from './component/Mode'
import InDrive from './component/InDrive';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";


import Destination from './component/Destination';



function App() {
  return (
    <div className=''>
      <UserState >
        <Router>


          <Routes>
            {/* <Message/> */}
            
            <Route exact path = '/' element={<Home/>} />
            <Route exact path = '/mode' element={<Mode/>} />
            <Route exact path = '/inDrive' element={<InDrive/>} />
            <Route exact path = '/number' element={<Number/>} />
            <Route exact path = '/destination' element={<Destination/>} />
            <Route exact path = '/rideAvailable' element={<RideAvailable/>} />
            <Route exact path = '/onway' element={<Onway/>} />
            <Route exact path = '/final' element={<Final/>} />
            <Route exact path = '/over' element={<Over/>} />
          

           


          </Routes>


        </Router>
      </UserState>
    </div>
  );
}

export default App;
