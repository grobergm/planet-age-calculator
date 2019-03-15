# Super Galactic Age Calculator
## By Matt Groberg

## Description

_This application takes a users age in Earth Years, and calculates their age relative to some other planets in our solar system_

### Specs

1. Takes in a users birthday, gender, and activity level, and stores the information in a class.

2. Use the Date Object to calculate their current age, based on the difference between the current time and when they were born.

3. Calculates life expectancy based on demographics. For example: males have an average life expectancy of 68.33 years, whereas women have an average of 72.8 years. Also if you have an active lifestyle, you can live up to 7.2 years longer.

4. Converts Earth years to years on other planets.
* Mercury (.24 Earth years)
* Venus (.62 Earth years)
* Mars (1.88 Earth years)
* Jupiter (11.86 Earth years)

5. Determine how many years the user has left to live on each planet.

6. Lastly, it will return a statement of how long you are expected to live on each of the planets mentioned above (or how long you have exceeded the average life expectancy if you are older).

7. Automated tests generate random samples and test each of these methods when you run Karma.

### Installation and Setup

1. Make sure you have NodeJS, NPM installed.
2. Clone or download this repository.
3. Navigate the root of the project folder in your terminal, then run the command: npm install
4. To start the project, run this command: npm run start
5. To run automated tests, run this command: npm run test
6. To run the linter, run this command: npm run lint

### Technologies Used

* Backend: NodeJS, NPM, and webpack
* Front-end: HTML, CSS, and JavaScript (w jQuery)
* Automated Tests: Jasmin and Karma
* Linter: eslint

### Copyright (c) 2019 Matt Groberg MIT license.
