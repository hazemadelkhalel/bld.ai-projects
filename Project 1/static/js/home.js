document.getElementById("search-btn").addEventListener("click", function(event){
    event.preventDefault()
  });

function addToHTML(data) {

    let courses = data["courses"];
    let res1 = "";
    let res2 = "";

    for (var i = 0; i < courses.length; i++) {
        let author = courses[i]["author"];
        let image = courses[i]["image"];
        let price = courses[i]["price"];
        let rating = courses[i]["rating"];
        let title = courses[i]["title"];
        
        res1 += '<li class = "text3s2">';
        res1 += `<img src="${image}">
                <div class = "caption">
                    <h1>${title}</h1>
                    <p>${author}</p>
                    <h3>&euro;${price}</h3>
                </div>`;
        res1 += "</li>";

        res2 += `<a href="#">${title}</a>`;
    }
    document.getElementsByClassName("text3img")[0].innerHTML = res1;
    document.getElementById("myDropdown").innerHTML = res2;
}

function filterFunction() {

    var input, filter, a;

    input = document.getElementById("searchbar");
    filter = input.value.toUpperCase();

    a = document.getElementById("myDropdown").getElementsByTagName("a");

    if (filter == ""){
        document.getElementById("myDropdown").style.display = "none";
    }else{
        document.getElementById("myDropdown").style.display = "block";
    }

    for (var i = 0; i < a.length; i++) {
        txtValue = a[i].innerHTML;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            a[i].style.display = "";
        } else {
            a[i].style.display = "none";
        }
    }

}


function cleanSearch() {

    var input, filter, a;

    input = document.getElementById("searchbar");
    filter = input.value.toUpperCase();
    ico = document.getElementById("search-icon");
    a = document.getElementById("myDropdown").getElementsByTagName("a");

    if (filter == ""){
        document.getElementById("myDropdown").style.display = "none";
    }
}

fetch('https://api.jsonbin.io/v3/b/62f5ba62e13e6063dc76baff?meta=false')
    .then((response) => response.json())
    .then((data) => addToHTML(data));
   