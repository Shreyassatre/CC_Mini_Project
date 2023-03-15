import React, {useState} from 'react';
import './ScrollToTop.css';

function ScrollToTop() {

    const [showScroll, setShowScroll] = useState(false)
    
      const checkScrollTop = () => {
        if (!showScroll && window.pageYOffset > 75){
          setShowScroll(true)
        } else if (showScroll && window.pageYOffset <= 75){
          setShowScroll(false)
        }
      };
    
      const scrollTop = () =>{
        window.scrollTo({top: 0, behavior: 'smooth'});
      };
    
      window.addEventListener('scroll', checkScrollTop)
    

    return (
        <div>
            <div
            className="scrollTop" 
            onClick={scrollTop} 
            style={{height: 40, display: showScroll ? 'flex' : 'none'}}
            >Scroll To Top</div>
        </div>
    )
}

export default ScrollToTop
