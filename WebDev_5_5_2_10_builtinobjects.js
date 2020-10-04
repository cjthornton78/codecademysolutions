const robot = {
	model: 'SAL-1000',
    mobile: true,
    sentient: false,
    armor: 'Steel-plated',
    energyLevel: 75
};

// What is missing in the following method call?
const robotKeys = Object.keys(robot);

console.log(robotKeys);

// Declare robotEntries below this line:
const robotEntries = Object.entries(robot);

console.log(robotEntries);

// Declare newRobot below this line:
const extraFeatures = {laserBlaster: true, voiceRecognition: true};

const newRobot = Object.assign(extraFeatures, robot); //put the thing you want to remain unchanged second here

console.log(newRobot);
console.log(robot);