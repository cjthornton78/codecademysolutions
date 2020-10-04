const team = {
    _players: [
        {
            firstName: 'Pete', 
            lastName: 'Wheeler', 
            age: 24
        },
        {
            firstName: 'Dave', 
            lastName: 'Jones', 
            age: 32
        },
        {
            firstName: 'Tom', 
            lastName: 'Brown', 
            age: 28
        }
    ],
    _games: [
        {
            opponent: 'Broncos',
            teamPoints: 42,
            opponentPoints: 27
        },
        {
            opponent: 'Cardinals',
            teamPoints: 28,
            opponentPoints: 13
        },
        {
            opponent: 'Beavers',
            teamPoints: 37,
            opponentPoints: 49
        },
    ],

    get players() {
        return this._players;
    },

    get games() {
        return this._games;
    },

    addPlayer(firstName, lastName, age) {
        let player = {
            firstName: firstName,
            lastName: lastName,
            age: age
        };

        this.players.push(player);
    },

    addGame(opponentName, teamPoints, opponentPoints) {
        let game = {
            opponent: opponentName,
            teamPoints: teamPoints,
            opponentPoints: opponentPoints
        };

        this.games.push(game);
    }
}

team.addPlayer("Chris", "Thornton", 42);
team.addGame("Giants", 58, 58);

console.log(team.players);
console.log(team.games);