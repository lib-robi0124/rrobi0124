function callBackFunc(someFunc) {
    fetch(url)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        renderFunc(data);
})

