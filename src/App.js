import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import HomeScreen from './pages/home/HomeScreen';
import RoomDetailsScreen from './pages/room-details/RoomDetailsScreen';
import RoomSearchScreen from './pages/room/RoomSearchScreen';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<HomeScreen />} />
        <Route path='/search' element={<RoomSearchScreen />} />
        <Route path='/search/:room' element={<RoomDetailsScreen />} />
      </Routes>
    </Router>
  );
}

export default App;
