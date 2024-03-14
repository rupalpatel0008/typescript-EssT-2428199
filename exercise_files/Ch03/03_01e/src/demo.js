function getBirthDate(contact) {
    if (typeof contact.birthDate === "number") {
        return new Date(contact.birthDate);
    }
    else if (typeof contact.birthDate === "string") {
        return Date.parse(contact.birthDate);
    }
    else {
        return contact.birthDate;
    }
}
var primaryContact = {
    id: 12345,
    name: "Jamie Johnson",
    status: "active"
};