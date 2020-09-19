const getSleepHours = day => {
    switch (day.toLowerCase()){
        case "monday":
            //console.log("Mon");
            return 7.5; //could log hours per day or whatever in an array & extract them here, but whatevs
            break;
        case "tuesday":
            //console.log("Tue");
            return 6.5;
            break;
        case "wednesday":
            //console.log("Wed");
            return 6;
            break;
        case "thursday":
            //console.log("Thu");
            return 8;
            break;
        case "friday":
            //console.log("Fri");
            return 8.5;
            break;
        case "saturday":
            //console.log("Sat");
            return 5.5;
            break;
        case "sunday":
            //console.log("Sun");
            return 7;
            break;
        default:
            console.log("Invalid day");
            return 0;
            break;
    }
}

const getActualSleepHours = () => getSleepHours('Monday') + getSleepHours('Tuesday') + getSleepHours('Wednesday') + getSleepHours('Thursday') + getSleepHours('Friday') + getSleepHours('Saturday') + getSleepHours('Sunday');

const getIdealSleepHours = () => {
    let idealHours = 7.5; // again, could pass this in later
    return idealHours * 7;
}

const calculateSleepDebt = () => {
    let actualSleepHours = getActualSleepHours();
    let idealSleepHours = getIdealSleepHours();

    if (actualSleepHours < idealSleepHours) {
        console.log("Get more sleeeeep, man, like another " + (idealSleepHours - actualSleepHours) + " hours, yeah?");
    }
    else if (actualSleepHours > idealSleepHours) {
        console.log("Awreet lazy bones, use an alarm, huh? You can take " + (actualSleepHours - idealSleepHours) + " less zees & still be icy.");
    }
    else {
        console.log("That'll do, pig, that'll do.");
    }
}

//let day = "MonDay";
//getSleepHours(day);

//console.log(getActualSleepHours());

calculateSleepDebt();