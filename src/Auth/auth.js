class Auth {
    constructor() {
      console.log(localStorage.getItem("logged"))
      
      if (localStorage.getItem("logged") === null){
        this.authenticated = false;
      } else {
        this.authenticated = true;
      }
    }
  
    login(user, cb) {
      this.authenticated = true;
      localStorage.setItem("logged", JSON.stringify(user))
      console.log(user)
      cb();
    }
  
    logout(cb) {
      this.authenticated = false;
      localStorage.removeItem("logged")
      cb();
    }
  
    isAuthenticated() {
      return this.authenticated;
    }
  }
  
  export default new Auth();