import KinveyRequester from './KinveyRequester';
import observer from './observer';

function loadAllPosts(callback) {
    KinveyRequester.loadPosts('kinvey')
        .then(callback);
}

export {loadAllPosts}
