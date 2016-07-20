Template.bCard.helpers({
    firstName: function() {
        return Session.get('firstName');
    }
});
Template.bCard.helpers({
    lastName: function() {
        return Session.get('lastName');
    }
});

Template.bCard.helpers({
    quote: function() {
        return Session.get('quote');
    }
});

Template.bCard.helpers({
    githubLink: function () {
        return Session.get('githubLink');
    }
});
