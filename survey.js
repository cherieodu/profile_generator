const { RSA_X931_PADDING, RSA_PKCS1_OAEP_PADDING } = require('constants');
const readline = require('readline');
const { resourceLimits } = require('worker_threads');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("What's your name? Nicknames are also acceptable :) : " , (answer) => {
  const name = answer;
  rl.question("What's an activity you like doing?: ", (answer) => {
    const activity = answer;
    rl.question("What do you listen to while doing that?: ", (answer) => {
      const listensTo = answer;
      rl.question("Which meal is your favourite (eg: dinner, brunch, etc.): ", (answer) => {
        const favMeal = answer;
        rl.question("What's your favourite thing to eat for that meal?: ", (answer) => {
          const favToEat = answer;
          rl.question("Which sport is your absolute favourite?: ", (answer) => {
            const sport = answer;
            rl.question("What is your superpower? In a few words, tell us what you are amazing at! : ", (answer) => {
              const superpower = answer;
            
              console.log(`\n${name} loves ${activity}, listens to ${listensTo} while doing it, and also likes ${sport}. ${name}'s favourite meal is ${favMeal}, and loves to eat ${favToEat}. P.S. Superpower is ${superpower}`);
              rl.close();
            });
            
          });
          
        });
        
      });
      
    });
    
  });
  
  
});
