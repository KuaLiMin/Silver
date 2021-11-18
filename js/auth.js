//getting goals





//listen for auth status changes
auth.onAuthStateChanger(user => {
    if (user) {
        console.log('user logged in :', user)
            /*db.collection('goals').get().then(snapshot => {
                //code for showing goals
            })*/
    } else {
        console.log('user logged out');
        /*db.collection('goals').get().then(snapshot => {
            //empty or not even able to access website?
        })*/
    }
});

//creating new goals
const createForm = document.querySelector('whatever the id is suppose to be');
createForm.addEventListener('submit', (e) => {
    e.preventDefault();
    //add code related to adding goals
});













//logout function
const logout = document.querySelector('whatever the logout button is');
logout.addEventListener('click', (e) => {
    e.preventDefault();
    auth.signOut().then(() => {});
});

//login function (not google rn)
const email = 'arricktee2002@yahoo.com';
const password = 'password';

auth.signInWithEmailAndPassword(email, password).then(cred => {});