import ApolloClient, { gql } from "apollo-boost";

export const client = new ApolloClient({
	uri: "http://localhost:3000",
});

export const BOOKS = gql`
	{
		User {
			id
			email
			name
		}
	}
`;
