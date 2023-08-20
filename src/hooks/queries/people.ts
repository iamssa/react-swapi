// import {gql} from "../__generated__";
import {gql, useQuery} from "@apollo/client";

const GET_ALL_PEOPLE = gql(`
    query GetAllPeople($first: Int) {
        allPeople(first: $first) {
            totalCount
            people {
                id
                name
                mass
                birthYear
            }
        }
    }
`);

const GET_PERSON_BY_ID = gql(`
    query Person($id: ID) {
        person(id: $id) {
            gender
            birthYear
            created
            hairColor
        }
    }
`);

export const GetAllPeople = (count: number) => {
    return useQuery(GET_ALL_PEOPLE, {
        variables: {
            first: count
        }
    });
}

export const GetPersonById = (id: string) => {
    return useQuery(GET_PERSON_BY_ID, {
        variables: {
            id
        }
    })
}
