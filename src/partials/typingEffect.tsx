import  { useEffect } from 'react';
import Typed from 'typed.js';

export default function TypedComponent() {
  useEffect(() => {
    
      const typedStrings = ["Designer, Developer, Freelancer, Photographer"];
    
      const options = {
        strings: typedStrings,
        loop: true,
        typeSpeed: 100,
        backSpeed: 50,
        backDelay: 2000,
      };

      const typedInstance = new Typed('.typed', options);

      // Clean up the Typed.js instance when the component is unmounted
      return () => {
        typedInstance.destroy();
      };
    
  }, []);

  return <span className="typed" data-typed-items="" />;
};

