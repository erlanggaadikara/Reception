const fastify = require("fastify")();

fastify.register(require("fastify-postgraphile"), {
  pool: {
    user: "postgres",
    host: "localhost",
    database: "postgres",
    password: "password",
    port: 5432,
  },
  schemas: "public",
  middleware: false,
});

fastify.get("/", async (req, reply) => {
  return reply.graphql(req.body.query, req.body.variables);
});

fastify.listen(3100);
