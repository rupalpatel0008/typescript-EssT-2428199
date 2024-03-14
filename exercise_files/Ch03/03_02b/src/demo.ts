type ContactName = string;
type ContactStatus = "active" | "inactive" | "new";
type ContactBirthDate = Date | number | string;

interface Contact {
  id: number;
  name: ContactName;
  birthDate?: ContactBirthDate;
  status?: ContactStatus;
  email: string;
}

let primaryContact: Contact = {
  id: 12345,
  name: "Jamie Johnson",
  status: "active",
};

type ContactFields = keyof Contact;

function getValue<T, U extends T>(source: T, proertyName: U) {
  return source[proertyName];
}

const value = getValue({ min: 1, max: 10 }, "");
