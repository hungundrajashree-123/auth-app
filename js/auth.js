function showRegister() {
  document.getElementById("registerBox").classList.toggle("hidden");
}
async function register() {
  const email = document.getElementById("regEmail").value;
  const username = document.getElementById("regUsername").value;
  const password = document.getElementById("regPassword").value;

  try {
    const res = await fetch("https://api.freeapi.app/api/v1/users/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email,
        username,
        password,
        role: "ADMIN"
      })
    });

    const data = await res.json();

    if (res.ok) {
      alert("Register successful ✅");
    } else {
      alert(data.message || "Register failed ❌");
    }

  } catch (error) {
    alert("Error aaya ❌");
  }
}
async function login() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  try {
    const res = await fetch("https://api.freeapi.app/api/v1/users/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        username,
        password
      })
    });

    const data = await res.json();

    if (res.ok) {
      // TOKEN SAVE
      localStorage.setItem("token", data.data.accessToken);

      alert("Login successful ✅");

      // redirect to profile page
      window.location.href = "profile.html";
    } else {
      alert(data.message || "Login failed ❌");
    }

  } catch (error) {
    alert("Something went wrong ❌");
  }
}