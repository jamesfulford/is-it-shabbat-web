import React, { useState, useEffect } from 'react';
import { Provider } from 'react-redux';

import {
  state,
  localization,
} from 'is-it-shabbat-core';
import { is } from 'shabbat-logic';

import './App.css';

import initialize from './initialization';
import IsItShabbat from './components/IsItShabbat';

const { en: { translate } } = localization;

const SETUP_STATE = {
  SETUP_NEEDED: 0,
  LOADING: 1,
  DONE: 2,
};

const Uninitialized = () => (
  <>
  <span id="is-it">-</span>
  <span id="byline">
    <span id="days-left">-</span>
    <br />
      <span id="day-or-days">{translate.endEventName[is.NOT_SHABBAT]}</span>
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
