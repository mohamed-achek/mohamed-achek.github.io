//import lottie from 'lottie-web';
import React from "react";
import { Component } from "react";
import banner from "./image.png";

/*
//for animated svgs use json file
export default function BannerImg(){
    const container = useRef(null)
    useEffect(() => {
      lottie.loadAnimation({
        container: container.current,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        animationData: require('./banner.json')
      })
    }, [])
    return (
      <div className="App">
        <div className="container" ref={container}></div>
      </div>
    );
}*/

// //for static svgs
class BannerImg extends Component {
  render() {
    return (
      <div className="App">
        <div className="profile-pic-container">
          <img src={banner} alt="Profile" className="profile-pic" />
        </div>
      </div>
    );
  }
}
export default BannerImg;
