### Export schema

Export GraphQL schema to GraphQL or JSON format:

```
gq <endpoint> --header="x-hasura-admin-secret:<value>" --introspect > schema.graphql

# json
gq <endpoint> --header="x-hasura-admin-secret:<value>" --introspect --format json > schema.json
```
