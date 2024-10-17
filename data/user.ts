import { db } from "@/lib/db";

export const getUserByEmail = async (email?: string) => {
  try {
    const user = await db.user.findUnique({ where: { email } });

    return user;
  } catch (error) {
    return null;
  }
};

export const getUserById = async (id?: string) => {
  try {
    const user = await db.user.findUnique({ where: { id } });

    return user;
  } catch (error) {
    return null;
  }
};

export const getToltalUser = async () =>{
  try {
      const countUser = await db.user.count({})
      return countUser;
  } catch (error) {
      console.log(error);
  }
}

export const getFilteredUsers = async(query?: string,page?:number) => {
  let users;

  try {
    if(!query){
      users = await db.user.findMany({
        skip: page ? (page - 1)*10 : 1,
        take : 10,
        include: {
            accounts : true
        }
    })
      // if(!currentPage){
      //   users = await fetch("http://localhost:8080/user", { cache: "no-cache" });

      // }else{
      //   users = await fetch(`http://localhost:8080/user/page=${currentPage}`, { cache: "no-cache" });
      // }
    }
    else {
      users = await db.user.findMany({
        skip: page ? (page - 1)*10 : 1,
        take : 10,
        include: {
            accounts : true
        },
        where:{
            name: {
                contains: query,
            }
        }

    })
  }
  
  return users;
    
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch user.');
  }
}