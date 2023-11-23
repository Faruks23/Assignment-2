import { Student } from "./student.interface";
import { StudentModal } from "./student_model";

const createStudentDB = async (student:Student) => {
  const result = await StudentModal.create(student)
  console.log(result);
  return result;
   
}

const getAllStudentDB = async () => { 
  const result = await StudentModal.find()
  return result

}

const getSingleStudentDB = async (id:string) => {
  const result = await StudentModal.findOne({ id: id })
  return result
}

const deleteStudentDB = async (id: string) => { 
  const result = await StudentModal.deleteOne({ id: id })
   return result
}
 
export const StudentService = {
  createStudentDB,
  getAllStudentDB,
  getSingleStudentDB,
  deleteStudentDB,
}