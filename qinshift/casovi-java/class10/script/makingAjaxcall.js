$(document).ready(function () {
  let getDataBtn = $("#getDataBtn");

  getDataBtn.click(function () {
    $.ajax({
      url: "https://jsonplaceholder.typicode.com/users",
      success: function (result) {
        console.log(result);
        for(let user of result){
console.log(user.name);


        }
      },
      error: function (error) {
        console.log(error);
        
      },
    });
  });
});
