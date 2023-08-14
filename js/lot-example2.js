const vector1 = ['CountryA1', 'CountryA2', 'CountryA3', 'CountryA4', 'CountryA5', 'CountryA6', 'CountryA7', 'CountryA8'];
const vector2 = ['CountryB1', 'CountryB2', 'CountryB3', 'CountryB4', 'CountryB5', 'CountryB6', 'CountryB7', 'CountryB8'];
const vector3 = ['CountryC1', 'CountryC2', 'CountryC3', 'CountryC4', 'CountryC5', 'CountryC6', 'CountryC7', 'CountryC8'];
const vector4 = ['CountryD1', 'CountryD2', 'CountryD3', 'CountryD4', 'CountryD5', 'CountryD6', 'CountryD7', 'CountryD8'];

const countryElements = document.getElementById('country');

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
}
  
shuffleArray(vector1);
shuffleArray(vector2);
shuffleArray(vector3);
shuffleArray(vector4);

let list = '';

for (let i = 0; i < 8; i++) {
  list += '<li>' + vector1[i] + '</li>';
}

for (let i = 0; i < 8; i++) {
  list += '<li>' + vector2[i] + '</li>';
}

for (let i = 0; i < 8; i++) {
  list += '<li>' + vector3[i] + '</li>';
}

for (let i = 0; i < 8; i++) {
  list += '<li>' + vector4[i] + '</li>';
}

countryElements.innerHTML = '<ul>' + list + '</ul>';
