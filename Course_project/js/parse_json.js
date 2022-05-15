var requestURL = 'https://raw.githubusercontent.com/McDinii/HTML-CSS-XML/main/Course_project/js/files.json';
//Начнём с того, что мы собираемся сохранить URL-адрес JSON, который мы хотим получить в переменной.

var request = new XMLHttpRequest(); //Чтобы создать запрос, нам нужно создать новый экземпляр объекта запроса из конструктора XMLHttpRequest, используя ключевое слово new.

request.open( 'GET', requestURL );//Теперь нам нужно открыть новый запрос, используя метод open().

request.responseType = 'json'; //здесь мы устанавливаем responseType в JSON, так что XHR знает, что сервер будет возвращать JSON и, что это должно быть преобразовано за кулисами в объект JavaScript. Затем мы отправляем запрос методом send()
request.send();

request.onload = function () { // жидание ответа на возврат с сервера, а затем работы с ним
    var Json = request.response;
    leader( Json );

}
    var leaders = jsonObj.leaders;
    for (let i = 0; i < leaders.length; i++) {
        var parent_leader = document.getElementsByClassName( 'info' )[i]
        let leader_h1 = parent_leader.querySelector('h1');
        leader_h1.innerHTML = leaders[i].name;
        console.log( leaders[i].name);
        let leader_p = parent_leader.querySelector( 'p' );
        leader_p.innerHTML = leaders[i].price;
        console.log( leaders[i].price);
        let leader_img = parent_leader.querySelector( 'img' );
        leader_img.src = leaders[i].img;
    }


/*
function showHeroes(jsonObj) {
    var heroes = jsonObj['members'];

    for (var i = 0; i < heroes.length; i++) {
        var myArticle = document.createElement('article');
        var myH2 = document.createElement('h2');
        var myPara1 = document.createElement('p');
        var myPara2 = document.createElement('p');
        var myPara3 = document.createElement('p');
        var myList = document.createElement('ul');

        myH2.textContent = heroes[i].name;
        myPara1.textContent = 'Secret identity: ' + heroes[i].secretIdentity;
        myPara2.textContent = 'Age: ' + heroes[i].age;
        myPara3.textContent = 'Superpowers:';

        var superPowers = heroes[i].powers;
        for (var j = 0; j < superPowers.length; j++) {
            var listItem = document.createElement('li');
            listItem.textContent = superPowers[j];
            myList.appendChild(listItem);
        }

        myArticle.appendChild(myH2);
        myArticle.appendChild(myPara1);
        myArticle.appendChild(myPara2);
        myArticle.appendChild(myPara3);
        myArticle.appendChild(myList);

        section.appendChild(myArticle);
    }
}
*/
