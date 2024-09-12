import { User } from "@prisma/client";
import prisma from "../utils/lib/prismaClient";

const findByUsername = async (username: string): Promise<User | null>  => {
  return await prisma.user.findUnique({where: {username}})
}

const findByEmail = async (email: string): Promise<User | null> => {
  return await prisma.user.findUnique({where: {email}})
}

const createUser = async (username: string, email: string, password: string): Promise<User>  => {
  return await prisma.user.create({data: {username, email, password}})
}

export default {
  findByUsername,
  findByEmail,
  createUser
}