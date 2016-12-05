import KinveyRequester from './KinveyRequester';
import observer from './observer';

function loadAllPosts(callback) {
    KinveyRequester.loadPosts()
        .then(callback);
}

export {loadAllPosts}
