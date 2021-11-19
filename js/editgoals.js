var formId = $("form").attr("id");
if (formId = 'holiday') {
    const editForm = document.querySelector('holiday');
    editForm.addEventListener('edit', (e) => { e.preventDefault() });
    db.collection('users').doc(cred.user.uid.holiday).set({
        goal: editForm['goalamt'].value,
        duration: editForm['dur'].value,
        description: editForm['description'].value
    }).then(() => {
        //what happens after editing
        console.log("Database updated")
    })
} else if (formId = 'retirement') {
    const editForm = document.querySelector('holiday');
    editForm.addEventListener('edit', (e) => { e.preventDefault() });
    db.collection('users').doc(cred.user.uid.retirement).set({
        goal: editForm['goalamt'].value,
        duration: editForm['dur'].value,
        description: editForm['description'].value
    }).then(() => {
        //what happens after editing
        console.log("Database updated")
    })
} else if (formId = 'car') {
    const editForm = document.querySelector('holiday');
    editForm.addEventListener('edit', (e) => { e.preventDefault() });
    db.collection('users').doc(cred.user.uid.car).set({
        goal: editForm['goalamt'].value,
        duration: editForm['dur'].value,
        description: editForm['description'].value
    }).then(() => {
        //what happens after editing
        console.log("Database updated")
    })
};