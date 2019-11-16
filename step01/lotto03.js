// 1. 로또를 구매하는 함수
// 2. 랜덤한 숫자를 생성하는 함수
// 3. 로또를 발행하는 함수
// 4. 당첨넘버를 세팅하는 함수
// 5. 발행한 로또와 당첨넘버를 비교하는 함수 발행 비교
// 6. 당첨통계를 확인 or 출력하는 함수

const getRandomNumbers = max => {
  return Math.floor(Math.random() * max);
};

const createLotto = () => {
  const lotto = [];
  const allLottoNumber = [];
  for (let i = 0; i < 46; i++) {
    allLottoNumber.push(i);
  } //로또번호 45개를 배열에 push 해주는 반복문

  for (let i = 0; i < 6; i++) {
    lotto.push(
      allLottoNumber.splice(getRandomNumbers(0, allLottoNumber.length), 1)[0]
    );
  }
  return lotto; //
};

const createLottos = lottoCount => {
  const lottos = [];
  for (let i = 0; i < lottoCount; i++) {
    lottos.push(createLottos);
  }
};

const buyLottos = money => {
  const lottoCount = Math.floor(money / 1000); // 넣은 돈 만큼 실행
  const lottos = createLottos(lottoCount);
  console.log(lottos);
};

buyLottos(1000);
