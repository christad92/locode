
var Ecommerce = document.getElementById('e-commerce');
var Emergency = document.getElementById('emergency');
var Individuals = document.getElementById('individuals');
var Health = document.getElementById('health');

var ecoms_btn = document.getElementById("EcomsBtn");
var emergency_btn = document.getElementById("EmergencyBtn");
var indiv_btn = document.getElementById("IndivBtn");
var health_btn = document.getElementById("HealthBtn");

ecoms_btn.onclick = function() {
    Emergency.style.display = "none";
    Individuals.style.display = "none";
    Health.style.display = "none";
    Ecommerce.style.display = "block";
    ecoms_btn.className = "active_useCase"
    health_btn.className = "default"
    indiv_btn.className = "default"
    emergency_btn.className = "default"
}

health_btn.onclick = function() {
    Emergency.style.display = "none";
    Individuals.style.display = "none";
    Health.style.display = "block";
    Ecommerce.style.display = "none";
    health_btn.className = "active_useCase"
    indiv_btn.className = "default"
    emergency_btn.className = "default"
    ecoms_btn.className = "default"
}

indiv_btn.onclick = function() {
    Health.style.display = "none";
    Emergency.style.display = "none";
    Individuals.style.display = "block";
    Ecommerce.style.display = "none";
    indiv_btn.className = "active_useCase"
    health_btn.className = "default"
    emergency_btn.className = "default"
    ecoms_btn.className = "default"
}

emergency_btn.onclick = function() {
    Health.style.display = "none";
    Individuals.style.display = "none";
    Emergency.style.display = "block";
    Ecommerce.style.display = "none";
    emergency_btn.className = "active_useCase"
    health_btn.className = "default"
    indiv_btn.className = "default"
    ecoms_btn.className = "default"
}