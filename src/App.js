import './App.css';
import React from "react";
// import banner from './assets/images/Banner2025.png'
import FAQ from "./components/FAQ/faq";
import About from "./components/About/About";
// import Schedule from "./components/Schedule/Schedule";
// import Sponsors from "./components/Sponsors/Sponsors";
import Footer from "./components/Footer/Footer";
import Banner from "./components/Banner/Banner";
import Navbar from "./components/Navbar/Navbar";


const App = (props) => {
    return(
        <React.Fragment>
                {/*----------Navbar section----------*/}
                <Navbar/>

                {/*----------Banner section----------*/}
                <Banner/>

                {/*----------About section----------*/}
                <About/>

                {/*----------FAQ section----------*/}
                <FAQ/>

                {/*----------Schedule section----------*/}
                {/*<Schedule/>*/}

                {/*----------Sponsors.js section----------*/}
                {/*<Sponsors/>*/}

                {/*----------Footer section----------*/}
                <Footer/>


        </React.Fragment>
    )

}


export default App;
