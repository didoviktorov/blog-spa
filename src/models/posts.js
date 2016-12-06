import KinveyRequester from './KinveyRequester';

function loadAllPosts(callback) {
    KinveyRequester.loadPosts('kinvey')
        .then(callback);
}

function loadPost(id, callback) {
    KinveyRequester.loadPost('kinvey', id).then(callback);
}

function editPost(id, title, content, callback) {
    KinveyRequester.editPost(id, title, content, 'kinvey')
        .then(callback(true));
}
export {
    loadAllPosts,
    loadPost,
    editPost
}
