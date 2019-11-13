import Api from "@/services/Api";

export default {
  updateUser(user) {
    return Api().put("user", user);
  },
  deleteUser(user) {
    return Api().destroy("user", user);
  }
};
