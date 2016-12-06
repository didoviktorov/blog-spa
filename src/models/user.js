import KinveyRequester from './KinveyRequester';
import observer from './observer';

function saveSession(userInfo) {
    let userAuth = userInfo._kmd.authtoken;
    sessionStorage.setItem('authToken', userAuth);
    let userId = userInfo._id;
    sessionStorage.setItem('userId', userId);
    let username = userInfo.username;
    sessionStorage.setItem('username', username);

    observer.onSessionUpdate();
}

function userLogin(username, password, callback, auth) {
    KinveyRequester.login(username, password, auth)
        .then((userInfo) => {
            saveSession(userInfo);
            callback(true);
        })
}

function userRegister(username, password, callback, auth) {
    KinveyRequester.register(username, password, auth)
        .then(registerSuccess);

    function registerSuccess(userInfo) {
        saveSession(userInfo);
        callback(true);
    }
}

function userLogout(callback) {
    KinveyRequester.logout('kinvey')
        .then(logoutSuccess);


    function logoutSuccess(response) {
        sessionStorage.clear();
        observer.onSessionUpdate();
        callback(true);
    }
}


export {userRegister, userLogout, userLogin}
