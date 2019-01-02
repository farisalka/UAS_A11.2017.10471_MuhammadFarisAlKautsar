function loadXML(file)
{
    var xmlHttp;
    if (window.XMLHttpRequest)
    {
        xmlHttp = new XMLHttpRequest();
    }else{
        xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlHttp.onreadystatechange = function()
    {
        if(xmlHttp.readyState==4 && xmlHttp.status==200){
        var xml = xmlHttp.responseXML;
        person = xml.documentElement.getElementsByTagNama("person");
        nama = person[0].getElementsByTagNama("nama")[0].childNodes[0].nodeValue;
        document.getElementById("data").innerHTML = nama;
        }

    }
    xmlHttp.open("GET",file,true);
    xmlHttp.send("");
}