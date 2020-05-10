// Gets modal element
const modal = document.getElementsByClassName("modal")[0];
// Gets modal closebutton
const modalClose = document.getElementsByClassName("modalClose")[0];
// This is what  will turn on the modal
const modalActivate = document.getElementById("modalActivate");

// This will  get the add to cart button
const addToCart = $(".orderBtn")[0];

//This will get the modal-content div
const modalContent = $(".modalContent");

//This will get the clear order button

$(document).on('click','#clearBtn',function(){
    $("#foodItems").css('display','none');
    $("#price").css('display','none');
    $("#clearBtn").css('display','none');
})


// Listen for open modal
if (modalActivate) {
    modalActivate.addEventListener('click', openModal);
}

//Listen for close modal
modalClose.addEventListener('click', closeModal);





//Open Modal Function
function openModal() {

    modal.style.display = 'block';
    let EggceptionalBtn = $('<button class="orderBtn" id="1st">');
    EggceptionalBtn.text("Add to cart");
    let Eggceptional = $('<h1>');
    let EggceptionalDesc = $('<p>');
    let EggceptionalImg = $('<img>');
    Eggceptional.text("Eggceptional Sammich");
    Eggceptional.appendTo("#modal-header");
    EggceptionalDesc.text("Two fried eggs, 2 bacon slices served inside a warn brioche bun, that is toasted to perfection with a drizzle of our house made hollandaise sauce");
    EggceptionalDesc.appendTo("#modal-header");
    EggceptionalImg.attr('src', './styles/Screen Shot 2020-05-03 at 8.33.01 AM.png').css({ 'width': '200px', 'display': 'block', 'margin': 'auto' });
    EggceptionalImg.appendTo("#modal-header");
    EggceptionalBtn.appendTo("#modal-header");
    modalContent.attr('id', 'number1');
}

function openModal2() {

    modal.style.display = 'block';
    let EggcitingBtn = $('<button class="orderBtn">');
    EggcitingBtn.text("Add to cart");
    let Eggciting = $('<h1>');
    let EggcitingDesc = $('<p>');
    let EggcitingImg = $('<img>');
    Eggciting.text("Eggciting Sammich");
    Eggciting.appendTo("#modal-header");
    EggcitingDesc.text("One fried egg, 1 maple round sausage, 2 slices of crispy Applewood bacon served on a toasty english muffin. Oh yeah and decadent cheese!");
    EggcitingDesc.appendTo("#modal-header");
    EggcitingImg.attr('src', './styles/2nd egg  sammich.png').css({ 'width': '300px', 'display': 'block', 'margin': 'auto' });
    EggcitingImg.appendTo("#modal-header");
    EggcitingBtn.appendTo("#modal-header");
    modalContent.attr('id', 'number2');

}

function openModal3() {
    modal.style.display = 'block';
    let EggsplosiveBtn = $('<button class="orderBtn">');
    EggsplosiveBtn.text("Add to cart");
    let Eggsplosive = $('<h1>');
    let EggsplosiveDesc = $('<p>');
    let EggsplosiveImg = $('<img>');
    Eggsplosive.text("Eggsplosive Sammich");
    Eggsplosive.appendTo("#modal-header");
    EggsplosiveDesc.text("Cage-free soft scrambled eggs and chives, cheddar cheese, caramelized onions and sriracha mayo in a warm brioche bun");
    EggsplosiveDesc.appendTo("#modal-header");
    EggsplosiveImg.attr('src', './styles/egg 3 sammich.png').css({ 'width': '300px', 'display': 'block', 'margin': 'auto' });
    EggsplosiveImg.appendTo("#modal-header");
    EggsplosiveBtn.appendTo("#modal-header");
    modalContent.attr('id', 'number3');
}

function openModal4() {
    modal.style.display = 'block';
    let OrangeBtn = $('<button class="orderBtn">');
    OrangeBtn.text("Add to cart");
    let OrangeJuice = $('<h1>');
    let OrangeJuiceDesc = $('<p>');
    let OrangeJuiceImg = $('<img>');
    OrangeJuice.text("Orange Juice");
    OrangeJuice.appendTo("#modal-header");
    OrangeJuiceDesc.text("100% Pure squeezed pasteurized orange juice. A delicious orange juice with a taste that’s the next best thing to fresh squeezed.");
    OrangeJuiceDesc.appendTo("#modal-header");
    OrangeJuiceImg.attr('src', './styles/oj.png').css({ 'width': '200px', 'display': 'block', 'margin': 'auto' });
    OrangeJuiceImg.appendTo("#modal-header");
    OrangeBtn.appendTo("#modal-header");
    modalContent.attr('id', 'number4');
}

function openModal5() {
    modal.style.display = 'block';
    let potatoesBtn = $('<button class="orderBtn">');
    potatoesBtn.text("Add to cart");
    let Potatoes = $('<h1>');
    let PotatoesDesc = $('<p>');
    let PotatoesImg = $('<img>');
    Potatoes.text("Seasoned Potatoes");
    Potatoes.appendTo("#modal-header");
    PotatoesDesc.text("Natural-cut, skin-on potatoes cooked to perfection and seasoned with cracked black pepper and garlic powder.");
    PotatoesDesc.appendTo("#modal-header");
    PotatoesImg.attr('src', './styles/potatoes.png').css({ 'width': '300px', 'display': 'block', 'margin': 'auto' });
    PotatoesImg.appendTo("#modal-header");
    potatoesBtn.appendTo("#modal-header");
    modalContent.attr('id', 'number5');
}

function openModal6() {
    modal.style.display = 'block';
    let teaBtn = $('<button class="orderBtn">');
    teaBtn.text("Add to cart");
    let IcedTea = $('<h1>');
    let IcedTeaDesc = $('<p>');
    let IcedTeaImg = $('<img>');
    IcedTea.text("Eggcellent Sweet Tea");
    IcedTea.appendTo("#modal-header");
    IcedTeaDesc.text("Fresh Black Tea brewed to perfection. Cool and Refreshing everytime!");
    IcedTeaDesc.appendTo("#modal-header");
    IcedTeaImg.attr('src', './styles/iced tea.png').css({ 'width': '250px', 'display': 'block', 'margin': 'auto' });
    IcedTeaImg.appendTo("#modal-header");
    teaBtn.appendTo("#modal-header");
    modalContent.attr('id', 'number6');
}

// Close Function
function closeModal() {
    let modalHeader = $("#modal-header");
    modal.style.display = 'none';
    modalHeader.empty();

}

//Post content to summary section

$(document).on('click', '.orderBtn', function (e) {

    $("#foodItems").css('display','block');
    $("#price").css('display','block');

    if (e.target) {
        var parent_id = $(this).parent().parent().attr('id');
        if (parent_id == "number1") {
            modal.style.display = 'none';
            let modalHeader = $("#modal-header");
            modal.style.display = 'none';
            modalHeader.empty();
            let foodItem = $("#foodItems");
            $("#price").text("$7.25")
            foodItem.text("Eggceptional Sammich");
            let clearCart = $('<button id="clearBtn">');
            clearCart.text("Clear Order");
            clearCart.appendTo("#summary");
        } else if(parent_id == "number2"){
            modal.style.display = 'none';
            let modalHeader = $("#modal-header");
            modal.style.display = 'none';
            modalHeader.empty();
            let foodItem = $("#foodItems");
            $("#price").text("$7.50")
            foodItem.text("Eggciting Sausage Sammich");
            let clearCart = $('<button id="clearBtn">');
            clearCart.text("Clear Order");
            clearCart.appendTo("#summary");
    }  else if(parent_id == "number3"){
        modal.style.display = 'none';
            let modalHeader = $("#modal-header");
            modal.style.display = 'none';
            modalHeader.empty();
            let foodItem = $("#foodItems");
            $("#price").text("$7.75")
            foodItem.text("Eggsplosive Sammich");
            let clearCart = $('<button id="clearBtn">');
            clearCart.text("Clear Order");
            clearCart.appendTo("#summary");
    } else if(parent_id == "number4"){
        modal.style.display = 'none';
            let modalHeader = $("#modal-header");
            modal.style.display = 'none';
            modalHeader.empty();
            let foodItem = $("#foodItems");
            $("#price").text("$3.00s")
            foodItem.text("Orange Juice");
            let clearCart = $('<button id="clearBtn">');
            clearCart.text("Clear Order");
            clearCart.appendTo("#summary");
    } else if(parent_id == "number5"){
        modal.style.display = 'none';
            let modalHeader = $("#modal-header");
            modal.style.display = 'none';
            modalHeader.empty();
            let foodItem = $("#foodItems");
            $("#price").text("$3.50")
            foodItem.text("Seasoned Potatoes");
            let clearCart = $('<button id="clearBtn">');
            clearCart.text("Clear Order");
            clearCart.appendTo("#summary");
    }  else if(parent_id  == "number6"){
        modal.style.display = 'none';
            let modalHeader = $("#modal-header");
            modal.style.display = 'none';
            modalHeader.empty();
            let foodItem = $("#foodItems");
            $("#price").text("$2.75")
            foodItem.text("Eggcellent Sweet Tea");
            let clearCart = $('<button id="clearBtn">');
            clearCart.text("Clear Order");
            clearCart.appendTo("#summary");
    }

    }

   
})

//Clear Summary section function

function summaryClear(){
    console.log("hello");
}
