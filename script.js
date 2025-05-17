const correctPassword = "kontouzi"; // Change this to your actual password

  function checkPassword() {
    const input = document.getElementById("password").value;
    if (input === correctPassword) {
      document.getElementById("passwordPrompt").style.display = "none";
      document.getElementById("protectedContent").style.display = "block";
    } else {
      alert("Incorrect password.");
    }
  }