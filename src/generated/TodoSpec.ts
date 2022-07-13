// SIGNED-SOURCE: <8314ddfebf23e8aaf9afc1d26bfecc5a>
/**
 * AUTO-GENERATED FILE
 * Do not modify. Update your schema and re-generate for changes.
 */
import { Context } from "@aphro/runtime-ts";
import { SID_of } from "@aphro/runtime-ts";
import { NodeSpecWithCreate } from "@aphro/runtime-ts";
import Todo from "./Todo.js";
import { Data } from "./Todo.js";

const spec: NodeSpecWithCreate<Todo, Data> = {
  type: "node",
  createFrom(ctx: Context, data: Data) {
    const existing = ctx.cache.get(data["id"], Todo.name);
    if (existing) {
      return existing;
    }
    const result = new Todo(ctx, data);
    ctx.cache.set(data["id"], result);
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

export default spec;
