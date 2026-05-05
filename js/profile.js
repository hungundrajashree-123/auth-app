const token = localStorage.getItem("token");

//  agar token nahi hai → login page pe bhejo
if (!token) {
  window.location.href = "index.html";
}

//  Current user fetch
async function getUser() {
  try {
    const res = await fetch("https://api.freeapi.app/api/v1/users/current-user", {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });

    const data = await res.json();

    if (res.ok) {
      document.getElementById("user").innerText =
        "Username: " + data.data.username;
    } else {
      alert("User fetch failed ❌");
    }

  } catch (error) {
    alert("Error ❌");
  }
}

// Logout
async function logout() {
  try {
    await fetch("https://api.freeapi.app/api/v1/users/logout", {
      method: "POST",
      headers: {
        Authorization: "Bearer " + token
      }
    });

    localStorage.removeItem("token");
    window.location.href = "index.html";

  } catch (error) {
    alert("Logout error ❌");
  }
}

//  page load hote hi user data fetch karo
getUser();