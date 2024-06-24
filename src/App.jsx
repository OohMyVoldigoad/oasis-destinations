import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "../src/App.css";
import Home from "./Pages/Home";
import About from './Pages/About';
import Destination from './Pages/Destination';
import News from './Pages/News';
import Pantai from './Pages/Pantai/Pantai';
import Gunung from './Pages/Gunung/Gunung';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import Descplengkun from './Pages/Pantai/Descplengkung';
import Descarjuno from './Pages/Gunung/Descarjuno';
import Desctumpaksewu from './Pages/Air Terjun/Desctumpaksewu';
import Profile from './Pages/Profile';
import Airterjun from './Pages/Air Terjun/Airterjun';
import Admindashboard from './Pages/Dashboard/Admindashboard';
import Adminkelolawisata from './Pages/Dashboard/Adminkelolawisata';
import Adminakunpengelola from './Pages/Dashboard/Adminakunpengelola';
import Admintambahwisata from './Pages/Dashboard/Admintambahwisata';
import Payment from './Pages/Payment';
import ProtectedRoute from './Components/ProtectedRoute';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/Login" element={<Login />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/" element={<Home />} />
        <Route 
          path="/About" 
          element={
            <ProtectedRoute>
              <About />
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/Destination" 
          element={
            <ProtectedRoute>
              <Destination />
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/News" 
          element={
            <ProtectedRoute>
              <News />
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/Pantai" 
          element={
            <ProtectedRoute>
              <Pantai />
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/Gunung" 
          element={
            <ProtectedRoute>
              <Gunung />
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/Airterjun" 
          element={
            <ProtectedRoute>
              <Airterjun />
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/Descplengkung" 
          element={
            <ProtectedRoute>
              <Descplengkun />
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/Descarjuno" 
          element={
            <ProtectedRoute>
              <Descarjuno />
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/Desctumpaksewu" 
          element={
            <ProtectedRoute>
              <Desctumpaksewu />
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/Profile" 
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/Admindashboard" 
          element={
            <ProtectedRoute>
              <Admindashboard />
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/Adminkelolawisata" 
          element={
            <ProtectedRoute>
              <Adminkelolawisata />
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/Adminakunpengelola" 
          element={
            <ProtectedRoute>
              <Adminakunpengelola />
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/Admintambahwisata" 
          element={
            <ProtectedRoute>
              <Admintambahwisata />
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/Payment" 
          element={
            <ProtectedRoute>
              <Payment />
            </ProtectedRoute>
          } 
        />
      </Routes>
    </Router>
  );
}

export default App;
