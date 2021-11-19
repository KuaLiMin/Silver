async function submitForm() {
    console.log("abc")
        // const category = InputEvent('Goals Category').value;
        // const gamount = InputEvent('gamount').value;
        // const gduration = InputEvent('GDuration').value;
        // const gdescription = InputEvent('description').value;

    // db.collection('users').doc(cred.user.uid).doc(holiday).set({
    //     goal: '1000',
    //     duration: '10122020',
    //     description: 'please'
    //})
    const data = {
        goal: '$1000',
        duration: '10122020',
        description: 'Holiday to Japan'
    }
    db
        .collection('users')
        .doc('cwZaxW9b8jWFWa8W8M5iLmhbe7l2')
        .collection('goals')
        .doc('holiday')
        .set(data)
        .then(() => {
            console.log("success")
        }).catch((err) => {
            console.log(err)
        })
    console.log('done!');

}

function goBack() {
    window.location.replace("savinggoals.html");
}