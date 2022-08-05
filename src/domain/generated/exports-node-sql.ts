// SIGNED-SOURCE: <5cfc16eee05ef13cb14a1570b0e4ca91>
/**
 * AUTO-GENERATED FILE
 * Do not modify. Update your schema and re-generate for changes.
 */

// @ts-ignore
import * as path from "path";
// @ts-ignore
import * as fs from "fs";

// @ts-ignore
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const [Todo, TodoList] = await Promise.all([
  fs.promises.readFile(path.join(__dirname, "Todo.sqlite.sql"), {
    encoding: "utf8",
  }),
  fs.promises.readFile(path.join(__dirname, "TodoList.sqlite.sql"), {
    encoding: "utf8",
  }),
]);

export default {
  sqlite: {
    todomvc: {
      Todo,
      TodoList,
    },
  },
};
