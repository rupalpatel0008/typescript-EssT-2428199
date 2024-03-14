function clone(source) {
    return Object.apply({}, source);
}
var a = { id: 123, name: "Homer Simpson" };
var b = clone(a);
