function cekform() {
    id = document.getElementById("id");
    judul = document.getElementById("txtjudul");
    penerbit = document.getElementById("txtpenerbit");
    pengarang = document.getElementById("txtpengarang");
    if (id.value == "") {
      alert("id kosong");
      id.focus();
      return false;
    } else if (judul.value == "") {
      alert("Judul buku belum di isi");
      judul.focus();
      return false;
    } else if (penerbit.value == "") {
        alert("nama penerbit kosong");
        penerbit.focus();
        return false;
    } else if (pengarang.value == "") {
        alert("nama pengarang kosong");
        pengarang.focus();
        return false;
    } else {
      alert("Data Tersimpan")
      return true;
    }
  }