import { DATABASE } from "../database";
import { User } from "../interfaces";

class UserServices {
  async getAll() {
    const db: User[] = [];
    setTimeout(() => db.push(...DATABASE), 2000);

    return db;
  }

  async getOne(id: User["id"]) {
    const db = await this.getAll();

    return db.find((user) => user.id === id);
  }

  async register(user: User) {}

  async deleteOne(id: User["id"]) {
    const user = await this.getOne(id);

    if (!user) return;

    const allUsers = await this.getAll();

    const filterDB = allUsers.filter((n) => n.id !== user.id);
    
    return
  }
}

const UserService = new UserServices();

export default UserService;
