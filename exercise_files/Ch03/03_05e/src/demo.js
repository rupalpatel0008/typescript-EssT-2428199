var x = { name: "Wruce Bayne" };
x.number = 1234;
x.active = true;
x.log = function () { return console.log("awesome!"); };
function searchContacts(contacts, query) {
    return contacts.filter(function (contact) {
        for (var _i = 0, _a = Object.keys(contact); _i < _a.length; _i++) {
            var property = _a[_i];
            // get the query object for this property
            var propertyQuery = query[property];
            // check to see if it matches
            if (propertyQuery && propertyQuery.matches(contact[property])) {
                return true;
            }
        }
        return false;
    });
}
var filteredContacts = searchContacts([ /* contacts */], {
    id: { matches: function (id) { return id === 123; } },
    name: { matches: function (name) { return name === "Carol Weaver"; } },
});
