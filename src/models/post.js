import KinveyRequester from './KinveyRequester';

function loadAllPosts(callback) {
    KinveyRequester.loadPosts('kinvey')
        .then(callback);
}

function createPost(title, content, callback, auth) {
    KinveyRequester.createPost(title, content, auth)
        .then(() => callback(true))
}

export {loadAllPosts, createPost}
