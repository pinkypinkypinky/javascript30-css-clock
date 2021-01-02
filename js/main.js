//DECLARING THE TIME UNIT VARIABLES
let theSeconds;
let tenSeconds;
let theHours;
let theMinutes;

//DECLARING THE DOM OBJECTS FOR THE ANALOG CLOCK
const hourHand = document.querySelector('.hour-hand');
const minHand = document.querySelector('.min-hand');
const secondHand = document.querySelector('.second-hand');

//DECLARING THE DOM OBJECTS FOR THE DIGITAL CLOCK
let theDigitalClockTimeUnits = Array.from(document.querySelectorAll('h1'))
let theDateSection = Array.from(document.querySelectorAll('h2'));

window.onload = () => {
    getTheDate()
    runTheAnalogClock()
     
}
 
let theDate;
setInterval(getTheDate = () => {
    theDate = new Date(Date.now())
},1)

setInterval(runTheAnalogClock = () => {
    //GETTING THE TIME
    
   getTheDate()
    //REASSIGNING THE TIME UNIT VARIABLES TO THEIR CORRESPONDING VALUES
    theSeconds = theDate.getSeconds();
    theMinutes = theDate.getMinutes();
    theHours = theDate.getHours();
    
    //DECLARING THE SECOND HAND'S ROTATION
    secondHand.style.transform = `rotate(${(theSeconds * 6) + 90}deg)`;

    //CALLING THE HOUR HAND AND THE MINUTE HAND (IS THIS NECESSARY EVERY SECOND?)
    rotateTheMinHand();
    rotateTheHourHand()
    setTheDigitalClock()
    //GETTING A STRING FROM THE CURRENT TIME AND SPLITTING IT INTO AN ARRAY
    
   
    // expected output: ['DAY', 'MONTH', 'DATE', 'YEAR']
    
    

}, 1000);

function rotateTheMinHand() {
    minHand.style.transform = `rotate(${(theMinutes * 6) +(theSeconds * 0.1) + 90}deg)`;
}

function rotateTheHourHand(){
    hourHand.style.transform = `rotate(${(theHours * 30) +(theMinutes * 0.5) + 90}deg)`
}


//MAKE AN ARRAY FROM SECTIONS INSIDE THE ANALOG CLOCK
const clockNumbers = Array.from(document.querySelectorAll('.clockNumber'))


//LOOP THROUGH THE ARRAY
for(i = 0; i <= clockNumbers.length -1; i++){
    //FOR EVERY INDEX TARGET THE SPAN ELEMENT (FIRST AND ONLY CHILD) INSIDE THE SECTION AND SET THE INNER TEXT TO i + 1 ( 1, 2, 3.....)
    clockNumbers[i].firstChild.innerText = `${i + 1}`;
    //JUST LIKE THE HOUR HAND - ROTATE EACH SECTION BY 30 DEGREES - USING i AGAIN (i + 1 * 30) AND LOOPING (0 - 11)
    //THE - 90 IS BECAUSE THE SECTIONS START HORIZONTAL AT 90deg SIMILAR TO THE HANDS THAT START HORIZONTAL AT 270deg 
    clockNumbers[i].style.transform = `rotate(${((i + 1) * 30) - 90}deg)`
    //TARGET THE FIRST CHILD OF EVERY SECTION AGAIN TO CORRECT THE ROTATION:
    //EVERY PARENT IS ROTATING i * 30deg CLOCKWISE. CLOCKNUMBERS[0] NEEDS TO BE ROTATED 60deg TO BE STRAIGHT AGAIN AND CLOCKNUMBERS[1] NEEDS TO BE ROTATED 30deg, AND CLOCKNUMBERS[2] NEEDS TO BE ROTATED 0 DEGREES AND THE PATTERN IS CLEAR: 60 - 30 - 30 - 30 THEREFORE i * 30 ((60 -) 0 * 30, 1 * 30, 2 * 30 ETC)
    clockNumbers[i].firstChild.style.transform = `rotate(${60 - (i * 30)}deg)`
}



















// second hand = 
// function rotateMinHand(){
//     minHand = `rotate(${tenSeconds * 1}deg)`;
// }
// 

// hour hand = rotate(${ 720 * 0.5}deg) 720 / 0.5 = 360degrees

//the second hand should go around the clock one time every 60 seconds
//the minute hand should go around the clock one time every 60 * 60 seconds
//the hour hand should go around the clock one time every (60 * 60 seconds) * 12

//60 * 60 = 3600 seconds in an hour
//3600 * 12 = 43200 seconds in 12 hours

//360 degrees in a circle

//360 / 60 = 6 - so the seconds hand should rotate 6 degrees every second

//the minute hand should rotate 6 degrees every 60 seconds or 1 degree every 10 seconds 

//6 degrees / 60 seconds =
//1 degree / 10 seconds

// the hour hand should rotate (360 / 12) 30 degrees every 60 minutes or 3600 seconds (30 degrees / 60 minutes) = 0.5 degrees 

//second hand = rotate(${seconds * 6}deg)

//minute hand = rotate(${tenSeconds * 1}deg)

//hour hand = rotate(${ 720 * 0.5}deg) 720 / 0.5 = 360degrees

//every second:
//seconds++
/*
if(seconds % 10 === 0) {
    tenSeconds++;
}
if(seconds % 60 === 0){
    minutes++;
    seconds = 0;
}
if(tenSeconds === 360){
    tenSeconds = 0;
}
if(minutes === 720){
    minutes = 0;
}
*/

function setTheDigitalClock() {
    //SET A VAR TO THE FULL DATE (DAY, MONTH, DAY DATE AND YEAR) AS A STRING
    let theFullDate = theDate.toDateString();
    //MAKE ARRAY FROM THE STRING SPLITTING AT THE SPACES
    let dateArray = theFullDate.split(' ')
    //LOOP THROUGH THE ARRAY AND SET CORRESPONDING H1 ELEMENTS TO THE HOURS MINS AND SECONDS
        for(i = 0; i <= theDateSection.length - 1; i++){
            theDateSection[i].innerText = `${dateArray[i]}`;
        }

    //MAKE ARRAY CONTAINING CURRENT HOURS, MINUTES AND SECONDS
    let timeArray = [`${theHours}`, `${theMinutes}`, `${theSeconds}`]
    //LOOP THROUGH THAT ARRAY AND SET TIME UNITS TO THE CORRESPONDING H2 ELEMENTS IN THE END SECTION OF CLOCKFACE     
        for(i = 0; i <= theDigitalClockTimeUnits.length - 1; i++){
            theDigitalClockTimeUnits[i].innerText = `${timeArray[i]}`
        }

        //CONDITIONALS REGARDING THE DISPLAY STYLE:
        //IF IT'S 0 THEN MAKE IT 12
        
        if( theHours === 0 ){
            theDigitalClockTimeUnits[0].innerText = '12'
        }
        //HOURS ARE SET TO 24HOUR TIME, I DON'T LIKE IT - IF ITS > 12 THEN - 12
        if(theHours > 12){
            theDigitalClockTimeUnits[0].innerText = `${theDigitalClockTimeUnits[0].innerText - 12}`;
            //AND IF HOURS ARE LESS THAN TWO DIGITS, KEEP AT TWO DIGITS BY ADDING A 0 IN FRONT
                if(theDigitalClockTimeUnits[0].innerText < 10){
                    theDigitalClockTimeUnits[0].innerText = `0${theDigitalClockTimeUnits[0].innerText}`
                }
        }
        //IF THE MINUTES ARE LESS THAN TWO DIGITS, KEEP AT TWO DIGITS BY ADDING A 0 IN FRONT
        if ( theMinutes < 10 ) {
            theDigitalClockTimeUnits[1].innerText = `0${theMinutes}`;
        }
        //REPEAT FOR SECONDS
        if(theSeconds < 10){
            theDigitalClockTimeUnits[2].innerText = `0${theSeconds}`;
        }
}