var updateButton = document.getElementsByClassName("update-cart");

for (var i = 0; i < updateButton.length; i++) {
  updateButton[i].addEventListener("click", function () {
    var productId = this.dataset.product;
    var action = this.dataset.action;
    console.log(productId);
    console.log(action);
    console.log(user);

    if (user == "AnonymousUser") {
      console.log("Not logged in");
    } else {
      updateUserOrder(productId,action)
    }
  });
}
function updateUserOrder(productId,action){
  console.log(" Logged in,Sending Data");

  var url = '/update_item/'
  fetch(url,{
    method:'POST',
    headers:{
      'Content-Type':'application/json',
      'X-CSRFToken': csrftoken,
    },
    body:JSON.stringify({'productId': productId,'action':action})
  })

  .then((response)=>{
    return response.json()
  })

  .then((data) => {
    console.log('data:' , data)
    location.reload()
  })

}