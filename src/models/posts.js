import KinveyRequester from './KinveyRequester';
import observer from './observer';

function loadAllPosts(callback) {
    KinveyRequester.loadPosts('kinvey')
        .then(callback);
}

function loadPost(id, callback) {
    let postData;
    KinveyRequester.loadPost('kinvey', id).then(callback);

}
export {
    loadAllPosts,
    loadPost
}
