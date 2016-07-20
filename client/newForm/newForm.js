Template.newForm.events({
    'submit form': function(event, template) {
        event.preventDefault();
        const target = event.target;
        const firstName = target.firstName.value;
        const lastName = target.lastName.value;
        const quote = target.quote.value;
        const gender = target.gender.value;
        const githubLink = target.githubLink.value;

        console.log(firstName);
    }
});