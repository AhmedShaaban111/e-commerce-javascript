var retrievedData = JSON.parse(localStorage.getItem('cartProducts'));
// localStorage.clear()
//var retrievedData = [...test];

// import cart from "./main.js"
// console.log(cart);


var container = document.getElementById("row1");
function showProducts(arr){
    container.innerHTML = "";
    arr.forEach((product, index) => {
        container.innerHTML += `
        <div class="col-lg-6 mb-5">
            <div class="row align-items-center">
                <div class="col-sm-5">
                    <img class="img-fluid mb-3 mb-sm-0" src="${product.img}" alt="" ">
                    <h5 class="menu-price">${product.price}$</h5>
                </div>
                <div class="col-sm-7">
                    <h4><i class="fa fa-truck service-icon"></i>${product.name}</h4>
                    <p class="m-0">${product.des}</p>

                    <button id="remove" onclick="remove(${index})">remove </button>
                    

                </div>
            </div>
        </div>`;
    });



}
showProducts(retrievedData);
function Count(){
    var sum=0;
    var span = document.getElementById("totalPrice");

    retrievedData.forEach((product, index) => {
    sum+=product.price;
    })
    span.innerHTML=sum+"$";
}
Count();
function remove(i){
  retrievedData= retrievedData.filter((product, index) => {
return retrievedData[i] != product 
        })

        console.log(retrievedData);
        //console.log(filterArray);

        showProducts(retrievedData);
        Count();

}



