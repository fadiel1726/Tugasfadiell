function cekform() {
    id = document.getElementById("id");
    nama = document.getElementById("txtnama");
    idbuku = document.getElementById("txtid");
    judulbuku = document.getElementById("txtjudul");
    if (id.value == "") {
      alert("id kosong");
      id.focus();
      return false;
    } else if (nama.value == "") {
      alert("Nama kosong");
      nama.focus();
      return false;
    } else if (idbuku.value == "") {
        alert("id buku kosong");
        idbuku.focus();
        return false;
    } else if (judulbuku.value == "") {
        alert("judul buku belum di isi");
        judulbuku.focus();
        return false;
    } else {
      alert("Terima Kasih!!")
      return true;
    }
  }