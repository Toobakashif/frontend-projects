import React from "react";
import Header from "./components/header"
import Section_about from "./components/Section_about"
import Section_interest from "./components/Section_interest"
import Footer from "./components/Footer"

export default function App() {
  return (
    <div className="container">
     <Header/>
     <Section_about/>
     <Section_interest/>
     <Footer/>
    </div>
  )
}
