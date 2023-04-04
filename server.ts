import { Application, send } from "https://deno.land/x/oak/mod.ts";

const app = new Application();

app.use(async (context) => {
  await send(context, context.request.url.pathname, {
    root: `${Deno.cwd()}./dist`,
    index: "index.html",
  });
});

app.listen({ port: 8080 });
console.log(`Listening on localhost:${8080}`);
