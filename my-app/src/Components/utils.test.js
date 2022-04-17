import moment from 'moment-timezone';
import { calculatePercent, totalVotes, choiceNumber } from './utils';

test('Calculate percent with 4 decimal.If 10 are the current votes over total 100 votes to equal 10.0000', () => {
    expect(calculatePercent(10, 100)).toBe("10.0000");
});


const choicesList = [
    {
        "votes": 25,
        "url": "/questions/9/choices/65",
        "choice": "Tea"
    },
    {
        "votes": 35,
        "url": "/questions/9/choices/67",
        "choice": "Apple Cider"
    },
    {
        "votes": 10,
        "url": "/questions/9/choices/68",
        "choice": "Hot Chocolate"
    },
    {
        "votes": 20,
        "url": "/questions/9/choices/66",
        "choice": "Coffee"
    }
]

test('Counting all votes. Should be return the total of votes', () => {
    expect(totalVotes(choicesList)).toBe(90);
});

test('split parameters and return the last one', () => {
    expect(choiceNumber("/questions/9/choices/d")).toBe('d');
});