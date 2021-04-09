	//Signup page
	var login = document.querySelector(".login"),
	    register = document.querySelector(".register"),
	    restore = document.querySelector(".restore");
	
	function openReg(){
	  register.style.display = "block";
	  login.style.display = "none";
	  restore.style.display = "none";
	}
	
	function openLogin(){
	  login.style.display = "block";
	  register.style.display = "none";
	  restore.style.display = "none";
	}
	
	function openRes(){
	  restore.style.display = "block";
	  login.style.display = "none";
	  register.style.display = "none";
	}