var currentUser = {
    id: 1234,
    roles: ["ContactEditor"],
    isInRole: function (role) {
        return this.roles.contains(role);
    }
};
var ContactRepository = /** @class */ (function () {
    function ContactRepository() {
        this.contacts = [];
    }
    ContactRepository.prototype.getContactById = function (id) {
        console.trace("ContactRepository.getContactById: BEGIN");
        if (!currentUser.isInRole("ContactViewer")) {
            throw Error("User not authorized to execute this action");
        }
        var contact = this.contacts.find(function (x) { return x.id === id; });
        console.debug("ContactRepository.getContactById: END");
        return contact;
    };
    ContactRepository.prototype.save = function (contact) {
        console.trace("ContactRepository.save: BEGIN");
        if (!currentUser.isInRole("ContactEditor")) {
            throw Error("User not authorized to execute this action");
        }
        var existing = this.getContactById(contact.id);
        if (existing) {
            Object.assign(existing, contact);
        }
        else {
            this.contacts.push(contact);
        }
        console.debug("ContactRepository.save: END");
    };
    return ContactRepository;
}());
