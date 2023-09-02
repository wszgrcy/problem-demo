# How to repeat the problem?
- npm i
- start postgresql (15.3)
- change `name` and `password` as `config.ts`
- npm start

# typeorm debug
```log
query: SELECT * FROM current_database()
query: SELECT * FROM current_schema()
query: SELECT version();
query: START TRANSACTION
query: SELECT * FROM current_schema()
query: SELECT * FROM current_database()
query: SELECT "table_schema", "table_name" FROM "information_schema"."tables" WHERE ("table_schema" = 'test-scope' AND "table_name" = 'child')
query: SELECT * FROM "information_schema"."tables" WHERE "table_schema" = 'test-scope' AND "table_name" = 'typeorm_metadata'
query: CREATE TABLE "test-scope"."child" ("id" SERIAL NOT NULL, CONSTRAINT "PK_4609b9b323ca37c6bc435ec4b6b" PRIMARY KEY ("id"))
query: COMMIT
query: START TRANSACTION
query: INSERT INTO "test-scope"."child" DEFAULT VALUES RETURNING "id"
query: COMMIT
query: SELECT "Child"."id" AS "Child_id" FROM "test-scope"."child" "Child" WHERE "Child"."id" IN ($1) -- PARAMETERS: [1]
query: START TRANSACTION
query: DELETE FROM "test-scope"."child" WHERE "id" = $1 -- PARAMETERS: [1]
query: SELECT "Child"."id" AS "Child_id" FROM "test-scope"."child" "Child"
afterRemove [ Child { id: 1 } ]
query: COMMIT
query: SELECT "Child"."id" AS "Child_id" FROM "test-scope"."child" "Child"
end []
```

# pg 
- empty array