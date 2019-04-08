import React, { useState, useEffect } from 'react';
import { Provider } from 'react-redux';

import {
  state,
} from 'is-it-shabbat-core';

import initialize from './initialization';
import IsItShabbat from './components/IsItShabbat';

const SETUP_STATE = {
  SETUP_NEEDED: 0,
  LOADING: 1,
  DONE: 2,
};

const Uninitialized = () => (
  <>
  <span id="is-it">-</span>
  <span id="byline">
    <span id="day-or-days">-</span>
  </span>
  </>
);

const App = () => {
  const [initialized, setInitialized] = useState(SETUP_STATE.SETUP_NEEDED);

  useEffect(() => {
    if (initialized === SETUP_STATE.SETUP_NEEDED) {
      setInitialized(SETUP_STATE.LOADING);
      initialize().then(() => {
        setInitialized(SETUP_STATE.DONE);
      });
    }
  });

  return (
    <div className="container">
      <span id="title">Is It Shabbat?</span>
      {
        initialized === SETUP_STATE.DONE
          ? (
            <Provider store={state}>
              <IsItShabbat />
            </Provider>
          ) : <Uninitialized />
      }
    </div>
  );
}

export default App;
