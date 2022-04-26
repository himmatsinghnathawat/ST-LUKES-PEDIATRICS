const Play = () => {

var playicon = document.querySelector("playBtnIconAbout");
if(playicon){
playicon.addEventListener("click", function () {
    document.querySelector("box-left").style.display = "none";
    document.querySelector('iframe').style.display = "block";
    var iframe = document.querySelector('iframe');
    iframe.src += "?autoplay=1&playsinline=1";
    console.log(iframe);
});
}
}

export default Play