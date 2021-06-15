const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];

let atleastThree = users.filter(function(user){
    return user.languages.length >= 3
})
let emails = users.map(user => user.email)

let averageYears = users.reduce((accumlator, current) => {
    return accumlator + current.yearsOfExperience;
}, 0) / users.length

let longestEmail = emails.reduce((accumulator, current) => {
    return accumulator.length > current.length
    ? accumulator
    : current;
}, "")

console.log(atleastThree);
console.log(emails);
console.log(averageYears)
console.log(longestEmail);


