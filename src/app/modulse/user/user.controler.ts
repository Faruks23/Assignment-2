import { Request, Response } from 'express'
import { UserService } from './user.service'


// create a new user 
const createUser= async (req: Request, res: Response) => {
  try {
    const { user } = req.body
    const result = await UserService.createUserDB(user)
    console.log(user, 'form student')
    if (result) {
      res.status(200).json({
        success: true,
        message: 'User created successfully',
        data: result,
      })
    }
  } catch (error) {
    res.status(404).json({
      success: false,
      message: 'user created failed',
      data: error,
    })
  }
}

// get all user form db

const getAllUser= async (req: Request, res: Response) => {
  try {
    const result = await UserService.getAllUserDB()
    res.status(200).json({
      success: true,
      message: 'User fetched successfully',
      data: result,
    })
  } catch (error) {
    res.status(404).json({
      success: true,
      message: 'user fetched failed',
      data: error,
    })
  }
}

const getSingleUser= async (req: Request, res: Response) => {
  try {
    const { UserId } = req.params
    const result = await UserService.getSingleUserDB(UserId)
    res.status(200).json({
      success: true,
      message: 'Single user fetch successfully',
      data: result,
    })
  } catch (error) {
   res.status(404).json({
     success: false,
     message: 'Single user fetch  failed',
     data: error,
   })
  }
}


const UpdateUserDB = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params
  const { data } = req.body

   const result = await UserService.UpdateUserInfo(userId,data)
    res.status(200).json({
      success: true,
      message: 'Single user fetch successfully',
      data: result,
    })
  } catch (error) {
     res.status(404).json({
     success: false,
     message: 'Single user fetch  failed',
     data: error,
   })
  }
    
}


const deleteUserDB = async (req: Request, res: Response) => {
  try {
    const { StudentId } = req.params
    const result = await UserService.deleteUserDB(StudentId)
    res.status(200).json({
      success: true,
      message: 'user delete successfully',
      data: result,
    })
  } catch (error) {
    res.status(404).json({
      success: true,
      message: 'user delete failed',
      data: error,
    })
  }
}

export const UserController = {
  createUser,
  getAllUser,
  getSingleUser,
  deleteUserDB,
  UpdateUserDB,
}
