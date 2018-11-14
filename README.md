# GraphQL API example

This is only a Proof of Concept. The app does not work.

The intention of this repository is to show up a GraphQL API using the Gateway pattern for microservices.

In this example, services API are local (look at `src/apis` folder) and they use a shared database for now in order to simplify things. In the future, each service, could have its own database and each service could be deployed separately from the rest.

Because we are using a shared database, a service has one private database table only accessed by its service, this is known as "Private-tables-per-service". In case service A wants to access to service B data, service A has to call service B through its API and not accessing to the database table.

In the database, there is no relations because the intention is to avoid joins. All logic and relationships is in the app.

For example, Facebook main app has no joins. Other large companies use this technique at scale to speed up development and save money.

> Joins require the DB to load rows from multiple tables, then filter and process them before returning the joined rows to the app.
>
> Not only does that consume CPU and RAM on the DB, but it requires that both tables exist on the same database server, which may not always be true.
>
> Marco Arment

Source: https://twitter.com/marcoarment/status/1062362881465950208
