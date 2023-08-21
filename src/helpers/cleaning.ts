import {Person} from "../hooks/__generated__/graphql";

export const getPersonDataWithoutTypename = (personData: Partial<Person>) => (
    Object.keys(personData).filter((person) => !person.includes("__"))
)
