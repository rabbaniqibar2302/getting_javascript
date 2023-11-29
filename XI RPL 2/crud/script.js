var data_barang = [
    "test1",
    "test2",
    "test3"
];

function show_barang(){
    // buat sambungkan ke form
    var list_barang = document.getElementById("list_barang");
     // clear list barang
     list_barang.innerHTML = "";

    // cetaq semwa barank
    for(let i = 0; i < data_barang.length; i++){
        // tombol edit
        var btnEdit = "<a href='#' onclick='edit_barang("+i+")'>Edit</a>";
        // tombol delete
        var btnHapus = "<a href='#' onclick='delete_barang("+i+")'>Delete</a>";
        // menampilkan tombol data barang
        list_barang.innerHTML += "<li>" + data_barang[i] + "[" + btnEdit + "|" + btnHapus + "]</li>";
    }
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
    data_barang.splice(id, 1);
    show_barang();
};

show_barang();