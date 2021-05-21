
   document.getElementById("signup-doctor").addEventListener("change", function() {

    document.getElementById("doctor-img").src = "assets/img/doctor.png";
    
    document.getElementById("title").innerText = "Sign up - Doctor";

});

document.getElementById("signup-patient").addEventListener("change", function() {

    document.getElementById("doctor-img").src = "assets/img/patient.png";
    
    document.getElementById("title").innerText = "Sign up - Patient";
    
    });

