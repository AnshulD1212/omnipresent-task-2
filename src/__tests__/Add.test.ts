/**
 * @jest-environment node
 */

import Add from '../index';
test('Adds entry to AlphaOne', async () => {
    expect(await Add('2020-10-06T08:57:12.096Z', '2020-10-06T11:57:16.096Z', 'AlphaOne')).toBe('Entry added to system AlphaOne');
});

test('Adds entry to AlphaTwo', async () => {
    expect(await Add('2020-10-06T10:57:12.096Z', '2020-10-06T11:57:16.096Z', 'AlphaTwo')).toBe('Entry added to system AlphaTwo');
});

test('end time cannot be less than start time', async () => {
    expect(await Add('2020-10-06T11:57:16.096Z', '2020-10-06T11:57:12.096Z', 'AlphaTwo')).toBe('endTime cannot be less than startTime');
});

test('invalid system value', async () => {
    expect(await Add('2020-10-06T11:57:16.096Z', '2020-10-06T21:57:12.096Z', 'default')).toBe('Entry added to system default');
});
