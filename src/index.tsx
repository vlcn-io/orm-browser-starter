import * as React from "react";
import { createRoot } from "react-dom/client";

import { openDbAndCreateResolver } from "@aphro/wa-sqlite-connector";
import { anonymous, bootstrap, sql } from "@aphro/runtime-ts";
import TodoTable from "./domain/generated/Todo.sqlite.sql";
import TodoListTable from "./domain/generated/TodoList.sqlite.sql";
import { context, Context, sid } from "@aphro/runtime-ts";
import App from "./App.js";
import TodoList from "./domain/TodoList.js";

openDbAndCreateResolver("todomvc")
  .then((resolver) => {
    const ctx = context(anonymous(), resolver);
    start(ctx);
  })
  .catch((e) => console.error(e));

async function setup(ctx: Context): Promise<TodoList> {
  await bootstrap.createAutomigrateIfExists(ctx.dbResolver, {
    sqlite: {
      todomvc: {
        TodoList: TodoListTable,
        Todo: TodoTable,
      },
    },
  });

  let list = await TodoList.queryAll(ctx).genOnlyValue();
  if (list == null) {
    list = TodoList.create(ctx, {
      id: sid("aaaa"),
      filter: "all",
      editing: null,
    }).save().optimistic;
  }

  return list;
}

async function start(ctx: Context) {
  const list = await setup(ctx);

  const root = createRoot(document.getElementById("container")!);
  root.render(<App list={list} />);
}
