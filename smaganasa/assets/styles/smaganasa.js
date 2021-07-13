function inputName(){
    const name = prompt("Masukkan nama Anda");
    if (name == "" || !name) {
        alert("Silahkan isi nama Anda terlebih dahulu");
        inputName();
    } else {
        alert("Selamat datang " + name);
    }
}

inputName();

const tombolMenu = document.getElementsByClassName('tombol-menu')[0];
const menu = document.getElementsByClassName('menu')[0];

tombolMenu.onclick = function(){
    menu.classList.toggle('active');
}

menu.onclick = function(){
    menu.classList.toggle('active');
} 