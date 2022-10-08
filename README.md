# Aphrodite Browser Starter

This provides a local-first in browser example project that uses `Aphrodite`.<br/>
See also -- `Aphrodite` in an [interactive reactive notebook](https://observablehq.com/@tantaman/aphrodite-chinook) (observablehq).

**[Launch the app!](https://aphrodite-examples.pages.dev/todo-mvc/)**

# Code Overview

## Schema

The schema that defines the data model is [here](https://github.com/tantaman/aphrodite-browser-starter/blob/main/src/domain.aphro) (reproduced below)

```typescript
engine: sqlite
db: todomvc

Todo as Node {
  id: ID<Todo>
  listId: ID<TodoList>
  text: NaturalLanguage
  created: Timestamp
  modified: Timestamp
  completed: Timestamp | null
} 

TodoList as Node {
  id: ID<TodoList>
  filter: Enumeration<all | active | completed>
  editing: ID<Todo> | null
} & OutboundEdges {
  todos: Edge<Todo.listId>
}
```

## Live Queries

The UI is updated via live queries. Whenever a modification is made to a model through a mutator, that update is reflected back into the UI.

Live queries are [here](https://github.com/aphrodite-sh/aphrodite-browser-starter/blob/df948e7ed0252cb42b663d6a57084363f53843b5/src/App.tsx#L195-L203).

```typescript
const activeTodos = useQuery(() =>
  list.queryTodos().whereCompleted(P.equals(false))
).data;
const completeTodos = useQuery(() =>
  list.queryTodos().whereCompleted(P.equals(true))
).data;
const allTodos = useQuery(() => list.queryTodos(), [], {
  on: UpdateType.CREATE_OR_DELETE,
}).data;
```


# Getting The Code

Either open in [GitPod](https://gitpod.io/#git@github.com:tantaman/aphrodite-browser-starter.git) or follow the steps below --

First, clone this repository

```bash
git clone git@github.com:tantaman/aphrodite-browser-starter.git
```

Next, cd to `aphrodite-browser-starter` and install dependencies.

```bash
cd aphrodite-browser-starter
npm install
```

The command to build and run the "demo app" are:

```bash
npm run serve
```

If you change the schema and want to re-generate the generated code, run

```bash
npm run aphro
```

This "demo app" is an implementation of [TodoMVC](https://todomvc.com/) using `Aphrodite` & `React` --
