import TypingEffect from "../partials/typingEffect";

export default function HeroSection() {
  
  return (
    <section id="hero" className="d-flex flex-row justify-content-center bg-sky-500/20">
      <div className="container text-black opacity-1" data-aos="zoom-in" data-aos-delay={100}>
        <h1>Basara Migmar Dolma</h1>
        <p>I'm <span className="typed" data-typed-items="Designer, Developer, Freelancer, Photographer"> <TypingEffect  /></span>
        </p>
        <div className="social-links">
          <a href="#" className="twitter"><img src="https://api.iconify.design/logos:twitter.svg?color=%23888888" alt="Home" className="h-6 w-6" /></a>
          <a href="#" className="facebook"><img src="https://api.iconify.design/logos:facebook.svg?color=%23888888" alt="Home" className="h-6 w-6" /></a>
          <a href="#" className="instagram"><img src="https://api.iconify.design/logos:instagram-icon.svg?color=%23888888" alt="Home" className="h-6 w-6" /></a>
          <a href="#" className="google-plus"><img src="https://api.iconify.design/logos:skype.svg?color=%23888888" alt="Home" className="h-6 w-6" /></a>
          <a href="#" className="linkedin"><img src="https://api.iconify.design/skill-icons:linkedin.svg?color=%23888888" alt="Home" className="h-6 w-6" /></a>
        </div>
      </div>
   
    </section>
  );
};

