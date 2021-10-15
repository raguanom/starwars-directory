import { gql } from "@apollo/client";

export const GET_PEOPLE = gql`
  query people ($pageNumber: Int!){
    people(pageNumber: $pageNumber) {
      name
      height
      mass
      gender
      homeworld
    }
  }
`;

export const GET_PERSON_BY_NAME = gql`
query person ($personName: String!){
    person(personName: $personName) {
        name 
        height
        mass
        gender
        homeworld
  }
}
`;