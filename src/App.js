import React from 'react';
import "./app.css";

import { Brand, CTA, Navbar } from "./components";
import { Blog, Features, Footer, Header, Possibility, WhatGPT3 } from "./containers";

const App = () => {
    return (
        <div className='App'>
            <div className='gradiant__bg'>
                <Navbar />
                <Header />
            </div>
            <Brand />
            <WhatGPT3 />
            <Features />
            <Possibility />
            <CTA />
            <Blog />
            <Footer />
        </div>
    );
};

export default App;