// SIGNED-SOURCE: <dd45d012a99455049e6e1984f3e8faf1>
/**
 * AUTO-GENERATED FILE
 * Do not modify. Update your schema and re-generate for changes.
 * For partially generated files, place modifications between the generated `BEGIN-MANUAL-SECTION` and
 * `END-MANUAL-SECTION` markers.
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
