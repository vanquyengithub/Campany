'use server';
import * as z from "zod";
import { db } from "@/lib/db";
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { CreateUserSchema } from '@/schemas';
import bcrypt from "bcrypt";
import { getUserByEmail, getUserById } from "@/data/user";

export async function deleteUser(id: string) {
    try {
      await db.user.delete({
        where: {
          id
        },
      })
      revalidatePath('/dashboard/user');
      return { success: 'Deleted User.' };
    } catch (error) {
      return { error: 'Database Error: Failed to Delete User.' };
    }
}

export async function createUser(values: z.infer<typeof CreateUserSchema>) {
    const validatedFields = CreateUserSchema.safeParse(values);

        if (!validatedFields.success) {
            return { error: "Invalid fields!" };
        }

        const { email ,name, password,role,isTwoFactorEnabled } = validatedFields.data;
        const hashedPassword = await bcrypt.hash(password, 10);

        const existingUser = await getUserByEmail(email);

        if (existingUser) {
            return { error: "Email already in use!" };
        }
      try {
        await db.user.create({
            data: {
                name,
                email,
                role,
                isTwoFactorEnabled,
                passWord: hashedPassword
            },
        });
      } catch (error) {
        return {
          error: 'Database Error: Failed to Create User.'
        };
      }
      revalidatePath('/dashboard/user');
      redirect('/dashboard/user');
}

export async function updateUser(id: string, values: z.infer<typeof CreateUserSchema>) {
    const { name, password,email,role,isTwoFactorEnabled } = CreateUserSchema.parse({
          name: values.name,
          password: values.password,
          email:values.email,
          role: values.role,
          isTwoFactorEnabled: values.isTwoFactorEnabled
    });
    const dbUser = await getUserById(id);
    const hashedPassword = await bcrypt.hash(values.password, 10);
    if (!dbUser) {
        return { error: "Unauthorized!" };
    }

   try {
    await db.user.update({
        where: { id: dbUser.id },
        data: {
          name,
          passWord:hashedPassword,
          email,
          role,
          isTwoFactorEnabled
        },
      });
   } catch (error) {
    return { error: 'Database Error: Failed to Update User.' };
   }
   
    revalidatePath('/dashboard/user');
    redirect('/dashboard/user');
  }