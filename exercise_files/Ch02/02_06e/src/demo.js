function clone(source) {
    return Object.apply({}, source);
}
var a = { id: 123, name: "Homer Simpson" };
var b = clone(a);
var dateRange = { startDate: Date.now(), endDate: Date.now() };
var dateRangeCopy = clone(dateRange);
