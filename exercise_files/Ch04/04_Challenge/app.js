function query(items, query // <--- replace this!
) {
    return items.filter(function (item) {
        // iterate through each of the item's properties
        for (var _i = 0, _a = Object.keys(item); _i < _a.length; _i++) {
            var property = _a[_i];
            // get the query for this property name
            var propertyQuery = query[property];
            // see if this property value matches the query
            if (propertyQuery && propertyQuery(item[property])) {
                return true;
            }
        }
        // nothing matched so return false
        return false;
    });
}
var matches = query([
    { name: "Ted", age: 12 },
    { name: "Angie", age: 31 }
], {
    name: function (name) { return name === "Angie"; },
    age: function (age) { return age > 30; }
});
