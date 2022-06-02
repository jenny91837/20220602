//背景預設混合模式

function setup() {
createCanvas(windowWidth, windowHeight);
background(BLEND);  
}   

//背景設為黑色（rgb模式）圖型不填色


function draw(){
background(0,0,0)	
noFill()   

//定義變數設定滑鼠左右移動範圍
//畫面最小從0到最右邊WIDTH的值設為0~50範圍
var a =map(mouseX,0,width,0,50)

//創建迴圈每增加50重複圖形


for(var x =0;x<width;x= x + 50){
 for(var y =0;y<height;y+=50){

//迴圈裡放基本圖形


//基本圖形由一矩形、一大圓、一小圓組成

//矩形起點原本左上角變成中心

rectMode(CENTER)

//橙色邊圓型,a是滑鼠移動值,(x為位置,y為位置,隨滑數增加圓的大小是加a)


stroke(255,97,0)
 ellipse(x,y,80+a)

//紫色邊矩形


stroke(160,32,240)
rect(x,y,80+a)

//橙色圓和紫色正方在同樣位置隨滑鼠移動變大小

//深藍色邊小圓形 小圓在右下角位置隨滑鼠變大小

stroke(25,25,112)
ellipse(x+50,y+50,40+a)

}
}
}

