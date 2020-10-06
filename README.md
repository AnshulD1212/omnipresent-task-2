# omnipresent-task-2

## Pre-Requisite

-   node version v12.18.4
-   npm version  6.14.6

## steps to build project

-   npm install
-   npm run build

## steps to use the package

-   npm i "path_to_the_repo" || npm i omnipresent-task-2 (npm package link given below)
-   import Add from "omnipresent-task-2"
-   call the funtion
    -   AlphaOne - Add('2020-10-06T08:57:12.096Z', '2020-10-06T11:57:16.096Z', 'AlphaOne')
    -   AlphaTwo - Add('2020-10-06T08:57:12.096Z', '2020-10-06T11:57:16.096Z', 'AlphaTwo')

### I have published the repo as well please use -

-   <https://www.npmjs.com/package/omnipresent-task-2>

## same entries in different systems

-   For this we can pass system param as an array of multiple system names and loop through it to print accordingly for different scenarios

-   for example- Add('2020-10-06T08:57:12.096Z', '2020-10-06T11:57:16.096Z', ['AlphaOne', 'AlphaTwo']) and inside the function we can loop system as system.forEach((s) => console.log(`${s} recorded 2 hours`))
