const messages = ["Why do Java programmers have to wear glasses ? Because they don't C.", 
"Why did the programmer quit his job ? Because he didn't get arrays.",
 "What concert costs just 45 cents? 50 Cent featuring Nickelback", 
"What is red and break a tooth when you bite it ? A brick.", 
"Why does the girl fall from her swing? Because she has no arms.",
 "A woman in labor suddenly shouted,'' Shouldn’t! Wouldn’t! Couldn’t! Didn’t! Can’t! ''  ''Don’t worry'', said the doc. ''Those are just contractions.''" ,
"How do you drown a hipster? Throw him in the mainstream."];

function randomPrint(smth) 
{
    let randNum = Math.floor(Math.random()*(messages.length))
    console.log(messages[randNum])
}

randomPrint(messages);
