import React,{useEffect,useRef} from "react";
import gsap from 'gsap'
import './cover.css'
import bg from '../../assets/background.png' ;
import img1 from '../../assets/fog_7.png';
import img2 from '../../assets/mountain_10.png';
import img3 from '../../assets/fog_6.png';
import img4 from '../../assets/mountain_9.png';
import img5 from '../../assets/mountain_8.png';
import img6 from '../../assets/fog_5.png';
import img7 from '../../assets/mountain_7.png';
import img8 from '../../assets/mountain_5.png';
import img9 from '../../assets/mountain_2.png';
import img10 from '../../assets/mountain_6.png';
import img11 from '../../assets/mountain_4.png';
import img12 from '../../assets/mountain_3.png';
import img13 from '../../assets/mountain_1.png';
import img14 from '../../assets/fog_4.png';
import img15 from '../../assets/fog_3.png';
import img16 from '../../assets/fog_2.png';
import img17 from '../../assets/fog_1.png';


const Cover = () => {



  const parallaxElements = document.querySelectorAll(".parallax");
  useEffect(() => {
    let xValue = -10;
    let yValue = -10;
      const parallaxElements = document.querySelectorAll(".parallax");
      console.log(parallaxElements)

      function updated(cursorPoint){

        if (parallaxElements) {
          parallaxElements.forEach((el) => {
            let speedx=el.dataset.speedx;
            let speedz=el.dataset.speedz;
            let isInLeft =
              parseFloat(getComputedStyle(el).left)<window.innerWidth / 2 ? 1 : -1;
            let zValue=
              (cursorPoint-parseFloat(getComputedStyle(el).left))*isInLeft*0.1;
            el.style.transform = `perspective(2300px) translateZ(${zValue *speedz }px) translateX(calc(-50% + ${-xValue * speedx/2}px)) translateY(calc(-50% + ${-yValue * speedx/2}px))`;
          });
        }
      }
      updated(0);


      const handleMouseMove = (e) => {
        
        xValue = e.clientX - window.innerWidth / 2;
        yValue = e.clientY - window.innerHeight / 2;
  
        
        updated(e.clientX);
        
      };
  
      
      window.addEventListener("mousemove", handleMouseMove);
  
      return () => {
        window.removeEventListener("mousemove", handleMouseMove);
      };

    }, []);

    useEffect (()=>{
      
        const parallaxElements = document.querySelectorAll(".parallax");
        const timeline = gsap.timeline({
          defaults: {
            ease: 'back.out',
          },
        })
        if(timeline.isActive() ) return ;
        Array.from(parallaxElements)
        
        
        .forEach((el)=>{
          
        timeline.from(
            el,
            {
              top: `${el.offsetHeight / 2 +  +el.dataset.distance}px`,
              opacity:0,
              duration:2,
                             
            
        },"1");
        
        timeline.to(
          el,{
            opacity:1,
          }
          
        
        );
        
        
    });
      
    })
      

  return(
      <div className="main">
          
              <div className="vignette"></div>
              <img src={bg}  alt="Background" className="parallax bg-img" data-speedx='0.27'data-distance="00"  data-speedz="0.67" />
              <img src={img1} alt="img1" className="parallax fog-7" data-speedx='0.2' data-distance='500' data-speedz="0"/>
              <img src={img2} alt="img2" className="parallax mountain-10" data-speedx='0.15' data-distance='500' data-speedz="0"/>
              <img src={img3} alt="img3" className="parallax fog-6" data-speedx='0.20' data-distance='500' data-speedz="0"/>
              <img src={img4} alt="img4" className="parallax mountain-9" data-speedx='0.18' data-distance='500' data-speedz="0.15"/>
              <img src={img5} alt="img5" className="parallax mountain-8" data-speedx='0.1' data-distance='500' data-speedz="0"/>
              <img src={img6} alt="img6" className="parallax fog-5" data-speedx='0.15' data-distance='500' data-speedz="0"/>
              <img src={img7} alt="img7" className="parallax mountain-7" data-speedx='0.1' data-distance='500' data-speedz="0"/>
              <img src={img10} alt="img10" className="parallax mountain-6" data-speedx='0.075' data-distance='500' data-speedz="0.05"/>
              <img src={img11} alt="img11" className="parallax mountain-4" data-speedx='0.05' data-distance='500' data-speedz="0"/>
              <img src={img12} alt="img10" className="parallax mountain-3" data-speedx='0.05' data-distance='500' data-speedz="0.32"/>
              <img src={img13} alt="img10" className="parallax mountain-1" data-speedx='0.13' data-distance='500' data-speedz="0.53"/>
              <img src={img14} alt="img6" className="parallax fog-4" data-speedx='0.11' data-distance='500' data-speedz="0"/>
              <img src={img15} alt="img6" className="parallax fog-3" data-speedx='0.11' data-distance='500' data-speedz="0"/>
              <img src={img16} alt="img6" className="parallax fog-2" data-speedx='0.11' data-distance='500' data-speedz="0"/>
              <img src={img17} alt="img6" className="parallax fog-1" data-speedx='0.11' data-distance='500' data-speedz="0"/>
              
              <div className="text parallax"  data-distance='150' data-speedz="0">
                  <h2>Webwiz</h2>
                  <h1>Ara<span>v</span>inth</h1>
              </div>
              <img src={img8} alt="img2" className="parallax mountain-5" data-speedx='0.05' data-distance='550' data-speedz="0.13"/>
              <img src={img9} alt="img5" className="parallax mountain-2" data-speedx='0.1' data-distance='500' data-speedz="0.43"/>
     
          
      </div>
  )
}
export default Cover