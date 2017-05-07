/* 

REQUIREMENTS: 
When the user logs in, if they don't have an account
display to the user that they have an incorrect password or username.

When the user logs in, if they do have an account but incorrect pw,
display to the user that they have an incorrect password or username.

When the user logs in, if they have both correct username and password,
display to the user success.

Ensure that the user is entering at least an email and a password.
If they entered an email address, ensure that it is of the form of an email address.

*/

$(document).ready(function (){

	// Accounts are email addresses so store them as strings in an array
	// Chose an array to simplify since we are not adding new accounts
	var accounts = [
	{
		emailaddress: 'danubevictoria@gmail.com',
		password: 'test'
	},

	{
		emailaddress: 'dphan@gmail.com',
		password: 'test'
	}
	]

	// The login function displays on screen whether or not the user logged in successfully
	function login() {

		// Get the email and password as input by the user on the screen
		var email_input = document.getElementById('email-input').value;
		var password_input = document.getElementById('password-input').value;

		// Compare the email address and password to each account in accounts
		if (email_input != null && password_input != null) {
			for (var i = 0; i < accounts.length; i++) {
				if (accounts[i].emailaddress == email_input) {
					if (accounts[i].password == password_input) {
						$('.alert-success').removeClass("result");
						$('.alert-danger').removeClass("result");

						$('.alert-success').addClass("result");
						$('.alert-success').fadeIn("slow");

						// For efficiency, once found break out of the loop
						return;
					} else {
						$('.alert-success').removeClass("result");
						$('.alert-danger').removeClass("result");

						$('.alert-danger').addClass("result");
						$('.alert-danger').fadeIn("slow");
					}
				} else {
					continue;
				}		
			}

			// If no account was ever found, then display unsuccessful login
			$('.alert-success').removeClass("result");
			$('.alert-danger').removeClass("result");

			$('.alert-danger').addClass("result");
			$('.alert-danger').fadeIn("slow");	
		}
	}	

	// When user clicks on login button, attempt to login
	$('.login-button').click(function() {
		login();
	})
});