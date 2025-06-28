//tangani event saat form dikirim
document.getElementById("formkontak").addEventListener("submit", function (e) {
    e.preventDefault();//menecegah reload halaman
    alert("terima kasih,form berhasil di kirim!");
    this.reset();//kosongkan semua input setelah submit
});