import "./App.css";
import { Route, Routes, useLocation, BrowserRouter } from "react-router-dom";
import PersonalInfoForm from "./components/PersonalInfoForm.js";
import MobileMultiStepForm from "./Mobile/MultiForm.js";
import DesktopMultiStepForm from "./components/MultiStepForm.js";
import Box from "@mui/material/Box";

import { store } from "./store";
import { Provider } from "react-redux";

function App() {
  return (
    <>
      <Provider store={store}>
        <Box sx={{
          display: {
            md:'none'
          }
        }}>
          <MobileMultiStepForm />
        </Box>
        <Box sx={{
          display: {
            xs:'none',
            md:'block'
          }
        }}>
          <DesktopMultiStepForm />
        </Box>
      </Provider>
    </>
  );
}

export default App;
