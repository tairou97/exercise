import User from "../model/User.js";
import bcrypt from "bcrypt";

async function createAdminAccunt() {
  try {
    const existingAdmin = await User.findOne({
      email: "admin@tairou.com",
    });
    if (!existingAdmin) {
      const newAdmin = await User.create({
        name: "Admin",
        email: "admin@tairou.com",
        password: await bcrypt.hash("admin", 10),
        role: "admin",
      });
      console.log("Admin-Account erfolgreich erstellt:", newAdmin);
    } else {
      console.log("admin already exist");
    }
  } catch (error) {
    console.log(error);
  }
}
export default createAdminAccunt;
