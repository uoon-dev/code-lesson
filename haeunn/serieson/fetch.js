function _fetch(url, options = {}) {
  const promise = new Promise((resolve, reject) => {
    // 1. HTTP 통신 요청을 할 수 있게 도와주는 객체를 만든다.
    const xhr = new XMLHttpRequest();

    // 2. URL 주소로 method 방식에 맞게 통신을 하겠다. (준비)
    xhr.open(options.method || "GET", url);

    // 3. 요청을 수행하고, 응답을 받으면 어떻게 할 것인지를 정의한다.
    xhr.onload = () => {
      // 서버에 요청을 보내고 성공했을 때 받는 응답 코드
      if (xhr.status >= 200 && xhr.status < 300) {
        console.log("xhr", xhr);

        resolve({
          status: xhr.status,
          statusText: xhr.statusText,
          json: () => Promise.resolve(JSON.parse(xhr.responseText)),
        });
      } else {
        reject({
          status: xhr.status,
          statusText: xhr.statusText + "실패!!",
        });
      }
    };

    // 네트워크 에러 처리
    xhr.onerror = function () {
      reject({
        status: xhr.status,
        statusText: xhr.statusText,
      });
    };

    // 4. 요청을 보낸다.
    xhr.send(options.body || null);
  });

  return promise;
}

const url =
  "http://kobis.or.kr/kobisopenapi/webservice/rest/people/searchPeopleList.json?key=f5eef3421c602c6cb7ea224104795888&test=1";

_fetch(url)
  .then((res) => {
    //   console.log(res.status + ' : ' + res.statusText);

    return res.json();
  })
  .then((data) => {
    const peopleList = data.peopleListResult.peopleList;
    const ul = document.querySelector(".list");

    ul.innerHTML = peopleList
      .map(
        (people) => `<div>
        이름: ${people.peopleNm} ,
        역할: ${people.repRoleNm} ,
        영화: ${people.filmoNames}
        </div>`
      )
      .join("");

    console.log(data);
  });

  
