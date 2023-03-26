import { Entity, Column, PrimaryGeneratedColumn, Unique } from 'typeorm';

@Entity()
@Unique(['id', 'email'])
export class Student {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  @Unique(['email'])
  email: string;

  @Column()
  age: number;

  @Column()
  city: string;

  @Column()
  password: string; // add this line

  // add getters and setters for password if needed
}

export default Student; // add this line
