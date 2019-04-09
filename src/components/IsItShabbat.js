import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import i18n from 'i18n-js';

import {
    action,
    components,
    utilities,
} from 'is-it-shabbat-core';

const { DateTime, underAWeek } = utilities;
const { ShabbatCheck, CountDown } = components;

export const IsItShabbatPure = ({ now, location, dispatch }) => {
    const [ showCount, setShowCount ] = useState(true);
    return (
    <ShabbatCheck now={ now } location = { location }>
        {(period, countDownTo) => (
            <>
            <span id="is-it">{i18n.t(`status.${period}`)}</span>
            <span id="byline" onClick={() => setShowCount(!showCount)}>
                {
                    showCount
                    ? (
                        <CountDown
                            end={countDownTo}
                            start={now}
                            callback={end => dispatch(action.setNow(end))}
                        >
                            {dur => (
                                <span id="day-or-days">{i18n.t(
                                    `endEventName.${period}`,
                                    { duration: underAWeek(dur) },
                                )}</span>
                            )}
                        </CountDown>
                    ) : (
                        <span id="days-left">{i18n.t(
                            `startEventName.${period}`,
                            {
                                end: countDownTo.toLocaleString({
                                    month: 'short',
                                    day: '2-digit',
                                    hour: '2-digit',
                                    minute: '2-digit',
                                }),
                            },
                        )}</span>
                    )
                }

            </span>
            </>
        )}
    </ShabbatCheck>
    );
}
IsItShabbatPure.propTypes = {
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
)(IsItShabbatPure);
