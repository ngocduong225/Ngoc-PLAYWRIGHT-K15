/**
 *  Given a student array and find out the best student
 *  Given just only one the best student
 */

const teo = { name: `Teo`, grades: [9, 8, 6] };

const ti = JSON.parse(JSON.stringify(teo));
ti.name = 'Ti';
ti.grades = [7, 9, 9];

const tun = JSON.parse(JSON.stringify(teo));
tun.name = 'Tun';
tun.grades = [6, 7, 8];

const students = [teo, ti, tun];
const bestStudent = findBestStudent(students);
console.log(`The best student is: ${JSON.stringify(bestStudent)}`);


function findBestStudent(students) {
    let bestStudent = students[0];
    let currentHighestScrore = 0;
    for (const student of students) {
        const averageScore = calculateAverageScore(student);
        if (averageScore >= currentHighestScrore) {
            bestStudent = student;
            currentHighestScrore = averageScore;
        }
    }
    return bestStudent;
}

function calculateAverageScore({ grades }) {
    let totalScore = 0;
    for (const score of grades) {
        // totalScore = totalScore + score;
        totalScore += score;
    }
    return totalScore / grades.length;
}