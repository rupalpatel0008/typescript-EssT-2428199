interface Contact {
  id: number;
  name: string;
}

function clone(source: Contact): Contact {
  return Object.apply({}, source);
}

const a: Contact = {
  id: 1,
  name: "John",
};

const b = clone(a);
