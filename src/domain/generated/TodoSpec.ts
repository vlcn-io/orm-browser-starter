// SIGNED-SOURCE: <e1946be1e97275f114ae860025576688>
/**
 * AUTO-GENERATED FILE
 * Do not modify. Update your schema and re-generate for changes.
 */
import { Context } from "@aphro/runtime-ts";
import { SID_of } from "@aphro/runtime-ts";
import { NodeSpecWithCreate } from "@aphro/runtime-ts";
import Todo from "../Todo.js";
import { Data } from "./TodoBase.js";

const TodoSpec: NodeSpecWithCreate<Todo, Data> = {
  type: "node",
  createFrom(ctx: Context, data: Data) {
    const existing = ctx.cache.get(data["id"], "todomvc", "todo");
    if (existing) {
      return existing;
    }
    const result = new Todo(ctx, data);
    ctx.cache.set(data["id"], result, "todomvc", "todo");
    return result;
  },

  primaryKey: "id",

  storage: {
    engine: "sqlite",
    db: "todomvc",
    type: "sql",
    tablish: "todo",
  },

  outboundEdges: {},
};

export default TodoSpec;
