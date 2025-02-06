fetch("https://raw.githubusercontent.com/sedc-codecademy/sedc6-frontend-exam/master/band-data.json")
.then(response => response.json())
.then(data => {
    console.log(data);
    
})