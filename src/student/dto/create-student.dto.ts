import { IsEmail, IsNotEmpty, IsNumber, IsString } from 'class-validator';

// This class represents the data transfer object (DTO) used to create a new student.

export class CreateStudentDto {
  // The name of the student.
  @IsNotEmpty()
  @IsString()
  name: string;

  // The email address of the student.
  @IsNotEmpty()
  @IsEmail()
  email: string;

  // The age of the student.
  @IsNotEmpty()
  @IsNumber()
  age: number;

  // The city where the student resides.
  @IsNotEmpty()
  @IsString()
  city: string;

  // The password for the student's account.
  @IsNotEmpty()
  @IsString()
  password: string;
}

