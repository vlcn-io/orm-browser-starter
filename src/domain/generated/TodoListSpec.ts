// SIGNED-SOURCE: <0eabda271f9dbed3f8c57965ce7c5a1c>
/**
 * AUTO-GENERATED FILE
 * Do not modify. Update your schema and re-generate for changes.
 */
import { Context } from "@aphro/runtime-ts";
import { SID_of } from "@aphro/runtime-ts";
import { NodeSpecWithCreate } from "@aphro/runtime-ts";
import { default as TodoSpec } from "./TodoSpec.js";
import TodoList from "../TodoList.js";
import { Data } from "./TodoListBase.js";

const TodoListSpec: NodeSpecWithCreate<TodoList, Data> = {
  type: "node",
  createFrom(ctx: Context, data: Data) {
    const existing = ctx.cache.get(data["id"], "todomvc", "todolist");
    if (existing) {
      return existing;
    }
    const result = new TodoList(ctx, data);
    ctx.cache.set(data["id"], result, "todomvc", "todolist");
    return result;
  },

  primaryKey: "id",

  storage: {
    engine: "sqlite",
    db: "todomvc",
    type: "sql",
    tablish: "todolist",
  },

  outboundEdges: {
    todos: {
      type: "foreignKey",
      sourceField: "id",
      destField: "listId",
      get source() {
        return TodoListSpec;
      },
      get dest() {
        return TodoSpec;
      },
    },
  },
};

export default TodoListSpec;
