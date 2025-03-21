document.getElementById("form").addEventlistener ("Submit", function(event) {event.preventDefault(); 
    const formData = new FormData(this);
for (cons [name, value] of formData.entries()){
    console.log(`${name}: ${value}`);
}
}); 