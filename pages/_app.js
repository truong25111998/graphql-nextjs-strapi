//css cuả antd
import "antd/dist/antd.css";
import { ApolloClient, ApolloLink } from "apollo-boost";
import { onError } from "apollo-link-error";
import { ApolloProvider } from "react-apollo";
import { Provider } from "mobx-react";
import UserStore from "./../stores/UserStore";
//khai báo API để sử dụng graphql
//const client = new ApolloClient({ uri: "http://localhost:1337/graphql" });

const client = new ApolloClient({
  uri: "https://demo-strapi-nextjs.herokuapp.com/graphql",
  onError: ({ networkError, graphQLErrors }) => {
    console.log("graphQLErrors", graphQLErrors);
    console.log("networkError", networkError);
  },
});
export default function MyApp({ Component, pageProps }) {
  return (
    <Provider UserStore={UserStore}>
      <ApolloProvider client={client}>
        <Component {...pageProps} />
      </ApolloProvider>
    </Provider>
  );
}
