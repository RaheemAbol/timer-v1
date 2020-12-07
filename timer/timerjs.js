var button = document.getElementById("timer-button");
var title = document.getElementById("title");
var time = 0;
var intervals = -1;

button.addEventListener("click", function(event){
    if (intervals == -1) {
        intervals = setInterval(function(){
            time++;
            title.innerHTML = time;
        }, 1000);
    } else {
        clearInterval(intervals);
        intervals = -1;
    }

});