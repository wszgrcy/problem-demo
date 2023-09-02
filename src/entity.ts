import { Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity('child')
export class Child {
  @PrimaryGeneratedColumn()
  id!: number;
}
