function isStrongPassword(password) {
  // Check if the password is at least 8 characters long
  if (password.length < 8) {
    return false;
  }

  // Check if the password contains the string "password"
  if (password.toLowerCase().includes("password")) {
    return false;
  }

  // Check if the password contains at least one uppercase letter
  if (!/[A-Z]/.test(password)) {
    return false;
  }

  // If all conditions are met, return true
  return true;
}

console.log("Testing isStrongPassword()...");

console.log("Qwerty - " + isStrongPassword("Qwerty")); // false - Too short
console.log("passwordQwerty - " + isStrongPassword("passwordQwerty")); // false - Contains "password"
console.log("qwerty123 - " + isStrongPassword("qwerty123")); // false - No uppercase chars
console.log("Qwerty123 - " + isStrongPassword("Qwerty123")); // true

// Additional tests
console.log("Short - " + isStrongPassword("Short")); // false - Too short
console.log("Qwerty@123 - " + isStrongPassword("Qwerty@123")); // true
console.log("qwertyPASSWORD - " + isStrongPassword("qwertyPASSWORD")); // false - Contains "password"

// Do NOT remove the following line:
export default isStrongPassword;
