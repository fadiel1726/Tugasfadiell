function cekform(){
    id = document.getElementById('id');
    nama = document.getElementById('txtnama');
    jenis = document.getElementById('txtjenis');
    alamat = document.getElementById('txtalamat');
    if(id.value=='') {
        alert('id tidak ada');
        id.focus();
        return false;
    } else if (nama.value=='') {
        alert('Nama tidak boleh kosong');
        nama.focus();
        return false;
    } else if (jenis.value=='') {
        alert('Pilih jenis Kelamin');
        jenis.focus();
        return false;
    } else if (alamat.value=='') {
        alert('alamat salah');
        alamat.focus();
        return false;
    } else {
        alert('Terima kasih telah mengisi form ini')
        return true;
    }
}