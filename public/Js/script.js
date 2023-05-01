var bgImages = [
    'D:/omar\'s PC/omar pc/2000-4K-Wallpapers-Themefoxx-01/image1.jpg',
    'D:/omar\'s PC/omar pc/2000-4K-Wallpapers-Themefoxx-01/image2.jpg',
    'D:/omar\'s PC/omar pc/2000-4K-Wallpapers-Themefoxx-01/image3.jpg'
  ];
  
  var currentIndex = 0;
  var bgImage = document.querySelector('.bgimage');
  
  function changeBgImage() {
    bgImage.style.backgroundImage = 'url(' + bgImages[currentIndex] + ')';
    currentIndex++;
    if (currentIndex === bgImages.length) {
      currentIndex = 0;
    }
  }
  
  setInterval(changeBgImage, 5000);
  