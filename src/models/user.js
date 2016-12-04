import KinveyRequester from './KinveyRequester';

function userRegister(username, password) {
    KinveyRequester.register(username,password)
      .then((userInfo) => {
            saveSessesion(userInfo);
        });
}

function saveSessesion(userInfo) {
    let userAuth = userInfo._kmd.authtoken;
    sessionStorage.setItem('authToken', userAuth);
    let userId = userInfo._id;
    sessionStorage.setItem('userId', userId);
    let username = userInfo.username;
    sessionStorage.setItem('username', username);
}

function userLogout() {
    KinveyRequester.logout()
        .then(() => {
            sessionStorage.clear()
    });
}

function userLogin(username, password) {
    alert("user" + username + ";" + "pass" + password )
}

export {userRegister, userLogout, userLogin}
