/**
 * 9.2
- Please using PROMISE and ASYNC/AWAIT to solve this
- Allow user to input an userid and postId, print out that post content
- Print all posts for that user
 */

const readlineSync = require('readline-sync');
const url = 'https://jsonplaceholder.typicode.com/posts';
const userId = Number(readlineSync.question('Please input userId: '));
const postId = Number(readlineSync.question('Please input postId: '));

run();

async function run() {
    await printTargetPost(userId, postId);
    await printAllPosts(userId);
};

async function printTargetPost(userId, postId) {
    const userPosts = await getFilteredPostsFor(userId);
    if (userPosts.length === 0) {
        console.log(`User with userId ${userId} not found.`);
        return;
    }
    
    const targetPost = userPosts.find(post => post.id === postId);
    if (targetPost) {
        console.log('Target Post:');
        console.log(targetPost);
    } else {
        console.log(`The postId ${postId} does not belong to user ${userId}`);
    }
}

async function printAllPosts(userId) {
    const posts = await getFilteredPostsFor(userId);
    if (posts.length === 0) {
        return;
    } else {
        console.log(`All posts for user ${userId}:`);
        console.log(posts);
    };
}

async function getFilteredPostsFor(userId) {
    const posts = await sendRequest(url);
    return posts.filter(post => post.userId === userId);
}

async function sendRequest(url) {
    const response = await fetch(url);
    return await response.json();
}

