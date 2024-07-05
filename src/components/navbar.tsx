
export default function NavBar() {
  return (
    <header id="header" className="d-flex flex-column justify-content-center">
      <nav id="navbar" className="navbar nav-menu">
        <ul>
          <li><a href="#hero" className="nav-link scrollto active"><img src="https://api.iconify.design/material-symbols:home-outline-rounded.svg?color=%23888888" alt="Home" className="h-6 w-6" /><span>Home</span></a></li>
          <li><a href="#about" className="nav-link scrollto"><img src="https://api.iconify.design/ic:baseline-woman.svg?color=%23888888" alt="about"  className="h-6 w-6" /> <span>About</span></a></li>
          <li><a href="#resume" className="nav-link scrollto"><img src="https://api.iconify.design/material-symbols:file-copy-outline.svg?color=%23888888" alt="resume" className="h-6 w-6"/><span>Resume</span></a></li>
          <li><a href="#portfolio" className="nav-link scrollto"><img src="https://api.iconify.design/material-symbols:menu-book-outline-sharp.svg?color=%23888888" alt="portfolio" className="h-6 w-6"  /><span>Portfolio</span></a></li>
          <li><a href="#services" className="nav-link scrollto"><img src="https://api.iconify.design/material-symbols:view-list.svg?color=%23888888" alt="service" className="h-6 w-6"/> <span>Services</span></a></li>
          <li><a href="#contact" className="nav-link scrollto"> <img src="https://api.iconify.design/material-symbols:contact-phone-outline-sharp.svg?color=%23888888" alt="contact" className="h-6 w-6" /> <span>Contact</span></a></li>
        </ul>
      </nav>
    </header>
  );
}

