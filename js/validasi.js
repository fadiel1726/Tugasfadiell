function cekform() {
  id = document.getElementById("id");
  nama = document.getElementById("txtnama");
  if (id.value == "") {
    alert("id tidak ada");
    id.focus();
    return false;
  } else if (nama.value == "") {
    alert("Nama tidak boleh kosong");
    nama.focus();
    return false;
  } else {
    alert("Data Tersimpan");
    return true;
  }
}