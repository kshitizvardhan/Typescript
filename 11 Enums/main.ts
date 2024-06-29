// Enums (short for enumerations) in TypeScript are a feature that allows you to define a set of named constants.
// The concept behind an enumeration is to create a human-readable way to represent a set of constant values, which might otherwise be represented as numbers or strings.
/*
Example
Let’s say you have a game where you have to perform an action based on weather the user has pressed the up arrow key, down arrow key, left arrow key or right arrow key.

What should the type of keyPressed be?
Should it be a string? (UP , DOWN , LEFT, RIGHT) ?
Should it be numbers? (1, 2, 3, 4) ?

The best thing to use in such a case is an enum.
*/

// 1st way without enums

type KeyInput = "up" | "down" | "left" | "right";

function doSomething(keyPressed: KeyInput) {
	// do something.
}

doSomething("right");
doSomething("up");

// 2nd way with enum

enum Direction {
    up,
    down,
    left,
    right
}

function doSomething_(keyPressed: Direction) {
	// do something.
}

doSomething_(Direction.down);
doSomething_(Direction.right);

//  by default, enums get values as 0 , 1, 2...
console.log(Direction.up);

/*

enum Direction {
    Up = 1,
    Down, // becomes 2 by default
    Left, // becomes 3
    Right // becomes 4
}

Can also be strings

enum Direction {
    Up = "UP",
    Down = "Down",
    Left = "Left",
    Right = 'Right'
}


*/


/* Common use case in express

enum ResponseStatus {
    Success = 200,
    NotFound = 404,
    Error = 500
}

app.get("/', (req, res) => {
    if (!req.query.userId) {
			res.status(ResponseStatus.Error).json({})
    }
    // and so on...
		res.status(ResponseStatus.Success).json({});
})


*/