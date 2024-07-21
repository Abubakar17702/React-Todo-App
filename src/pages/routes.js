import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./register/Register";
import LogIn from './login/LogIn';
import NotFound from './notfound/NotFound';
import Footer from '../components/footer';
import Header from '../components/header';
import Combined from "./Main_page/Combined";
import Users from './Main_page/Users';
import Todos from './Main_page/Todos';
import ForgotPassword from './ForgotPassword/ForgotPassword'

const Index = () => {
  return (
    <BrowserRouter>
    <Header />
    <main>
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="*" element={<NotFound />} />
        <Route path='/combined' element={<Combined />} />
        <Route path='/users' element={<Users />}/>
        <Route path='/todos' element={<Todos />}/>
        <Route path='/ForgotPassword' element={<ForgotPassword />} />
      </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
};

export default Index;