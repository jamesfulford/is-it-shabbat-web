import {
    utilities,
    action,
    state,
} from 'is-it-shabbat-core';
import i18n from 'i18n-js';

const { DateTime } = utilities;

const defaultLocation = {
    // TODO(james.fulford): get location by IP
    coords: {
        latitude: 31.776875,
        longitude: 35.233673,
    },
};

const getLocationAsync = () => new Promise((resolve) => {
    if (window.navigator && navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            (location) => {
                console.info('Location:', location);
                resolve(location);
            },
            () => resolve(defaultLocation),
        );
    } else {
        console.warn('Using default location:', defaultLocation);
        resolve(defaultLocation);
        // reject('No geolocation available for this browser');
    }
});

export default async () => Promise.all([
    Promise.resolve(() => {
        i18n.locale = (window.navigator && navigator.language) || 'en';
    }),
    getLocationAsync().then((location) => {
        const act = action.initialize(
            DateTime.local(),
            //
            //
            // Simulate different times
            //
            //

            // Done at (43, -71)
            //
            // 2 weeks before Rosh Hashana
            //

            // Weekday
            // eslint-disable-next-line
            // DateTime.fromObject({ zone: 'America/New_York', year: 2018, month: 8, day: 22, hour: 7, minute: 0, second: 0 }),

            // Friday, pre-candlelighting
            // eslint-disable-next-line
            // DateTime.fromObject({ zone: 'America/New_York', year: 2018, month: 8, day: 24, hour: 14, minute: 0, second: 0 }),

            // Candlelighting Crossover
            // eslint-disable-next-line
            // DateTime.fromObject({ zone: 'America/New_York', year: 2018, month: 8, day: 24, hour: 19, minute: 18, second: 10 }),

            // Candlelighting
            // eslint-disable-next-line
            // DateTime.fromObject({ zone: 'America/New_York', year: 2018, month: 8, day: 24, hour: 19, minute: 22, second: 30 }),

            // Shabbat crossover
            // eslint-disable-next-line
            // DateTime.fromObject({ zone: 'America/New_York', year: 2018, month: 8, day: 24, hour: 19, minute: 36, second: 10 }),

            // Friday Shabbat
            // eslint-disable-next-line
            // DateTime.fromObject({ zone: 'America/New_York', year: 2018, month: 8, day: 24, hour: 21, minute: 0, second: 0 }),

            // Friday Saturday crossover
            // eslint-disable-next-line
            // DateTime.fromObject({ zone: 'America/New_York', year: 2018, month: 8, day: 24, hour: 23, minute: 59, second: 55 }),

            // Saturday Shabbat
            // eslint-disable-next-line
            // DateTime.fromObject({ zone: 'America/New_York', year: 2018, month: 8, day: 25, hour: 14, minute: 0, second: 0 }),

            // Havdala
            // eslint-disable-next-line
            // DateTime.fromObject({ zone: 'America/New_York', year: 2018, month: 8, day: 25, hour: 20, minute: 16, second: 32 }),

            // Saturday Not Shabbat
            // eslint-disable-next-line
            // DateTime.fromObject({ zone: 'America/New_York', year: 2018, month: 8, day: 25, hour: 21, minute: 0, second: 0 }),

            //
            // Hannukah
            //

            // Holiday crossover
            // eslint-disable-next-line
            // DateTime.fromObject({ zone: 'America/New_York', year: 2018, month: 12, day: 2, hour: 16, minute: 11, second: 44 }),
            location,
        );
        state.dispatch(act);
    }),
]);
