interface Person {
  id: number;
  name: string;
  address: string;
  phone: string;
}

const STORAGE_KEY = 'people';

export const getPeople = (): Person[] => {
  const storedPeople = localStorage.getItem(STORAGE_KEY);
  return storedPeople ? JSON.parse(storedPeople) : [];
};

export const savePeople = (people: Person[]) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(people));
};
