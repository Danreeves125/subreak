import { ApolloClient, createHttpLink, InMemoryCache, from } from "@apollo/client"
import { setContext } from "@apollo/client/link/context"
import { onError } from "apollo-link-error"

const httpLink = createHttpLink({
    uri: `${process.env.WORDPRESS_STAGING_API_ENDPOINT}`,
    credentials: "",
})

const authLink = setContext((_, { headers }) => {
    return {
        headers: {
            ...headers,
            authorization: "",
        },
    }
})

const errorLink = onError(({ graphQLErrors, networkError }) => {
    if (graphQLErrors) graphQLErrors.forEach(({ message, locations, path, debugMessage }) => console.log(`[GraphQL error]: Message: ${message}, Location: ${JSON.stringify(locations)}, Path: ${path}, Debug: ${debugMessage}`))

    if (networkError) console.log(`[Network error]: ${networkError}`)
})

const client = new ApolloClient({
    link: from([errorLink, authLink.concat(httpLink)]),
    cache: new InMemoryCache(),
})

export default client
