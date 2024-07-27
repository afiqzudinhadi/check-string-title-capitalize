import { input } from '@inquirer/prompts';

const answer = await input({ message: 'Enter your string:' });

const words = answer.split(' ')

for (let i = 0; i < words.length; i++) {
    if (words[i][0] !== words[i][0].toUpperCase()) {
        console.log(false)
        break
    }

    if (i === words.length - 1) {
        console.log(true)
    }
}