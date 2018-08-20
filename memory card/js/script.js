let img = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16'];
img = img.concat(img); //nhân đôi mảng.
shuffle(img); //tạo hàm random current đổi vị trước khi load css
let html = '';
for(let i = 0; i<=img.length-1; i++){
    html += '<div class="col">' + '<div class="card">' + '<div class="before"><img src="../image/'+img[i]+'.jpg"></div>' + '<div class="after"><img src="../image/before2.jpg"></div>' + '</div></div>';
}
$('.can').html(html);

function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
  }
  return array;
}