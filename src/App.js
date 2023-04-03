import logo from './logo.svg';
import './App.css';
import { Route, Routes, useLocation } from "react-router-dom";
import PersonalInfo from './Components/PersonalInfo';
import MultiForm from './Components/MultiForm';


function App() {
  return (
   <>
    <Routes>
            <Route path="/" element={<MultiForm />} />
    </Routes>
  </>
  );
}

export default App;

