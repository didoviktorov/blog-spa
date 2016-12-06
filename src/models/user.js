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

function userLogin(username, password, callback) {
    KinveyRequester.login(username, password)
        .then((userInfo) => {
            saveSession(userInfo);
            callback(true);
        })
}

function userRegister(username, password, callback) {
    KinveyRequester.register(username, password)
        .then(registerSuccess);

    function registerSuccess(userInfo) {
        saveSession(userInfo);
        callback(true);
    }
}

function userLogout() {
    KinveyRequester.logout()
        .then(() => {
            sessionStorage.clear()
        });
}



export {userRegister, userLogout, userLogin}
