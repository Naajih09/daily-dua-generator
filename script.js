const duas = [
    "اللّهُمَّ إِنِّي أَسْأَلُكَ العَفْوَ وَالعَافِيَةَ",
    "رَبِّ زِدْنِي عِلْمًا",
    "اللَّهُمَّ اجْعَلْنِي مِنَ التَّوَّابِينَ",
    "رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً وَفِي الآخِرَةِ حَسَنَةً",
    "اللهم اهدني وسددني",
    "اللَّهُمَّ إِنِّي أَسْأَلُكَ رِضَاكَ وَالْجَنَّةَ"
  ];
  
  function generateDua() {
    const randomIndex = Math.floor(Math.random() * duas.length);
    document.getElementById("dua-display").innerText = duas[randomIndex];
  }
  