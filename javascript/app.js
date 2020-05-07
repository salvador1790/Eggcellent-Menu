// Gets modal element
const modal = document.getElementsByClassName("modal")[0];
// Gets modal closebutton
const modalClose = document.getElementsByClassName("modalClose")[0];
// This is what  will turn on the modal
const modalActivate = document.getElementById("modalActivate");

// Listen for open modal
if(modalActivate){
modalActivate.addEventListener('click',openModal);
}

//Listen for close modal
modalClose.addEventListener('click',closeModal);


//Open Modal Function
 function  openModal(){

        modal.style.display = 'block';

        let Eggceptional = $('<h1>');
        let EggceptionalDesc = $('<p>');
        let EggceptionalImg = $('<img>');
        Eggceptional.text("Eggceptional Sammich");
        Eggceptional.appendTo("#modal-header");
        EggceptionalDesc.text("Two fried eggs, 2 bacon slices served inside a warn brioche bun, that is toasted to perfection with a drizzle of our house made hollandaise sauce");
        EggceptionalDesc.appendTo("#modal-header");
        EggceptionalImg.attr('src','./styles/Screen Shot 2020-05-03 at 8.33.01 AM.png').css({'width':'200px','display':'block','margin':'auto'});
        EggceptionalImg.appendTo("#modal-header");

        
}

function openModal2(){
    
    modal.style.display = 'block';

        let Eggciting = $('<h1>');
        let EggcitingDesc = $('<p>');
        let EggcitingImg = $('<img>');
        Eggciting.text("Eggciting Sammich");
        Eggciting.appendTo("#modal-header");
        EggcitingDesc.text("One fried egg, 1 maple round sausage, 2 slices of crispy Applewood bacon served on a toasty english muffin. Oh yeah and decadent cheese!");
        EggcitingDesc.appendTo("#modal-header");
        EggcitingImg.attr('src','./styles/2nd egg  sammich.png').css({'width':'300px','display':'block','margin':'auto'});
        EggcitingImg.appendTo("#modal-header");
    
}

function openModal3(){
    modal.style.display = 'block';
        let Eggsplosive = $('<h1>');
        let EggsplosiveDesc = $('<p>');
        let EggsplosiveImg = $('<img>');
        Eggsplosive.text("Eggsplosive Sammich");
        Eggsplosive.appendTo("#modal-header");
        EggsplosiveDesc.text("Cage-free soft scrambled eggs and chives, cheddar cheese, caramelized onions and sriracha mayo in a warm brioche bun");
        EggsplosiveDesc.appendTo("#modal-header");
        EggsplosiveImg.attr('src','./styles/egg 3 sammich.png').css({'width':'300px','display':'block','margin':'auto'});
        EggsplosiveImg.appendTo("#modal-header");
}

function openModal4(){
    modal.style.display = 'block';
    let OrangeJuice = $('<h1>');
    let OrangeJuiceDesc = $('<p>');
    let OrangeJuiceImg = $('<img>');
    OrangeJuice.text("Orange Juice");
    OrangeJuice.appendTo("#modal-header");
    OrangeJuiceDesc.text("100% Pure squeezed pasteurized orange juice. A delicious orange juice with a taste that’s the next best thing to fresh squeezed.");
    OrangeJuiceDesc.appendTo("#modal-header");
    OrangeJuiceImg.attr('src','./styles/oj.png').css({'width':'200px','display':'block','margin':'auto'});
    OrangeJuiceImg.appendTo("#modal-header");
}

function openModal5(){
    modal.style.display = 'block';
    let Potatoes = $('<h1>');
    let PotatoesDesc = $('<p>');
    let PotatoesImg = $('<img>');
    Potatoes.text("Seasoned Potatoes");
    Potatoes.appendTo("#modal-header");
    PotatoesDesc.text("Natural-cut, skin-on potatoes cooked to perfection and seasoned with cracked black pepper and garlic powder.");
    PotatoesDesc.appendTo("#modal-header");
    PotatoesImg.attr('src','./styles/potatoes.png').css({'width':'300px','display':'block','margin':'auto'});
    PotatoesImg.appendTo("#modal-header");
}

function openModal6(){
    modal.style.display = 'block';
    let IcedTea = $('<h1>');
    let IcedTeaDesc = $('<p>');
    let IcedTeaImg = $('<img>');
    IcedTea.text("Eggcellent Sweet Tea");
    IcedTea.appendTo("#modal-header");
    IcedTeaDesc.text("Fresh Black Tea brewed to perfection. Cool and Refreshing everytime!");
    IcedTeaDesc.appendTo("#modal-header");
    IcedTeaImg.attr('src','./styles/iced tea.png').css({'width':'250px','display':'block','margin':'auto'});
    IcedTeaImg.appendTo("#modal-header");
}

// Close Function
function  closeModal(){
    let modalHeader = $("#modal-header");
       modal.style.display = 'none';
       modalHeader.empty();
      
}
