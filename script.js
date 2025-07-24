
  // 1. Define User class with encapsulation
  class User {
    #password;
    constructor(name, email, password) {
      this.name = name;
      this.email = email;
      this.#password = password;
    }

    login(inputPassword) {
      return inputPassword === this.#password;
    }

    getProfile() {
      return `👤 Name: ${this.name} | Email: ${this.email}`;
    }
  }

  // 2. Create a sample user (you can add more later)
  const user1 = new User("Arijeet", "arijeet", "12345");

  // 3. Handle login form submission
  const form = document.querySelector("form");

  form.addEventListener("submit", function (e) {
    e.preventDefault(); // prevent page reload

    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();

    if (username === user1.email && user1.login(password)) {
      alert(`✅ Welcome, ${user1.name}!`);
    } else {
      alert("❌ Invalid username or password!");
    }

    // Optional: Clear fields
    form.reset();
  });

