function pilih(){
    var wisata = document.getElementById("wisata");
    var pilihan = document.getElementById("pilihan");
    var option = document.createElement("option");

    option.text = wisata.options[wisata.selectedIndex].text;
    try{
        pilihan.add(option,null);
    }
    catch(ex){
        pilihan.add(option);
    }
}