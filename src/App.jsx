import React, { useState } from "react";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Home from "./Pages/Home";
import Services from "./Pages/Services";
import FilterModal from "./Components/FilterModal/FilterModal";
import LoginModal from "./Components/LoginRegister/LoginModal";
import ForgotPassword from "./Components/LoginRegister/ForgotPassword";

const App = () => {
    const [modalShown, setModalShown] = useState(false);
    const [modalLogin, setModalLogin] = useState(false);
    const [modalForgotPassword, setModalForgotPassword] = useState(false);

    return (
        <BrowserRouter>
            {modalShown && (
                <FilterModal
                    onClose={() => {
                        setModalShown(false);
                    }}
                />
            )}

            <Header
                onLogin={() => {
                    setModalLogin(true);
                }}
            />

            {modalLogin && (
                <LoginModal
                    onForgot={() => {
                        setModalForgotPassword(true);
                    }}
                    onClose={() => {
                        setModalLogin(false);
                    }}
                />
            )}

            {modalForgotPassword && (
                <ForgotPassword
                    onClose={() => {
                        setModalForgotPassword(false);
                    }}
                />
            )}

            <Routes>
                <Route
                    path="/"
                    element={
                        <Home
                            onFilterModal={() => {
                                setModalShown(true);
                            }}
                        />
                    }
                />
                <Route path="/about" element={<About />} />
                <Route path="/services" element={<Services />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    );
};

export default App;
