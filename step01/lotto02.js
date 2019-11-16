// 1. 로또를 구매하는 함수
// 2. 랜덤한 숫자를 생성하는 함수
// 3. 로또를 발행하는 함수
// 4. 당첨넘버를 세팅하는 함수
// 5. 발행한 로또와 당첨넘버를 비교하는 함수 발행 비교
// 6. 당첨통계를 확인 or 출력하는 함수

const generateRandomIndex = max => {
  return Math.floor(Math.random() * max);
};

const createLotto = () => {
  const lotto = [];
  const AllLottoNumbers = [];
  for (let i = 1; i < 46; i++) {
    AllLottoNumbers.push(i);
  }
  for (let i = 0; i < 6; i++) {
    lotto.push(
      AllLottoNumbers.splice(generateRandomIndex(AllLottoNumbers.length), 1)[0]
    );
  }

  return lotto;
};

const createLottos = lottoCount => {
  const lottos = [];
  for (let i = 0; i < lottoCount; i++) {
    lottos.push(createLotto());
  }
  return lottos;
};

const buyLottos = money => {
  const lottoCount = Math.floor(money / 1000);
  const lottos = createLottos(lottoCount);
  console.log(lottos);
};
buyLottos(1000);

const setLuckyNumbers = arr => {
  return createLotto();
};
