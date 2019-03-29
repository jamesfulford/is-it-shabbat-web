import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import {
    action,
    localization,
    components,
    utilities,
} from 'is-it-shabbat-core';

import { underAWeek } from '../utilities/formatDuration';

const { ShabbatCheck, CountDown } = components;
const { en: { translate } } = localization;
const { DateTime } = utilities;

const IsItShabbat = ({ now, location, dispatch }) => (
    <ShabbatCheck now={ now } location = { location }>
        {(period, countDownTo) => (
            <>
            <span id="is-it">{translate.status[period]}</span>
            <span id="byline" >
                    <CountDown
                        end={countDownTo}
                        start={now}
                        callback={end => dispatch(action.setNow(end))}
                    >
                        {dur => (
                            <>
                                <span id="days-left">{underAWeek(dur)}</span>
                            <br />
                            <span id="day-or-days">{translate.endEventName[period]}</span>
                            </>
                        )}
                    </CountDown>
            </span>
            </>
        )}
    </ShabbatCheck>
);
IsItShabbat.propTypes = {
    now: PropTypes.instanceOf(DateTime).isRequired,
    location: PropTypes.shape({
        coords: PropTypes.shape({
            latitude: PropTypes.number,
            longitude: PropTypes.number,
        }),
    }).isRequired,
    dispatch: PropTypes.func.isRequired,
};

export default connect(
    state => ({
        now: state.now,
        location: state.location,
    }),
)(IsItShabbat);
