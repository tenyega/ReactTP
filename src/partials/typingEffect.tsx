import  { useEffect } from 'react';
// import Typed from 'typed.js';

const TypingEffect = () => {
  useEffect(() => {
    const typedElement = document.querySelector('.typed');
  
    if (typedElement) {
      // const typedStrings = typedElement.getAttribute('data-typed-items')?typedElement.getAttribute('data-typed-items')?.split(','):'';
      // const options = {
      //   strings: typedStrings,
      //   loop: true,
      //   typeSpeed: 100,
      //   backSpeed: 50,
      //   backDelay: 2000,
      // };

      //const typed = new Typed('.typed',options);

      // Cleanup function to destroy Typed instance when component unmounts
      return () => {
        // typed.destroy();
      };
    }
  }, []);

  return (
    <div className="p-4">
      <span className="typed" data-typed-items="First text, Second text, Third text"></span>
    </div>
  );
};

export default TypingEffect;
