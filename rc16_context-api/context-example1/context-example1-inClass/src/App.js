import Footer from "./components/Footer";
import Navs from "./components/Navs";
import About from "./pages/About";
import Home from "./pages/Home";
import People from "./pages/People";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import PersonDetail from "./pages/PersonDetail";
import Login from "./pages/Login";
import { LoginContext } from "./context/LoginContext";

function App() {
  return (
    <LoginContext.Provider>
    <BrowserRouter>
      <Navs />
      <Routes>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="login" element={<Login />} />

        <Route path="people" element={<People />} />
        <Route path="people/:id" element={<PersonDetail />} />

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      <Footer />
    </BrowserRouter>
    </LoginContext.Provider>



  );
}

export default App;


//! Props mantığında; Dede torunun torununa harçlık verecek ama bunu doğrudan ulaştıramıyor.önce oğluna veriyor o onun oğluna uzayıp gidiyor.
//! Contextte ise şöyle düşünebiliriz; Dede bir banka hesabı açıyor childlarına torunlarına hesabı kullanma yetkisi veriyor torun artık doğrudan parayı banka hesabından alabiliyor veya banka hesabına para aktarabiliyor