const Pot1 = ['カタール', 'ブラジル', 'ベルギー', 'フランス', 'アルゼンチン', 'イングランド', 'スペイン', 'ポルトガル'];
const Pot2 = ['メキシコ', 'オランダ', 'デンマーク', 'ドイツ', 'ウルグアイ', 'スイス', 'アメリカ', 'クロアチア'];
const Pot3 = ['セネガル', 'イラン', '日本', 'モロッコ', 'セルビア', 'ポーランド', '韓国', 'チュニジア'];
const Pot4 = ['カメルーン', 'カナダ', 'エクアドル', 'サウジアラビア', 'ガーナ', 'オーストラリア', 'コスタリカ', 'ウェールズ'];

const countryElements = document.getElementById('group');

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
}
  
shuffleArray(Pot1);
shuffleArray(Pot2);
shuffleArray(Pot3);
shuffleArray(Pot4);

const groupA = {
    country : [Pot1[0],Pot2[0],Pot3[0],Pot4[0]],
    point : {
        name1 : Pot1[0],
        point1 : 0,
        name2 : Pot2[0],
        point2 : 0,
        name3 : Pot3[0],
        point3 : 0,
        name4 : Pot4[0],
        point4 : 0,
    },
    match : {
        match1_pot1_name : Pot1[0],
        match1_pot3_name : Pot3[0],
        match2_pot2_name : Pot2[0],
        match2_pot4_name : Pot4[0],
        match3_pot1_name : Pot1[0],
        match3_pot4_name : Pot4[0],
        match4_pot2_name : Pot2[0],
        match4_pot3_name : Pot3[0],
        match5_pot1_name : Pot1[0],
        match5_pot2_name : Pot2[0],
        match6_pot4_name : Pot4[0],
        match6_pot3_name : Pot3[0],
        match1_pot1_score : Math.floor( Math.random() * 4 ),
        match1_pot3_score : Math.floor( Math.random() * 4 ),
        match2_pot2_score : Math.floor( Math.random() * 4 ),
        match2_pot4_score : Math.floor( Math.random() * 4 ),
        match3_pot1_score : Math.floor( Math.random() * 4 ),
        match3_pot4_score : Math.floor( Math.random() * 4 ),
        match4_pot2_score : Math.floor( Math.random() * 4 ),
        match4_pot3_score : Math.floor( Math.random() * 4 ),
        match5_pot1_score : Math.floor( Math.random() * 4 ),
        match5_pot2_score : Math.floor( Math.random() * 4 ),
        match6_pot4_score : Math.floor( Math.random() * 4 ),
        match6_pot3_score : Math.floor( Math.random() * 4 ),
    },
};

/*let list = '';
list += '<table class="table">'
list += '<tbody>';
list += '<tr>';
list += '<th>GroupA</th>';
list += '</tr>';
list += '<tr>';
list += '<tr>';
list += '<th>'+groupA.match.match1_pot1_name+' '+groupA.match.match1_pot1_score+' - '+groupA.match.match1_pot3_score+' '+groupA.match.match1_pot3_name+'</th>';
list += '</tr>';
list += '<tr>';
list += '<th>'+groupA.match.match2_pot2_name+' '+groupA.match.match2_pot2_score+' - '+groupA.match.match2_pot4_score+' '+groupA.match.match2_pot4_name+'</th>';
list += '</tr>';
list += '<tr>';
list += '<th>'+groupA.match.match3_pot1_name+' '+groupA.match.match3_pot1_score+' - '+groupA.match.match3_pot4_score+' '+groupA.match.match3_pot4_name+'</th>';
list += '</tr>';
list += '<tr>';
list += '<th>'+groupA.match.match4_pot2_name+' '+groupA.match.match4_pot2_score+' - '+groupA.match.match4_pot3_score+' '+groupA.match.match4_pot3_name+'</th>';
list += '</tr>';
list += '<tr>';
list += '<th>'+groupA.match.match5_pot1_name+' '+groupA.match.match5_pot1_score+' - '+groupA.match.match5_pot2_score+' '+groupA.match.match5_pot2_name+'</th>';
list += '</tr>';
list += '<tr>';
list += '<th>'+groupA.match.match6_pot4_name+' '+groupA.match.match6_pot4_score+' - '+groupA.match.match6_pot3_score+' '+groupA.match.match6_pot3_name+'</th>';
list += '</tr>';
list += '</tbody>';
list += '</table>';
countryElements.innerHTML = list ;*/

let list = '';
list += '<table class="table">';
list += '<tbody>';
list += '<tr>';
list += '<th>GroupA</th>';
list += '</tr>';

for (let i = 1; i <= 6; i++) {
    let j=0,k=0;
    if(i==1){j=1,k=3;}
    if(i==2){j=2,k=4;}
    if(i==3){j=1,k=4;}
    if(i==4){j=2,k=3;}
    if(i==5){j=1,k=2;}
    if(i==6){j=4,k=3;}
    const match = groupA.match[`match${i}_pot${j}_name`];
    const score1 = groupA.match[`match${i}_pot${j}_score`];
    const score2 = groupA.match[`match${i}_pot${k}_score`];
    const opponent = groupA.match[`match${i}_pot${k}_name`];

    /*const hyphenPosition = Math.floor((16 - match.length - opponent.length) / 2);
    const hyphen = '-'.repeat(hyphenPosition);*/

    //const row = `<tr><th>${hyphen} ${match} ${score1} - ${score2} ${opponent} ${hyphen}</th></tr>`;
    const row = `<tr><th>${match} ${score1} - ${score2} ${opponent}</th></tr>`;
    list += row;
}
list += '</tbody>';
list += '</table>';
countryElements.innerHTML = list 