var request = new XMLHttpRequest();

request.open('GET','https://data.sfgov.org/api/views/yitu-d5am/rows.json?accessType=DOWNLOAD');
//request.responseType = 'text';


request.onreadystatechange = function () {
     let strresult = request.responseText;

    let obj = JSON.parse(strresult);
    var result="";
    var movieyr="";
    var production_com ="";
    var demo="";

    for( i=0; i < obj["data"].length ; i ++)

        //console.log(obj['data'][i]);

     if(obj['data'][i][10] == "Golden Gate Bridge"){

         result += "<li>" + obj['data'][i][8] + "</li>";

         movieyr +="<li>" + obj ['data'][i][9] + "</li>";

         production_com  +="<li>" + obj['data'][i][13] + "</li>";

    }

    document.getElementById("result").innerHTML = result + ", " + movieyr + "," + production_com ;

}
request.send();

