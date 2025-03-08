
        function validateForm() {
            var username = document.getElementById("username").value;
            var email = document.getElementById("email").value;
            var password = document.getElementById("password").value;

            if (username === "" || email === "" || password === "") {
                alert("Please fill in all fields.");
                return false; // Prevent form submission
            }
            // If all fields are filled, display success message
            alert("Login Successful! Welcome, " + username + "!");
            return true; // Allow form submission
        }
