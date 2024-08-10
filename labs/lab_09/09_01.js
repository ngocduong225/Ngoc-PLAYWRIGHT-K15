/**
 * General info:
url: https://jsonplaceholder.typicode.com
Library: fetch
slugs:
GET	/posts
9.1
 - Please using PROMISE and thenable to solve this
- Allow user to input an userid and postId, print out that post content
- Print all posts for that user
 */

const readlineSync = require('readline-sync');
const url = 'https://jsonplaceholder.typicode.com/posts';
const userId = Number(readlineSync.question('Please input userId: '));
const postId = Number(readlineSync.question('Please input postId: '));

printTargetPost(userId, postId);
printAllPosts(userId);

function printTargetPost(userId, postId) {
    getFilteredPostsFor(userId).then(function(userPosts) {
        if (userPosts.length === 0) {
            console.log(`User with userId ${userId} not found.`);
            return;
        }

        const targetPost = userPosts.find(function(post) {
            return post.id === postId;
        });

        if (targetPost) {
            console.log('Target Post:');
            console.log(targetPost);
        } else {
            console.log(`The postId ${postId} does not belong to user ${userId}`);
        }
    });
}

function printAllPosts(userId) {
    getFilteredPostsFor(userId).then(function(posts) {
        if (posts.length === 0) {;
            return;
        } else {
            console.log(`All posts for user ${userId}:`);
            console.log(posts);
        }
    });
}

function getFilteredPostsFor(userId) {
    return sendRequest(url).then(function(posts) {
        return posts.filter(function(post) {
            return post.userId === userId;
        });
    });
}

function sendRequest(url) {
    return fetch(url).then(function(response) {
        return response.json();
    });
}