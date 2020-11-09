import React from 'react'
import Carousel from 'react-material-ui-carousel'
import './App.css';

function App() {
  return (
    <Carousel
       className='carousel'
       autoPlay={true}
       interval={5000}
       indicators={true}
       animation='slide'
       timeout={500}
       navButtonsAlwaysVisible={true}
       navButtonsAlwaysInvisible={false}
       fullHeightHover={true}
    >
      <div>
        <img src='https://images-fe.ssl-images-amazon.com/images/G/35/kindle/journeys/ZTAzNjE1NDEt/ZTAzNjE1NDEt-OTYyOTk1YWQt-w1500._CB416741271_.jpg' alt=''/>
      </div>
      <div>
        <img src='https://images-fe.ssl-images-amazon.com/images/G/35/kindle/journeys/MThkY2E5OWYt/MThkY2E5OWYt-MzllNTQ0NTgt-w1500._CB403789420_.jpg' alt=''/>
      </div>
      <div>
        <img src='https://images-fe.ssl-images-amazon.com/images/G/35/AU-hq/2020/img/Prime/XCM_Manual_1280301_1439664_AU_au_prime_gw_desktop_hero_2x_v2_1_3493090_1500x600_1X_en_AU._CB417954628_.jpg' alt=''/>
      </div>
    </Carousel>
  
  );
}

export default App;
