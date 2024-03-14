var primaryContact = {
    id: 12345,
    name: "Jamie Johnson",
    status: "active"
};
var field = "status";
function getValue(source, propertyName) {
    return source[propertyName];
}
var value = getValue({ min: 1, max: 34 }, "max");
