const vector1 = ['カタール', 'ブラジル', 'ベルギー', 'フランス', 'アルゼンチン', 'イングランド', 'スペイン', 'ポルトガル'];
const vector2 = ['メキシコ', 'オランダ', 'デンマーク', 'ドイツ', 'ウルグアイ', 'スイス', 'アメリカ', 'クロアチア'];
const vector3 = ['セネガル', 'イラン', '日本', 'モロッコ', 'セルビア', 'ポーランド', '韓国', 'チュニジア'];
const vector4 = ['カメルーン', 'カナダ', 'エクアドル', 'サウジアラビア', 'ガーナ', 'オーストラリア', 'コスタリカ', 'ウェールズ'];

const countryElements = document.getElementById('lot');

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
list += '<table class="table">'
list += '<tbody>';
list += '<tr>';
list += '<th>GroupA</th>';
list += '<th>GroupB</th>';
list += '<th>GroupC</th>';
list += '<th>GroupD</th>';
list += '<th>GroupE</th>';
list += '<th>GroupF</th>';
list += '<th>GroupG</th>';
list += '<th>GroupH</th>';
list += '</tr>';
list += '<tr>';
for (let i = 0; i < 8; i++) {
  list += '<td>' + vector1[i] + '</td>';
}
list += '</tr>';
list += '<tr>';
for (let i = 0; i < 8; i++) {
  list += '<td>' + vector2[i] + '</td>';
}
list += '</tr>';
list += '<tr>';
for (let i = 0; i < 8; i++) {
  list += '<td>' + vector3[i] + '</td>';
}
list += '</tr>';
list += '<tr>';
for (let i = 0; i < 8; i++) {
  list += '<td>' + vector4[i] + '</td>';
}
list += '</tr>';
list += '</tbody>';
list += '</table>';
countryElements.innerHTML = list ;