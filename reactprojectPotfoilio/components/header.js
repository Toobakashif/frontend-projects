import React from "react";

export default function Header() {
  return (
    <header>
    <div className="img"></div>
    <section>
    <h1>Tooba Kashif</h1>
    <span>Frontend Developer</span>
    <span className="web">github.com/Toobakashif</span>
    <div className="button_container">
    <a href="mailto:Toobakashifawan@gmail.com?subject=Hello&body=I saw your Portfolio!" className="email-btn"><img src="img/logo-Email.svg" alt="Linkedin Icon"/><span>Email</span></a>
    <a href="https://www.linkedin.com/in/tooba-kashif-906407205/" target="_blank"  className="linkedin-btn"><img src="img/Logo-Linkedin.svg" alt="Linkedin Icon"/><span>Linkedin</span></a>
    </div>
    </section>
    </header>
  )
}
