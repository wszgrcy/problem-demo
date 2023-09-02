import { DataSource, EntitySubscriberInterface, EventSubscriber, InsertEvent, RemoveEvent } from 'typeorm';
import { Child } from './entity';
import { name, password } from './config';
async function main() {
  @EventSubscriber()
  class ChildSubscriber implements EntitySubscriberInterface<Child> {
    listenTo() {
      return Child;
    }
    beforeRemove(event: RemoveEvent<Child>): void | Promise<any> {}
    async afterRemove(event: RemoveEvent<Child>): Promise<any> {
      let list = await c.find();
      console.log('afterRemove', list);
    }
  }
  let i = new DataSource({
    type: 'postgres',
    schema: 'test-scope',
    useUTC: true,
    entities: [Child],
    synchronize: true,
    host: '127.0.0.1',
    port: 5432,
    username: name,
    password: password,
    subscribers: [ChildSubscriber],
    logging: true,
  });
  await i.initialize();
  let c = i.getRepository(Child);
  let child = await c.save(c.create({}));
  await c.remove(c.create({ id: child.id }));
  let list = await c.find();
  console.log('end', list);
}
main();
