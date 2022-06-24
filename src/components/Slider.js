import React from 'react'
import { Carousel } from 'react-carousel-minimal';
function Slider() {
    const data = [
        {
          image: "images/image5.jpg",
          caption: "XPS LAPTOPS.<br>Your vision, more vivid.<br>The XPS 15 features a 16:10, 4-sided InfinityEdge display"
        },
        {
          image: "images/image8.jpg",
          caption: "INSPIRON.<br>ALL THE AWE.<br>Your world is big and beautiful with a 16:10 aspect ratio.."
        
        },
        {
          image: "images/image15.jpg",
          caption: "G SERIES.<br>BUILT FOR THRILLS.With 12th Gen Intel® Core™ processors & NVIDIA® GeForce® graphics"
          
        }
        
      ];
    
      const captionStyle = {
        fontSize: '2em',
        fontWeight: 'bold',
        textAlign: 'center',
      }
      const slideNumberStyle = {
        fontSize: '20px',
        fontWeight: 'bold',
      }
  return (
    <div className="App">
    <div style={{ textAlign: "center" }}>
      <div style={{
        padding: "0 20px"
      }}>
        <Carousel
          data={data}
          time={6000}
          width="100%"
          height="700px"
          captionStyle={captionStyle}
          radius="10px"
          slideNumber={true}
          slideNumberStyle={slideNumberStyle}
          captionPosition="bottom"
          automatic={true}
          dots={true}
          pauseIconColor="white"
          pauseIconSize="40px"
          slideBackgroundColor="MidnightBlue"
          slideImageFit="cover"
         
          style={{
            textAlign: "center",
            maxWidth: "100%",
            maxHeight: "700px",
            margin: "40px auto",
          }}
        />
      </div>
    </div>
  </div>
  )
}
export default Slider;
