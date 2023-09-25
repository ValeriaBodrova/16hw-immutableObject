const Role = Object.freeze({
    Admin: 'admin',
    Editor: 'editor',
    Reader: 'reader',
    SuperAdmin: 'superadmin'
  });

  class User {
    constructor(id, firstName, lastName, role) {
      this.id = id;
      this.firstName = firstName;
      this.lastName = lastName;
  
      // Встановлення незмінної властивості 'role'
      Object.defineProperty(this, 'role', {
        value: role,
        writable: false,  
        enumerable: true, 
        configurable: false 
      });
    }
  }

const editor = new User(1, 'John', 'Doe', Role.Admin);
console.log(editor.role); 
editor.role === Role.Admin; 
editor.role = false; 
delete editor.role;
console.log(editor.role); 
