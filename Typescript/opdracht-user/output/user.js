"use strict";
class User {
    constructor(firstName, lastName, email) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.password = this.generatePassword();
    }
    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
    resetPassword() {
        this.password = this.generatePassword();
        console.log("Wachtwoord is succesvol gereset.");
    }
    showUserInfo() {
        console.log(`Naam: ${this.getFullName()}`);
        console.log(`Email: ${this.email}`);
    }
    setPassword(newPassword) {
        if (this.isValidPassword(newPassword)) {
            this.password = newPassword;
            console.log('Wachtwoord is succesvol ingesteld.');
        }
        else {
            console.log('Wachtwoord voldoet niet aan de vereisten.');
        }
    }
    isValidPassword(password) {
        const regex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@#$%])[A-Za-z\d@$#%]{8,}$/;
        return regex.test(password);
    }
    generatePassword() {
        const letters = 'abcdefghijklmnopqrstuvwxyz';
        const numbers = '0123456789';
        const specialCharacters = '!@#$%^&*()';
        let password = '';
        password += letters.charAt(Math.floor(Math.random() * letters.length));
        password += numbers.charAt(Math.floor(Math.random() * numbers.length));
        password += specialCharacters.charAt(Math.floor(Math.random() * specialCharacters.length));
        const allCharacters = letters + numbers + specialCharacters;
        const length = Math.floor(Math.random() * 6) + 5;
        for (let i = 0; i < length; i++) {
            password += allCharacters.charAt(Math.floor(Math.random() * allCharacters.length));
        }
        return password;
    }
}
const user1 = new User('John', 'Doe', 'john.doe@example.com');
const user2 = new User('Jane', 'Smith', 'jane.smith@example.com');
// Log user info van user 1
console.log("Log user info:");
user1.showUserInfo();
console.log("----------");
// Log user info van user 2
console.log("Log user info:");
user2.showUserInfo();
console.log("----------");
// Log volledige naam van user 1
console.log("getFullName");
console.log(user1.getFullName());
console.log("----------");
// Reset password
user1.resetPassword();
console.log("----------");
// Stel wachtwoord in
user1.setPassword("NewPass@123");
console.log("----------");
// Test van een ongeldig wachtwoord
user1.setPassword("short");
