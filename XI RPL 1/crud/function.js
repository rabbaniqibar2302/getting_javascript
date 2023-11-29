// store data barang
var data_barang = [
    "Buku",
    "Pensil",
    "Spidol"
];

function show_barang(){
    var list_barang = document.getElementById("list_barang");

    // tampilkan semua barang
    for(let i = 0; i < data_barang.length; i++){
      var btn_hapus = "<a href='#' onclick='hapus_barang("+i+")'>hapus</a>";  

      var btn_edit = "<a href='#' onclick='edit_barang("+i+")'>edit</a>";
      
    //tampilkan semuanya
    list_barang.innerHTML += "<li>" + data_barang[i] + "[" +btn_edit+ "|" +btn_hapus+ "]<li>"
    };
};

function add_barang(){
    var input = document.querySelector("input[name=barang]");
    data_barang.push(input.value);
    show_barang();
};

function edit_barang(id){
    var new_barang = prompt("Nama Baru", data_barang[id]);
    data_barang[id] = new_barang;
    show_barang();
};

function delete_barang(id){
    data_barang.splice(id,1);
    show_barang();
};

show_barang();