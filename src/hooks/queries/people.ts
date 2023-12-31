// import {gql} from "../__generated__";
import {gql, useQuery} from "@apollo/client";

const GET_ALL_PEOPLE = gql(`
    query GetAllPeople($first: Int) {
        allPeople(first: $first) {
            totalCount
            people {
                id
                name
                gender
                birthYear
                hairColor
            }
        }
    }
`);

const GET_PERSON_BY_ID = gql(`
    query Person($id: ID) {
        person(id: $id) {
            name
            gender
            birthYear
            hairColor
        }
    }
`);

export const GetAllPeople = (count: number) => {
    return useQuery(GET_ALL_PEOPLE, {
        variables: {
            first: count
        },
        updateQuery: (prev, { fetchMoreResult }) => {
            if (!fetchMoreResult) return prev;

            return {
                allPeople: {
                    ...fetchMoreResult.allPeople,
                    people: [
                        ...prev.allPeople.people,
                        ...fetchMoreResult.allPeople.people
                    ]
                }
            };
        }
    });
}

export const GetPersonById = (id: string | undefined) => {
    return useQuery(GET_PERSON_BY_ID, {
        variables: {
            id
        }
    })
}
