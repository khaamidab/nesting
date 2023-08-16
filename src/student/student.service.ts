import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, FindOneOptions } from 'typeorm';
import { Student } from './entities/student.entity';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';

@Injectable()
export class StudentService {
  constructor(
    @InjectRepository(Student)
    private studentRepository: Repository<Student>,
  ) { }

  /**
   * Creates a new student.
   *
   * @param {CreateStudentDto} createStudentDto - The data needed to create a student.
   * @return {Promise<Student>} The newly created student.
   */
  async create(createStudentDto: CreateStudentDto): Promise<Student> {
    const student = this.studentRepository.create(createStudentDto);
    return this.studentRepository.save(student);
  }

  /**
   * Finds all the students in the database.
   *
   * @return {Promise<Student[]>} An array of students.
   */
  async findAll(): Promise<Student[]> {
    return this.studentRepository.find();
  }

  /**
   * Finds a student by their ID.
   *
   * @param {number} id - The ID of the student.
   * @return {Promise<Student>} A promise that resolves to the student found.
   */
  async findOne(id: number): Promise<Student> {
    const options: FindOneOptions<Student> = { where: { id } };
    return this.studentRepository.findOne(options);
  }

  /**
   * Updates a student record in the database.
   *
   * @param {number} id - The ID of the student record to update.
   * @param {UpdateStudentDto} updateStudentDto - The data to update the student record with.
   * @return {Promise<Student>} - A promise that resolves to the updated student record.
   */
  async update(id: number, updateStudentDto: UpdateStudentDto): Promise<Student> {
    const student = await this.findOne(id);
    this.studentRepository.merge(student, updateStudentDto);
    return this.studentRepository.save(student);
  }

  /**
   * Removes a record from the database.
   *
   * @param {number} id - The ID of the record to be removed.
   * @return {Promise<void>} A promise that resolves when the record is successfully removed.
   */
  async remove(id: number): Promise<void> {
    await this.studentRepository.delete(id);
  }
}

export default StudentService; // add this line
