document.getElementById("search-btn").addEventListener("click", function(event){
    event.preventDefault()
  });
  var alldata;

  function getStars(rate){
    let stars=``;
  let full = `<span class='fa fa-star' style = 'color:#E59819'></span>`;
  let half = `<span class='fa fa-star-half-o' style = 'color:#E59819'></span>`;
  let empty = `<span class='fa fa-star-o' style = 'color:#E59819'></span>`;
  var cnt = Math.floor(rate);
  for(var i = 0;i<cnt;++i){
    stars+=full;
  }
  if(rate != cnt){
    stars+=half;
    cnt++;
  }
  for(var i = cnt;i<5;++i){
    stars+=empty;
  }
  return stars;
}
function addToHTML(data) {
    let courses = data["results"];
    alldata = courses;
    let res1 = "";
    let res2 = "";
    md = parseInt((alldata.length + 4) / 5);
    let numberofcourses = alldata.length;
    res1 += "<div class=" + '"' + "carousel-item active" + '"' + ">";
    res1 += "<div class="+ '"'+ "d-flex justify-content-center"+ '"' +">";
    for (var i = 0; i < Math.min(courses.length, 5); i++) {
        let author = alldata[i]["visible_instructors"][0]["title"];
        let image = alldata[i]["image_480x270"];
        let price = alldata[i]["price"];
        let rating = alldata[i]["avg_rating"];
        let title = alldata[i]["title"];
        
        res1 += '<li class = "text3s2">';
        res1 += `<img src="${image}">
                <div class = "caption">
                    <h4>${title}</h4>
                    <p>${author}</p>
                    <div><span style = "margin-right:5px">${rating.toFixed(1)}</span>${getStars(rating.toFixed(1))}</div>
                    <h5>${price}</h5>
                </div>`;
                res1 += "</li>";
        res2 += `<a href="#">${title}</a>`;
    }
    res1 += "</div>";
    res1 += "</div>";
    numberofcourses -= Math.min(courses.length, 5);
    let cnt = 0;
    while(numberofcourses > 0){
        res1 += "<div class=" + '"' + "carousel-item" + '"' + ">";
        res1 += "<div class="+ '"'+ "d-flex justify-content-center"+ '"' +">";
        let sz = Math.min(numberofcourses, 5);
        numberofcourses -= sz;
        if(sz < 5){
            cnt = Math.max(0, cnt - 2);
        }
        for (var i = cnt; i < Math.min(cnt + 5, alldata.length); i++) {
            let author = alldata[i]["visible_instructors"][0]["title"];
            let image = alldata[i]["image_480x270"];
            let price = alldata[i]["price"];
            let rating = alldata[i]["avg_rating"];
            let title = alldata[i]["title"];
            
            res1 += '<li class = "text3s2">';
            res1 += `<img src="${image}">
                    <div class = "caption">
                        <h4>${title}</h4>
                        <p>${author}</p>
                        <div><span style = "margin-right:5px">${rating.toFixed(1)}</span>${getStars(rating.toFixed(1))}</div>
                        <h5>${price}</h5>
                    </div>`;
                    res1 += "</li>";
                    res2 += `<a href="#">${title}</a>`;
        }
        cnt+= 5;
        res1 += "</div>";
        res1 += "</div>";
    }
    document.getElementsByClassName("carousel-inner")[0].innerHTML = res1;
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

// fetch('https://api.jsonbin.io/v3/b/62f5ba62e13e6063dc76baff?meta=false')
//     .then((response) => response.json())
//     .then((data) => addToHTML(data));
   



let category = 'python';
 let uri = 'https://www.udemy.com/api-2.0/courses/?search='+category+'&fields[course]=@all&page_size=15';
  let h= new Headers();
  h.append("Accept","application/json, text/plain, */*");
  h.append("Authorization","Basic M05kN3ByOTBrWEJhN0VTdkZFYUh2eklkTGg5MkxZSXJEZ2NWUmU2TDpDT2Yxb3Y0azNSZ29lbmI2Q0o5MzRZMzM2ZEJMbnNEQlB3RlNFNHBFUFJJM0pMZkNEd2c5YkVDNGhpdXJwbUJ6dWJOWm56anBiT1FTM3V6dTRDSFJnS3VkbEptV1l4Y21RVnNGSDFXelFjeDFVVEZVQ1VIOUlya0Jwbkp1VmNjUA==");
  h.append("Content-Type", "application/json;charset=utf-8");
  let req = new Request(uri,{
    method:'GET',
    headers:h,
  });
  fetch(req) 
  .then(Response => Response.json())
  .then(data => {addToHTML(data);
    // addCourses();
  });