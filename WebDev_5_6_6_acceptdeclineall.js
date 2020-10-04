/////////////// foreach() DEMO CODE ///////////////

const veggies = ['broccoli', 'spinach', 'cauliflower', 'broccoflower'];

const politelyDecline = (veg) => {
      console.log('No ' + veg + ' please. I will have pizza with extra cheese.');
}

const grudginglyAccept = (veg) => {
      console.log('Ok, I guess I will eat some ' + veg + '.');
}

/////////////// TWO WAYS TO USE foreach() FUNCTION ///////////////

function declineEverything(stuffToProcess) {
    stuffToProcess.forEach(politelyDecline); // Passing politelyDecline() function DIRECTLY into foreach()
}

declineEverything(veggies);

function acceptEverything(stuffToProcess) {
    stuffToProcess.forEach(item => { // Calling grudginglyAccept() function WITHOUT passing it directly into foreach()
        grudginglyAccept(item);
    })
}

acceptEverything(veggies);