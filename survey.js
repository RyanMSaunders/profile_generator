
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let profile = '';

// q0
rl.question('What\'s your name? Nicknames are also acceptable :)', (answer) => {
  const name = answer;
  
  //q1
  rl.question('What\'s an activity you like doing? ', (answer) => {
    const activity = answer;

    //q2
    rl.question('What do you listen to while doing that? ', (answer) => {
      const music = answer;


      // q3
      rl.question('Which meal is your favourite (eg: dinner, brunch, etc.)', (answer) => {
        console.log(`Thank you for your valuable feedback: ${answer}`);
        const meal = answer;
        
        // q4
        rl.question('What\'s your favourite thing to eat for that meal? ', (answer) => {
          console.log(`Thank you for your valuable feedback: ${answer}`);
          const dish = answer;
          
          // q5
          rl.question('Which sport is your absolute favourite? ', (answer) => {
            console.log(`Thank you for your valuable feedback: ${answer}`);
            const sport = answer;
            
            //q6
            rl.question('What is your superpower? In a few words, tell us what you are amazing at! ', (answer) => {
              const superpower = answer;
              
              profile = `${name} likes listening to ${music} while ${activity}. ${name}'s favourite meal is ${meal} and loves eating ${dish}. ${name}'s favourite sport is ${sport}, and has an amazing superpower: ${superpower}`;

              console.log(profile);


              rl.close();
            });
          });
        
        });
      });
    });
  });
});
