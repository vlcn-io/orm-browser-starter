-- SIGNED-SOURCE: <33f75376e9470c4f0610dc68e13cf74a>
CREATE TABLE
  IF NOT EXISTS "todo" (
    "id" bigint NOT NULL,
    "listId" bigint NOT NULL,
    "text" text NOT NULL,
    "completed" boolean NOT NULL,
    primary key ("id")
  )