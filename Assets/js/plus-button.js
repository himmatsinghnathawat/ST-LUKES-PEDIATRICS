const Plus = () => {
  //     const button = document.querySelectorAll(".fa-plus-circle");
  //     for (var i = 0; i < button.length; i++) {
  //         console.log("for loop");

  //         hideShowDiv(i);
  //     }

  //     function hideShowDiv(i) {
  //         if(button){
  //         button[i].addEventListener("click", function () {

  //             const div = document.querySelectorAll(".offer__content-para-box-data");
  //             var visibility = div[i];
  //             var d = window.getComputedStyle(visibility).display;
  //             console.log(d);
  //             if (d == 'none') {
  //                 visibility.style.display = 'block'
  //             } else {
  //                 visibility.style.display = 'none'
  //             }
  //         });}
  //     }
  // }




  const him = document.querySelectorAll(".showBtn");
  him.forEach((e, index1) => {
    show(index1);
  });

  function show(index2) {
    if (him) {
      var box =him[index2];
      box.addEventListener("click", function () {
        const main = document.querySelectorAll(".offer__content-para-box-data");
        var y = main[index2];
        var count = [index2];
        main.forEach((e, index21) => {
          if(count != index21){
            hide(index21);
            console.log('not equal')
          }
          else{

          }
         
        });
      
        if (window.getComputedStyle(y).display == "none") {
          y.style.display = "block";
          box.className = "fas fa-minus-circle showBtn";
          box.style.color='red';
          console.log('block');
        } else if (window.getComputedStyle(y).display == "block") {
         box.className = "fas fa-plus-circle showBtn";
          box.style.color='gray';
          y.style.display = "none";
          console.log('none')
        }
        console.log(main[index2]);
      });
    }
  }

  // hide another div on click
  function hide(a){
    var box =him[a];
    const main = document.querySelectorAll(".offer__content-para-box-data");
    var y = main[a];
    box.className = "fas fa-plus-circle showBtn";
      box.style.color='gray';
      y.style.display = "none";
    console.log('hide')
  }
}
export default Plus