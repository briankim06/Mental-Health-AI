import OpenAI from "openai";
import { configDotenv} from "dotenv";
import readline from "readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  

configDotenv()

const openai = new OpenAI();

async function chat(history, prompt, systemCommand) {

    let messages = history;
    messages.unshift({ role: "system", content: systemCommand})
    messages.push({role: "user", content: prompt})

    const completion = await openai.chat.completions.create({
        model: "gpt-4o-mini",
        messages: messages
    });

    return completion.choices[0].message;
}

console.log(await chat([], "Roast my hair style. I have a mid part.", "Be a respectful therapist and make sure to prioritize people's wellbeing. Be caring and shi type shi."))
let done = false;

console.log("Hi how can I help you!")
while(!done) {
    await rl.question('', prompt => {
        console.log(chat([], "Roast my hair style. I have a mid part.", "Be a respectful therapist and make sure to prioritize people's wellbeing. Be caring and shi type shi."))
        rl.close();
      });
} 

  






