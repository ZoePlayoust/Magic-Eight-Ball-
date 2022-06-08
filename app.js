let userName = "Zoé";
let userQuestion = "Will I get rich?";
let randomNumber = Math.floor(Math.random() * 8);
let eightBall = "";

userName ? console.log(`Hello, ${userName}!`) : console.log("Hello!");
userName
  ? console.log(`Hello, ${userName}! you asked "${userQuestion}".`)
  : console.log(`Hello, you asked "${userQuestion}".`);

switch (randomNumber) {
  case 0:
    eightBall = "It is certain";
    break;
  case 1:
    ceightBall = "It is decidedly so";
    break;
  case 2:
    eightBall = "Reply hazy try again";
    break;
  case 3:
    eightBall = "Cannot predict now";
    break;
  case 4:
    eightBall = "Do not count on it";
    break;
  case 5:
    eightBall = "Outlook not so good";
    break;
  case 6:
    eightBall = "My sources say no";
    break;
  case 7:
    eightBall = "Signs point to yes";
    break;
}

console.log(`${eightBall}, my dear.`);
