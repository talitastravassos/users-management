import Swal from 'sweetalert2'

class Notification {

    Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000
    })
  
    success(title) {
        this.Toast.fire({
            type: 'success',
            title: title
        })  
    }
  
    error(title) {
        this.Toast.fire({
            type: 'error',
            title: title
        }) 
    }
  }
  
  export default new Notification();