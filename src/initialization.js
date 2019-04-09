import {
    utilities,
    action,
    state,
} from 'is-it-shabbat-core';

const { DateTime } = utilities;

const defaultLocation = {
    // TODO(james.fulford): get location by IP
    coords: {
        latitude: 31.776875,
        longitude: 35.233673,
    },
};

const getLocationAsync = () => new Promise((resolve) => {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            (location) => {
                console.info('Location:', location);
                resolve(location);
            },
            () => resolve(defaultLocation),
        );
    } else {
        resolve(defaultLocation);
        // reject('No geolocation available for this browser');
    }
});

export default async () => Promise.all([
    getLocationAsync().then((location) => {
        const act = action.initialize(
            DateTime.local(),
            // // Done at (43, -71)
            // eslint-disable-next-line
            // DateTime.fromObject({ zone: "America/New_York", year: 2018, month: 8, day: 22, hour: 7, minute: 0, second: 0 }),
            // eslint-disable-next-line
            // DateTime.fromObject({ zone: "America/New_York", year: 2018, month: 8, day: 24, hour: 14, minute: 0, second: 0 }),
            // eslint-disable-next-line
            // DateTime.fromObject({ zone: "America/New_York", year: 2018, month: 8, day: 24, hour: 19, minute: 18, second: 10 }),
            // eslint-disable-next-line
            // DateTime.fromObject({ zone: "America/New_York", year: 2018, month: 8, day: 24, hour: 19, minute: 22, second: 30 }),
            // eslint-disable-next-line
            // DateTime.fromObject({ zone: "America/New_York", year: 2018, month: 8, day: 24, hour: 19, minute: 36, second: 10 }),
            // eslint-disable-next-line
            // DateTime.fromObject({ zone: "America/New_York", year: 2018, month: 8, day: 24, hour: 21, minute: 0, second: 0 }),
            // eslint-disable-next-line
            // DateTime.fromObject({ zone: "America/New_York", year: 2018, month: 8, day: 24, hour: 23, minute: 59, second: 55 }),
            // eslint-disable-next-line
            // DateTime.fromObject({ zone: "America/New_York", year: 2018, month: 8, day: 25, hour: 14, minute: 0, second: 0 }),
            // eslint-disable-next-line
            // DateTime.fromObject({ zone: "America/New_York", year: 2018, month: 8, day: 25, hour: 20, minute: 16, second: 32 }),
            // eslint-disable-next-line
            // DateTime.fromObject({ zone: "America/New_York", year: 2018, month: 8, day: 25, hour: 21, minute: 0, second: 0 }),
            // eslint-disable-next-line
            // DateTime.fromObject({ zone: "America/New_York", year: 2018, month: 12, day: 2, hour: 15, minute: 0, second: 0 }),
            location,
        );
        state.dispatch(act);
    }),
]);
