menu_list_array = ["Veg Margherita Pizza",//add more items
                    ];

function getmenu(){
var htmldata;
//Complete the code
}

function add_item(){
var htmldata;
var item=document.getElementById("add_item").value;
//Complete the code

}

function add_top(){
//Complete the code
}

function playSound(){
    X.play();
}

function new_image(){
    fabric.Image.fromURL('BirthadayImage.jpg', function(Img){
        block_image_object = Img;

        block_image_object.scaleToWidth(700);
        block_image_object.scaleToHeight(150);
        block_image_object.set({
            top:0,
            left:0

        });
        CanvasGradient.add(block_image_object);
    });
}