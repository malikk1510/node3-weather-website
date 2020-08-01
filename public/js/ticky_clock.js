//Creating a date variable object.
console.log("sdfsdf");
var x, h, m, s;
var id = setInterval(clocky, 1000);

function clocky() {
    //    if ( m == 21 ){
    //    clearInterval(id);
    //}
    x = new Date(); // x is a date object.
    h = x.getHours();
    m = x.getMinutes();
    s = x.getSeconds();

    if (s <= 9) {
        s = "0" + s;
    }
    if (h <= 9) {
        h = "0" + h;
    }
    if (m <= 9) {
        m = "0" + m;
    }
    var combine = h + ':' + m + ':' + s;
    // var color = "#" + h + m + s;
    document.getElementById("test").innerHTML = combine;
    // document.getElementById("test").style.backgroundColor = color;
    // document.body.style.backgroundColor = color;
}