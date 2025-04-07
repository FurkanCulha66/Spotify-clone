const data = [
    { name: "Tarkan", type: "Sanatçı" },
    { name: "Sezen Aksu", type: "Sanatçı" },
    { name: "Fikret Kızılok", type: "Sanatçı" },
    { name: "Sertab Erener", type: "Sanatçı" },
    { name: "Şımarık", type: "Şarkı" },
    { name: "Rakkas", type: "Şarkı" },
    { name: "Gelinim", type: "Şarkı" },
  ];
  
  function searchMusic() {
    const input = document.getElementById('searchInput').value.toLowerCase();
    const resultsList = document.getElementById('resultsList');
    resultsList.innerHTML = ''; // Her tuş basıldığında önceki sonuçları temizle
  
    if (input === '') return;
  
    const filteredData = data.filter(item =>
      item.name.toLowerCase().includes(input)
    );
  
    filteredData.forEach(item => {
      const li = document.createElement('li');
      li.textContent = `${item.name} (${item.type})`;
      resultsList.appendChild(li);
    });
  }
  