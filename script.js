console.log("Welcome to Anushka yadav Portfolio!");

document.querySelectorAll("nav a").forEach(function(link) {
    link.addEventListner("click", function() {
        console.log("Navigating to" + link.textContent);
    });
});
