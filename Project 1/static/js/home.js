let numberofcoursesperunit = 5;
let category = 'python';
let lastClicked = 1;
document.getElementById(1).style.fontWeight = "bold";
const cat = new Map([
  ['1', "python"],
  ['2', "excel"],
  ['3', "web-development"],
  ['4', "javascript"],
  ['5', "datascience"],
  ['6', "aws-certification"],
  ['7', "drawing"]
]);
let categoryTitle=[];
categoryTitle['python']="Expand your career opportunities with Python";
categoryTitle['web-development']="Build websites and applications with Web Development";
categoryTitle['excel']="Analyze and visualize data with Excel";
categoryTitle['javascript']="Grow your software development skills with JavaScript";
categoryTitle['datascience']="Lead data-driven decisions with Data Science";
categoryTitle['aws-certification']="Become an expert in cloud computing with AWS Certification";
categoryTitle['drawing']="Expand your creative skillset with Drawing";
let categoryDisc=[];
categoryDisc['python']="Take one of Udemy’s range of Python courses and learn how to code using this incredibly useful language. Its simple syntax and readability makes Python perfect for Flask, Django, data science, and machine learning. You’ll learn how to build everything from games to sites to apps. Choose from a range of courses that will appeal to both beginners and advanced developers alike.";
categoryDisc['web-development']="The world of web development is as wide as the internet itself. Much of our social and vocational lives play out on the internet, which prompts new industries aimed at creating, managing, and debugging the websites and applications that we increasingly rely on.";
categoryDisc['excel']="Take a Microsoft Excel course from Udemy, and learn how to use this industry-standard software. Real-world experts will show you the basics like how to organize data into sheets, rows and columns, and advanced techniques like creating complex dynamic formulas. Both small businesses and large companies use Excel to turn their raw data into actionable insights.";
categoryDisc['javascript']="The world of web development is as wide as the internet itself. Much of our social and vocational lives play out on the internet, which prompts new industries aimed at creating, managing, and debugging the websites and applications that we increasingly rely on.";
categoryDisc['datascience']="The world of web development is as wide as the internet itself. Much of our social and vocational lives play out on the internet, which prompts new industries aimed at creating, managing, and debugging the websites and applications that we increasingly rely on.";
categoryDisc['aws-certification']="The world of web development is as wide as the internet itself. Much of our social and vocational lives play out on the internet, which prompts new industries aimed at creating, managing, and debugging the websites and applications that we increasingly rely on.";
categoryDisc['drawing']="Want to start drawing for fun or take your craft to the next level? Explore our online drawing classes and learn pencil drawing, figure drawing, cartoon drawing, character drawing for cartoons and anime, illustration, sketching, shading and more. Take an overview course on the fundamentals of drawing or zero in on an area you’d like to improve with a specialized course. We’ve got tons of options to get — and keep — you going.";
let categoryBtn=[];
categoryBtn['python']="Explore Python";
categoryBtn['web-development']="Explore Web Development";
categoryBtn['excel']="Explore Excel";
categoryBtn['javascript']="Explore JavaScript";
categoryBtn['datascience']="Explore Data Science";
categoryBtn['aws-certification']="Explore AWS Certification";
categoryBtn['drawing']="Explore Drawing";

document.getElementById("search-btn").addEventListener("click", function(event){
    event.preventDefault()
  });
  function calcaluteNumberofCourses(){
    var clientWidth = document.getElementById('courses').clientWidth;
    numberofcoursesperunit = parseInt(clientWidth / 250);
}
  window.addEventListener('resize', function(event){
    var clientWidth = document.getElementById('courses').clientWidth;
    if(parseInt(clientWidth / 250) == 0){
        getAlldata();
    }
    else if(parseInt(clientWidth / 250) != numberofcoursesperunit){
        getAlldata();
    } 
});
window.addEventListener("load" , () =>{
    getAlldata();

  });



function customizeCategory(id){
    category = cat.get(id);
    if(lastClicked != 0){
        document.getElementById(lastClicked).style.fontWeight = "normal";
    }
    document.getElementById(id).style.fontWeight = "bold";
    lastClicked = id;
    change_info(cat.get(id));
    getAlldata();
}


  let alldata;

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

function init(data){
    let courses = data["results"];
    alldata = courses;
    addCourses();
}

function change_info(id){
    let div = document.querySelector('.text3s1');
    div.innerHTML = '';
      div.innerHTML =
       `
        <h1>${categoryTitle[id]}</h1>
        <p> ${categoryDisc[id]}</p>
        <button class="explore">${categoryBtn[id]}</a>
      `
  }


function addCourses() {
    let res1 = "";
    let res2 = "";
    let numberofcourses = alldata.length;
    calcaluteNumberofCourses();
    change_info(category);
    if(numberofcourses == 0)numberofcourses++;
    let ids = 0;
    res1 += "<div class=" + '"' + "carousel-item active" + '"' + ">";
    res1 += "<div class="+ '"'+ "d-flex justify-content-center"+ '"' +">";
    for (var i = 0; i < Math.min(alldata.length, numberofcoursesperunit); i++) {
        let author = alldata[i]["visible_instructors"][0]["title"];
        let image = alldata[i]["image_480x270"];
        let price = alldata[i]["price"];
        let rating = alldata[i]["avg_rating"];
        let title = alldata[i]["title"];
        
        res1 += "<li id = " + '"' + "course" + ids + '"' + " class = " + '"' + "text3s2"+ '"'+ ">";
        res1 += `<img src="${image}">
                <div class = "caption">
                    <h4>${title}</h4>
                    <p>${author}</p>
                    <div><span style = "margin-right:5px">${rating.toFixed(1)}</span>${getStars(rating.toFixed(1))}</div>
                    <h5>${price}</h5>
                </div>`;
                res1 += "</li>";
        res2 += `<a href="#">${title}</a>`;
        ids++;
    }
    res1 += "</div>";
    res1 += "</div>";
    numberofcourses -= Math.min(alldata.length, numberofcoursesperunit);
    let cnt = 0;
    while(numberofcourses > 0){
        res1 += "<div class=" + '"' + "carousel-item" + '"' + ">";
        res1 += "<div class="+ '"'+ "d-flex justify-content-center"+ '"' +">";
        let sz = Math.min(numberofcourses, 5);
        numberofcourses -= sz;
        if(sz < numberofcoursesperunit){
            cnt = Math.max(0, cnt - 2);
        }
        for (var i = cnt; i < Math.min(cnt + numberofcoursesperunit, alldata.length); i++) {
            let author = alldata[i]["visible_instructors"][0]["title"];
            let image = alldata[i]["image_480x270"];
            let price = alldata[i]["price"];
            let rating = alldata[i]["avg_rating"];
            let title = alldata[i]["title"];
            
            res1 += "<li id = " + '"' + "course" + ids + '"' + " class = " + '"' + "text3s2"+ '"'+ ">";
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
        cnt+= numberofcoursesperunit;
        ids++;
        res1 += "</div>";
        res1 += "</div>";
    }
    document.getElementsByClassName("carousel-inner")[0].innerHTML = res1;
    document.getElementById("myDropdown").innerHTML = res2;

}




function filterFunction2() {

    var input, filter, a;

    input = document.getElementById("searchbar");
    filter = input.value.toLowerCase();
    category = filter;
    document.getElementById(lastClicked).style.fontWeight = "normal";
    lastClicked = 0;
    getAlldata();
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


function getAlldata(){
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
    .then(data => {init(data);
    });
}







//   function changeNumOfCoursesSZ5(sz) {
//     if(sz.matches){
//         numberofcoursesperunit = 5;
//       getAlldata();
//     }
//   }
//   function changeNumOfCoursesSZ4(sz) {
//     if(sz.matches){
//         numberofcoursesperunit = 4;
//         getAlldata();
//     }
//   }
//   function changeNumOfCoursesSZ3(sz) {
//     if(sz.matches){
//         numberofcoursesperunit = 3;
//         getAlldata();
//     }
//   }
//   function changeNumOfCoursesSZ2(sz) {
//     if(sz.matches){
//         numberofcoursesperunit = 2;
//         getAlldata();
//     }
//   }
//   function changeNumOfCoursesSZ1(sz) {
//     if(sz.matches){
//         numberofcoursesperunit = 1;
//         getAlldata();
//     }
//   }
  
//   const sz5 = window.matchMedia("(min-width:1401px)");
//   const sz4 = window.matchMedia("(min-width:1151px) and (max-width: 1400px)");
//   const sz3 = window.matchMedia("(min-width:901px) and (max-width: 1150px)");
//   const sz2 = window.matchMedia("(min-width:701px) and (max-width: 900px)");
//   const sz1 = window.matchMedia("(max-width: 700px)");
//   changeNumOfCoursesSZ5(sz5); // Call listener function at run time
//   changeNumOfCoursesSZ4(sz4); // Call listener function at run time
//   changeNumOfCoursesSZ3(sz3); // Call listener function at run time
//   changeNumOfCoursesSZ2(sz2); // Call listener function at run time
//   changeNumOfCoursesSZ1(sz1); // Call listener function at run time
  
//   sz5.addListener(changeNumOfCoursesSZ5); // Attach listener function on state changes
//   sz4.addListener(changeNumOfCoursesSZ4); // Attach listener function on state changes
//   sz3.addListener(changeNumOfCoursesSZ3); // Attach listener function on state changes
//   sz2.addListener(changeNumOfCoursesSZ2); // Attach listener function on state changes
//   sz1.addListener(changeNumOfCoursesSZ1); // Attach listener function on state changes






// function filterFunction() {

//     var input, filter, a;

//     input = document.getElementById("searchbar");
//     filter = input.value.toUpperCase();

//     a = document.getElementById("myDropdown").getElementsByTagName("a");

//     if (filter == ""){
//         document.getElementById("myDropdown").style.display = "none";
//     }else{
//         document.getElementById("myDropdown").style.display = "block";
//     }

//     for (var i = 0; i < a.length; i++) {
//         txtValue = a[i].innerHTML;
//         if (txtValue.toUpperCase().indexOf(filter) > -1) {
//             a[i].style.display = "";
//         } else {
//             a[i].style.display = "none";
//         }
//     }
// }
