let img = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16'];
let current = null;

function flip(card){
    $(card).toggleClass('flipped');
    $(card).css('pointer-events', 'none');

    if(!current){
        current = $(card);

    } else{
        if(current.attr('data-name') != $(card).attr('data-name')){
            //khác nhau
            $('.card').css('pointer-events', 'none');

            setTimeout(function(){
                $(card).toggleClass('flipped');
                current.toggleClass('flipped');
                document.getElementById('incorrect-sound').play();
                current = null;
            }, 500);
            
            console.log('khac nhau');
            setTimeout(function(){
                $('.card').css('pointer-events', 'auto');
                
            console.log('khac nhau2');

            }, 800);
        }else{
            // giống nhau
            setTimeout(function(){
                $(card).css('visibility', 'hidden');
                current.css('visibility', 'hidden');
                $(card).css('opacity', '0');
                current.css('opacity', '0');
                current = null;
            }, 200);
            // document.getElementById('').play();
        }
    }
}

$(function(){
    img = img.concat(img); //nhân đôi mảng tạo ra các lá bài
    shuffle(img); //tạo hàm random current đổi vị trí
    let html = '';
    for(let i = 0; i<=img.length-1; i++){
        html += '<div class="card" data-name="'+img[i]+'" onclick="flip(this)">' + '<div class="before"><img src="../image/'+img[i]+'.jpg"></div>' + '<div class="after"><img src="../image/before2.jpg"></div>' + '</div>';
    }
    $('.can').html(html);
});

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