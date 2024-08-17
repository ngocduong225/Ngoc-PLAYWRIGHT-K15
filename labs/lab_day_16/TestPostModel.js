const Post = require("./Post");
const RequestHandler = require("./RequestHandler");

labDay16();

async function labDay16() {
    const userId = 100;
    const postId = 2;

    const requestHandler = new RequestHandler();

    const post = await requestHandler.printTargetPost(userId, postId);
    if (post) {
        console.log('Target Post:', post);
    } else {
        console.log(`The postId ${postId} does not belong/exist to user ${userId}`);
    }

    const allPosts = await requestHandler.printAllPosts(userId);
    if (allPosts.length > 0) {
        console.log(`All posts for userId ${userId}:`, allPosts);
    } else {
        console.log(`No posts found for userId ${userId}`);
    }
}
