function konversiSuhu() {
    var inputSuhu = document.getElementById("inputSuhu").value;
    var hasilKonversi = document.getElementById("hasilKonversi");
    var penjelasan = document.getElementById("penjelasan");
    var errorText = document.getElementById("errorText");
  
    // Validasi suhu yang dimasukkan harus angka
    if (isNaN(inputSuhu)) {
      errorText.textContent = "Masukkan suhu dalam angka!";
      hasilKonversi.value = "";
      penjelasan.value = "";
      return;
    }
  
    errorText.textContent = "";
  
    // Melakukan perhitungan konversi suhu
    var suhuCelcius = parseFloat(inputSuhu);
    var suhuFahrenheit = (suhuCelcius * 9/5) + 32;


  
    // Menampilkan hasil konversi suhu
    hasilKonversi.value = suhuFahrenheit.toFixed(2);
    penjelasan.value = suhuCelcius + "\u00B0C * (9/5) + 32 = " + suhuFahrenheit.toFixed(2) + "\u00B0F";

  }

function reverseKonversi() {
    var inputSuhu = document.getElementById("inputSuhu").value;
    var hasilKonversi = document.getElementById("hasilKonversi");
    var penjelasan = document.getElementById("penjelasan");
    var errorText = document.getElementById("errorText");
  
    // Validasi suhu yang dimasukkan harus angka
    if (isNaN(inputSuhu)) {
      errorText.textContent = "Masukkan suhu dalam angka!";
      hasilKonversi.value = "";
      penjelasan.textContent = "";
      return;
    }
  
    errorText.textContent = "";
  
    // Melakukan perhitungan konversi suhu
    var suhuFahrenheit = parseFloat(inputSuhu);
    var suhuCelcius = (suhuFahrenheit - 32) * 5/9;
  
    // Menampilkan hasil konversi suhu
    hasilKonversi.value = suhuCelcius.toFixed(2);
    penjelasan.textContent = suhuFahrenheit + " \u00B0F (-32) * 5/9 = " + suhuCelcius.toFixed(2) + " \u00B0C.";
  }
  

function resetForm() {
    var inputSuhu = document.getElementById("inputSuhu");
    var hasilKonversi = document.getElementById("hasilKonversi");
    var penjelasan = document.getElementById("penjelasan");

    // Reset inputan dan hasil konversi
    inputSuhu.value = "";
    hasilKonversi.value = "";
    penjelasan.value = "";
  }
  