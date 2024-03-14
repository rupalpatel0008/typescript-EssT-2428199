type ContactName = string;

enum ContactStatus {
  Active = "active",
  Inactive = "inactive",
  New = "new",
}

type ContactStatusType = "active" | "inactive" | "new";

type ContactBirthDate = Date | number | string;

interface Contact {
  id: number;
  name: ContactName;
  birthDate?: ContactBirthDate;
  status?: ContactStatusType;
}

interface Address {
  line1: string;
  line2: string;
  province: string;
  region: string;
  postalCode: string;
}

type AddressableContact = Contact & Address; //creates a new type altogether

function getBirthDate(contact: Contact) {
  if (typeof contact.birthDate === "number") {
    return new Date(contact.birthDate);
  } else if (typeof contact.birthDate === "string") {
    return Date.parse(contact.birthDate);
  } else {
    return contact.birthDate;
  }
}

let primaryContact: Contact = {
  id: 12345,
  name: "Jamie Johnson",
  status: "active"
};
