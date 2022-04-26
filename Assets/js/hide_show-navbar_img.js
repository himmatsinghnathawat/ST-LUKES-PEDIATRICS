// show hidden navebar 

const Nav = () => {
    const him = document.querySelectorAll(".navbar");
    him.forEach((e, index) => {
        e.addEventListener("mouseover", () => {
            show(index);
        });
    });

    function show(index) {
        const main = document.querySelectorAll(".qq");
        for (var q = 0; q < main.length; q++) {
            main[q].style.display = "none";
        }
        var y = main[index];
        if (y) {
            y.addEventListener("mouseleave", () => {
                y.style.display = "none";
            });
            if (y.style.display === "flex") {
                y.style.display = "none";
            } else {
                y.style.display = "flex";
            }
            console.log(main[index]);
        }
    }
}


export default Nav



















































// var list = document.getElementById("list1");
// list.addEventListener("click",function(){
//     if (list.classList.contains('visible')){
//         list.classList.remove('visible');
//     } else{
//         list.classList.add('visible');
//     }
// });



// play u-tube  video  by jquery

// $(".play_icon").on("click",function(){ 
//   $(".box-left").css("display","none");
//   $("#iframe").css("display","block");
//   // $('#iframe')[0].src+="?autoplay=1&playsinline=1";
//   $('#iframe')[0].src+="?fs=0&modestbranding=1&playsinline=1&rel=0";
//   });

// play u-tube  video 




// var playicon = document.getElementById("playBtn");
// playicon.addEventListener("click", function () {
//     document.getElementById("box-left").style.display = "none";
//     document.getElementById('iframe').style.display = "block";
//     var iframe = document.getElementById('iframe');
//     iframe.src += "?autoplay=1&playsinline=1";
// });





// Drop down list in contact form

// var checkList = document.querySelector('#list1');
// checkList.addEventListener('click', function () 
// {
//    if (checkList.classList.contains('visible'))
//   checkList.classList.remove('visible');
//   else
//     checkList.classList.add('visible');
// }
// );

//// Drop down list in contact form

// var checkList = document.getElementById('list1');
// checkList.getElementsByClassName('anchor')[0].onclick = function() {
//   if (checkList.classList.contains('visible'))
//     checkList.classList.remove('visible');
//   else
//     checkList.classList.add('visible');
// }







//plus button 
// const button = document.querySelector('.browLife')
// const p = document.querySelector('.text')
// button.addEventListener('click', () => {
//     var visibility = window.getComputedStyle(p).display;
//     if (visibility === 'none') {
//         p.style.display = 'block'
//         console.log(show);
//     } else {
//         p.style.display = 'none'
//         console.log("hide");
//     }
// })

// const button = document.querySelectorAll(".fa-plus-circle");
// for (var i = 0; i < button.length; i++) {
//     console.log("for loop");

//     hideShowDiv(i);
// }

// function hideShowDiv(i) {
//     button[i].addEventListener("click", function () {

//         const div = document.querySelectorAll(".offer__content-para-box-data");
//         var visibility = div[i];
//         var d = window.getComputedStyle(visibility).display;
//         console.log(d);
//         if (d == 'none') {
//             visibility.style.display = 'block'
//         } else {
//             visibility.style.display = 'none'
//         }
//     });
// }