const Post = require("./Post");

class RequestHandler {

    async printTargetPost(userId, postId) {
        const userPosts = await this._getAllPosts(userId);
        const post = this.getPostId(userPosts, postId);
        if (post) {
            return new Post(post.userId, post.id, post.title, post.body);
        }  
    }

    async printAllPosts(userId) {   
        const userPosts = await this._getAllPosts(userId);
        return userPosts.map(post => new Post(post.userId, post.id, post.title, post.body));   
    }

    filterUserPost(posts, userId) {
        return posts.filter(post => post.userId == userId);
    }

    getPostId(posts, postId) {
        return posts.find(post => post.id == postId);
    }

    async _getAllPosts(userId) {        
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const json = await response.json();
        return this.filterUserPost(json, userId);      
    }
}

module.exports = RequestHandler;
