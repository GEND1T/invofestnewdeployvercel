import Copetition from "./pages/Competition";
import HomePage from "./pages/HomePage_backup"
import LoginForm from "./pages/LoginForm";
import RegisterEvent from "./pages/RegisterEvent";
import Seminar from "./pages/Seminar";
import Talkshow from "./pages/Talkshow";
import Workshop from "./pages/Workshop";



import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import AuthLayout from "./layouts/AuthLayout";
import RegisterForm from "./pages/RegisterForm";


function App() {

  return (
    <BrowserRouter>
      <Routes>

        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/Competition" element={<Copetition />} />
          <Route path="/Seminar" element={<Seminar />} />
          <Route path="/Workshop" element={<Workshop />} />
          <Route path="/Talkshow" element={<Talkshow />} />
        </Route>


        <Route element={<AuthLayout/>}>
          <Route path="/login" element={<LoginForm />} />
          <Route path="/register" element={<RegisterForm />} />
          <Route path="/register/event" element={<RegisterEvent />} />

        </Route>


      </Routes>
    </BrowserRouter>


  );


}

export default App;
