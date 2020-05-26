CREATE TABLE "bookmarker"."users" (
    "id" text NOT NULL,
    "name" text NOT NULL,
    "created_at" timestamp with time zone,
    "last_seen" timestamp with time zone,
    CONSTRAINT users PRIMARY KEY (id),
)

CREATE OR REPLACE VIEW "bookmarker"."online_users" AS
 SELECT users.name AS name,
    users.last_seen
   FROM bookmarker.users
  WHERE (users.last_seen >= (now() - '00:00:30'::interval));