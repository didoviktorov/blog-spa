import KinveyRequester from './KinveyRequester';
import observer from './observer';

function userRegister(username, password) {
    KinveyRequester.register(username, password)
        .then(registerSuccess);

    function registerSuccess(userInfo) {
        saveSessesion(userInfo);
        
    }
}

function saveSessesion(userInfo) {
    let userAuth = userInfo._kmd.authtoken;
    sessionStorage.setItem('authToken', userAuth);
    let userId = userInfo._id;
    sessionStorage.setItem('userId', userId);
    let username = userInfo.username;
    sessionStorage.setItem('username', username);

    observer.onSessionUpdate();
}

function userLogout() {
    KinveyRequester.logout()
        .then(() => {
            sessionStorage.clear()
        });
}

function userLogin(username, password) {
    KinveyRequester.login(username, password)
        .then((userInfo) => {
            saveSessesion(userInfo);
        })
}

export {userRegister, userLogout, userLogin}
