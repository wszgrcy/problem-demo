import { Client, Pool } from 'pg';
import { name, password } from './config';
export async function main() {
  const client = new Client({ user: name, password: password, });
  await client.connect();

  await client.query(
    `CREATE TABLE "test-scope"."child" ("id" SERIAL NOT NULL, CONSTRAINT "PK_4609b9b323ca37c6bc435ec4b6b" PRIMARY KEY ("id"))`
  );
  await client.query(`INSERT INTO "test-scope"."child" DEFAULT VALUES RETURNING "id"`);
  await client.query('START TRANSACTION');

  await client.query('DELETE FROM "test-scope"."child" WHERE "id" = 1');
  let res = await client.query('SELECT "Child"."id" AS "Child_id" FROM "test-scope"."child" "Child"');
  console.log(res.rows); // empty array
  res = await client.query('COMMIT');
  await client.end();
}

main();
