import KinveyRequester from './KinveyRequester';

function loadAllPosts(callback) {
    KinveyRequester.loadPosts('kinvey')
        .then(callback);
}

function createPost(title, content, date, callback, auth) {
    KinveyRequester.createPost(title, content, date, auth)
        .then(() => callback(true))
}

function deletePost(postId, callback) {
    KinveyRequester.deletePost('kinvey', postId)
        .then(() => callback(true));
}

export {loadAllPosts, createPost, deletePost}
