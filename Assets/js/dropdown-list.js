const List = () => {
    var t = document.getElementsByClassName("form__bottom-left-service-dropdown-check-list");
    var list = t[0];
    console.log(t.length);
    if(list){
    list.addEventListener("click", function () {
        console.log("Clicked");
    
        var doc = document.querySelector(".form__bottom-left-service-dropdown-check-list-items");
        if(doc.style.display == "block"){
            doc.style.display = "none";
        }else{
            doc.style.display = "block";
        }
    });}
}

export default List