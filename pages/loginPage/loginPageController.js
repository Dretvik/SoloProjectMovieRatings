//////////////////////////////////////////////////////////////////////////////////////////////////////////
// Login Page

//Login function
function userLogin(username, password){
    const usernameInput = document.getElementById('loginUsernameInput');
    username = usernameInput.value.charAt(0).toUpperCase() + usernameInput.value.slice(1);
    password = document.getElementById('loginPasswordInput').value;
    for (let user of model.users){
        if (username === user.username && password === user.password){
            model.app.loggedInUser = user;
            model.app.currentPage = 'mainPage';
            mainPageView();
            return true;
        }
    }
    alert('username or password is wrong, try again');
    return false;
}