/**
 * 1. 로또를 구매하는 함수
 * 2. 랜덤한 숫자를 생성하는 함수
 * 3. 로또를 발행하는 함수
 * 4. 당첨넘버를 세팅하는 함수
 * 5. 발행한 로또와 당첨넘버를 비교하는 함수
 * 6. 당첨통계를 확인 or 출력하는 함수
 */
const buyLottos = money => {
  const lottoCount = Math.floor(money / 1000);
  const lottos = createLottos(lottoCount);
  console.log(lottos);
};

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
      AllLottoNumbers.splice(
        generateRandomIndex(0, AllLottoNumbers.length),
        1
      )[0]
    );
    debugger;
  }
  // [0] 은 [[]]이중배열에서 분리해 주기위해 필요
  return lotto;
};

const createLottos = lottoCount => {
  const lottos = [];
  for (let i = 0; i < lottoCount; i++) {
    lottos.push(createLotto());
  }

  return lottos;
};

//setLuckyNumbers();
buyLottos(5000);

const setLuckyNumbers = () => {
  return createLotto();
};

const compareNumbers = () => {};

const displayWinStatistics = () => {};
