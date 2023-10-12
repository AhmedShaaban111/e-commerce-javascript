(function ($) {
    "use strict";
    
    // Dropdown on mouse hover
    $(document).ready(function () {
        function toggleNavbarMethod() {
            if ($(window).width() > 992) {
                $('.navbar .dropdown').on('mouseover', function () {
                    $('.dropdown-toggle', this).trigger('click');
                }).on('mouseout', function () {
                    $('.dropdown-toggle', this).trigger('click').blur();
                });
            } else {
                $('.navbar .dropdown').off('mouseover').off('mouseout');
            }
        }
        toggleNavbarMethod();
        $(window).resize(toggleNavbarMethod);
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });
    

    // Date and time picker
    $('.date').datetimepicker({
        format: 'L'
    });
    $('.time').datetimepicker({
        format: 'LT'
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        margin: 30,
        dots: true,
        loop: true,
        center: true,
        responsive: {
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    });
    
})(jQuery);

// var products=[
//     {
//         name:"name1",
//         img:"img/menu-2.jpg",
//         des:"Sit lorem ipsum et diam elitr est dolor sed duo guberg sea et et lorem dolor",
//         price:7

//     },  
//       {
//         name:"name2",
//         img:"img/menu-2.jpg",
//         des:"Sit lorem ipsum et diam elitr est dolor sed duo guberg sea et et lorem dolor",
//         price:7

//     },    {
//         name:"name22",
//         img:"img/menu-2.jpg",
//         des:"Sit lorem ipsum et diam elitr est dolor sed duo guberg sea et et lorem dolor",
//         price:7

//     },    {
//         name:"name3",
//         img:"img/menu-2.jpg",
//         des:"Sit lorem ipsum et diam elitr est dolor sed duo guberg sea et et lorem dolor",
//         price:7

//     },
// ]
// var cart=[];
// const container = document.getElementById("row");

// products.forEach((product) => {
//   const rowDiv = document.createElement("div");
//   rowDiv.classList.add("row", "align-items-center", "mb-5");

//   const col1Div = document.createElement("div");
//   col1Div.classList.add("col-4", "col-sm-3");

//   const img = document.createElement("img");
//   img.classList.add("w-100", "rounded-circle", "mb-3", "mb-sm-0");
//   img.src = product.img;
//   img.alt = "";
//   img.addEventListener("click", () => pushProduct(product));

//   const price = document.createElement("h5");
//   price.classList.add("menu-price");
//   price.textContent = `${product.price}$`;

//   col1Div.appendChild(img);
//   col1Div.appendChild(price);

//   const col2Div = document.createElement("div");
//   col2Div.classList.add("col-8", "col-sm-9");

//   const name = document.createElement("h4");
//   name.textContent = product.name;

//   const description = document.createElement("p");
//   description.classList.add("m-0");
//   description.textContent = product.des;

//   col2Div.appendChild(name);
//   col2Div.appendChild(description);

//   rowDiv.appendChild(col1Div);
//   rowDiv.appendChild(col2Div);

//   container.appendChild(rowDiv);
// });
// function pushProduct(product){
//     cart.push(product)
//     console.log(cart);

// }


var products = [
    {
        name: "Classic French coffee",
        img: "img/img/Classic French coffee.jpg",
        des: "Ground French coffee blend 200 grams, Components: 100% natural coffee - vegetable creamer",
        price: 7,
        category:"French coffee"
    },
    {
        name: "Blend French coffee",
        img: "img/img/Blend French coffee.jpg",
        des: "Blueberry French coffee blend 200 grams, Components: 100% natural coffee - vegetable creamer - blueberry",
        price: 9,
        category:"French coffee"

    },
    {
        name: "Crema Espresso",
        img: "img/img/Blend Crema Espresso.jpg",
        des: "100% roasted coffee beans ground from the finest types of coffee carefully selected, roasted and packed automatically with the latest preservation methods to give you the best taste",
        price: 12,
        category:"Espresso"

    },
    {
        name: "Light Coffee Roasted",
        img: "img/img/Light coffee roasted .jpeg",
        des: "A distinctive blend of Arabica and Robusta beans",
        price: 8,
        category:"French coffee"

    },
    {
        name: "Premium Turk coffee",
        img: "img/img/Premium Turkish coffe.jpg",
        des: "Ground coffee 100% Arabica coffee beans, ground from the finest types of coffee, carefully selected",
        price: 5,
        category:"Turkish coffee"

    },
    {
        name: "Light Turkish Coffee",
        img: "img/img/Light Turkish Coffee.jpg",
        des: "Ground coffee 100% Arabica coffee beans, ground from the finest types of coffee, carefully selected",
        price: 6,
        category:"Turkish coffee"

    },
    {
        name: "Dark Turkish coffee",
        img: "img/img/Dark Turkish coffee .jpg",
        des: "This product has been approved by Espresso Academy Firenze Italy under the international standards of Italian barista method",
        price: 6,
        category:"Turkish coffee"

    },
    {
        name: "Milano coffee beans",
        img: "img/img/Milano coffee beans.jpg",
        des: "Whole Bean Milano Coffee is suitable for lovers of a cup of coffee in the morning. These beans are characterized by a creamy flavor and a whole bean, and they contain a well-balanced blend",
        price: 14,
        category:"Espresso"

    },
    {
        name: "Elba Brazilian Coffee",
        img: "img/img/Elba Brazilian Coffee.jpg",
        des: "from the southern region of Minas Gerais in Aguas Pauloists county, located in Serra da Mantiqueira, Brazil",
        price: 14,
        category:"Espresso"

    },
    {
        name: "Balband Turkish coffee",
        img: "img/img/Balband Turkish coffee.jpg",
        des: "This product has been approved by Espresso Academy Firenze Italy under the international standards of Italian barista method",
        price: 13,
        category:"Turkish coffee"

    },
    
    
];

var cart = [];
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
                    <button class="buttoncart"onclick="pushProduct(${index})">Add To Cart</button>

                </div>
            </div>
        </div>`;
    });



}
function pushProduct(index) {
    cart.push(products[index]);
   localStorage.setItem("cartProducts",JSON.stringify(cart));
    console.log(cart);
    listCount();
}
showProducts(products);

var all = document.getElementById("allBtn");
var french = document.getElementById("french");
var Espresso = document.getElementById("espresso");
var Turkish = document.getElementById("Turkish");

french.addEventListener("click", () => {
  var filteFrench = products.filter((product) => {
    return product.category === "French coffee";
  });
  showProducts(filteFrench);
});

Espresso.addEventListener("click", () => {
  var filteEspresso = products.filter((product) => {
    return product.category === "Espresso";
  });
  showProducts(filteEspresso);
});

Turkish.addEventListener("click", () => {
  var filteTurkish = products.filter((product) => {
    return product.category === "Turkish coffee";
  });
  showProducts(filteTurkish);
});

all.addEventListener("click", () => {
  showProducts(products);
});




var Counter=document.getElementById("count");
function listCount(){
    Counter.innerHTML=cart.length;
}

//export default cart;


