
const ASCII1 = "C|_|";
const ASCII2 = "@->-->--";
const ASCII3 = "<:3)~~~~";
const ASCII4 = "<3";
const ASCII5 = "[($)]";
const ASCII6 = " ___\n|[_]|\n|+ ;|\n`---'";

const messages = [ASCII1, ASCII2, ASCII3, ASCII4, ASCII5, ASCII6];

function randomPrint(smth) 
{
    let randNum = Math.floor(Math.random()*(messages.length))
    console.log(messages[randNum])
}

randomPrint(messages);