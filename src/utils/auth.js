import notifications from "./notifications";

class Auth {
    constructor() {
      console.log(localStorage.getItem("logged"))
      
      if (localStorage.getItem("logged") === null){
        this.authenticated = false;
      } else {
        this.authenticated = true;
      }
    }
  
    login(user, callback) {
      this.authenticated = true;
      localStorage.setItem("logged", JSON.stringify(user))
      notifications.success("Bem-vindo!")
      console.log(user)
      callback();
    }
  
    logout(callback) {
      this.authenticated = false;
      localStorage.removeItem("logged")
      notifications.success("Você saiu do sistema.")
      callback();
    }
  
    isAuthenticated() {
      return this.authenticated;
    }
  }
  
  export default new Auth();