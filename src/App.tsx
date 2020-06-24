import React, { useState, ChangeEvent } from 'react';
import Particles from 'react-particles-js';
import Clarifai from 'clarifai';

import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';
import particlesconfig from './particlesconfig';
import styles from './App.module.css';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';
import Signin from './components/Signin/Signin';
import Register from './components/Register/Register';

interface EventInterface {
  target: { value: string };
}

const app = new Clarifai.App({
  apiKey: '42b9569ed4e047149b7984badef022d2',
});

function App() {
  const [input, setInput] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [box, setBox] = useState({
    topRow: null,
    rightCol: null,
    bottomRow: null,
    leftCol: null,
  });
  const [route, setRoute] = useState('signin');
  const [isSignedIn, setIsSignedIn] = useState(false);

  const onInputChange = (event: EventInterface) => {
    setInput(event.target.value);
  };

  const onButtonSubmit = () => {
    setImageUrl(input);
    app.models
      .predict(Clarifai.CELEBRITY_MODEL, input)
      .then(response =>
        displayFaceBox(calculateFaceLocation(response))
      )
      .catch(err => console.log('erroooorrr', err));
  };

  const calculateFaceLocation = data => {
    const clarifaiFace =
      data.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById(
      'inputimage'
    ) as HTMLImageElement;
    const width = Number(image.width);
    const height = Number(image.height);

    return {
      leftCol: clarifaiFace.left_col * width,
      topRow: clarifaiFace.top_row * height,
      rightCol: width - clarifaiFace.right_col * width,
      bottomRow: height - clarifaiFace.bottom_row * height,
    };
  };

  const displayFaceBox = box => {
    setBox(box);
  };

  const onRouteChange = route => {
    if (route === 'signout') {
      setIsSignedIn(false);
    } else if (route === 'home') {
      setIsSignedIn(true);
    }
    setRoute(route);
  };

  return (
    <div className={styles.App}>
      <Navigation
        onRouteChange={onRouteChange}
        isSignedIn={isSignedIn}
      />
      {route === 'home' ? (
        <div>
          <Logo />
          <div style={{ textAlign: 'center' }}>
            <Rank />
            <ImageLinkForm
              onInputChange={onInputChange}
              onButtonSubmit={onButtonSubmit}
            />
          </div>
          <FaceRecognition box={box} imageUrl={imageUrl} />
        </div>
      ) : route === 'signin' || route === 'signout' ? (
        <Signin onRouteChange={onRouteChange} />
      ) : (
        <Register onRouteChange={onRouteChange} />
      )}

      <Particles
        className={styles.particles}
        params={particlesconfig}
      />
    </div>
  );
}

export default App;
