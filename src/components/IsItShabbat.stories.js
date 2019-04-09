import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import {
    utilities,
} from 'is-it-shabbat-core';

import { IsItShabbatPure } from './IsItShabbat';

const { DateTime } = utilities;

export const situation = {
    location: {
        coords: {
            latitude: 42,
            longitude: -73,
        },
    },
};

export const actions = {
    dispatch: action('dispatch'),
};

storiesOf('IsItShabbatPure', module)
    .add('Monday', () => <IsItShabbatPure now={DateTime.fromObject({
        year: 2019,
        month: 4,
        day: 8,
        hour: 14,
        minute: 30,
        zone: 'America/New_York',
    })} {...situation} {...actions} />)
    .add('Thursday', () => <IsItShabbatPure now={DateTime.fromObject({
        year: 2019,
        month: 4,
        day: 11,
        hour: 14,
        minute: 30,
        zone: 'America/New_York',
    })} {...situation} {...actions} />)
    .add('Friday Not Shabbat', () => <IsItShabbatPure now={DateTime.fromObject({
        year: 2019,
        month: 4,
        day: 12,
        hour: 14,
        minute: 30,
        zone: 'America/New_York',
    })} {...situation} {...actions} />)
    .add('Candle Lighting Crossover', () => <IsItShabbatPure now={DateTime.fromObject({
        year: 2019,
        month: 4,
        day: 12,
        hour: 19,
        minute: 10,
        seconds: 45,
        zone: 'America/New_York',
    })} {...situation} {...actions} />)
    .add('Candle Lighting', () => <IsItShabbatPure now={DateTime.fromObject({
        year: 2019,
        month: 4,
        day: 12,
        hour: 19,
        minute: 11,
        zone: 'America/New_York',
    })} {...situation} {...actions} />)
    .add('Shabbat Crossover', () => <IsItShabbatPure now={DateTime.fromObject({
        year: 2019,
        month: 4,
        day: 12,
        hour: 19,
        minute: 28,
        seconds: 45,
        zone: 'America/New_York',
    })} {...situation} {...actions} />)
    .add('Friday Shabbat', () => <IsItShabbatPure now={DateTime.fromObject({
        year: 2019,
        month: 4,
        day: 12,
        hour: 20,
        zone: 'America/New_York',
    })} {...situation} {...actions} />)
    .add('Saturday Shabbat', () => <IsItShabbatPure now={DateTime.fromObject({
        year: 2019,
        month: 4,
        day: 13,
        hour: 20,
        zone: 'America/New_York',
    })} {...situation} {...actions} />)
    .add('Havdala', () => <IsItShabbatPure now={DateTime.fromObject({
        year: 2019,
        month: 4,
        day: 13,
        hour: 20,
        minutes: 11,
        seconds: 52,
        zone: 'America/New_York',
    })} {...situation} {...actions} />)
    .add('Saturday Not Shabbat', () => <IsItShabbatPure now={DateTime.fromObject({
        year: 2019,
        month: 4,
        day: 13,
        hour: 21,
        zone: 'America/New_York',
    })} {...situation} {...actions} />)
