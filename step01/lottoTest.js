// 1. 로또를 구매하는 함수
// 2. 랜덤한 숫자를 생성하는 함수
// 3. 로또를 발행하는 함수
// 4. 당첨넘버를 세팅하는 함수
// 5. 발행한 로또와 당첨넘버를 비교하는 함수 발행 비교
// 6. 당첨통계를 확인 or 출력하는 함수
let lottos = [];
let luckyNumbers = [];
let win3 = 0;
win4 = 0;
win5 = 0;
win6 = 0;

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
  lottos = createLotto(lottoCount);
  console.log(lottos);
};

buyLottos(3000);

const setLuckyNumbers = () => {
  luckyNumbers = createLotto();
};

const compareLottos = () => {
  lottos.forEach(lotto => {
    let winCount = lotto.filter(number => luckyNumbers.includes(number).length);

    switch (winCount) {
      case 3: {
        win3++;
        break;
      }
      case 4: {
        win4++;
        break;
      }
      case 5: {
        win5++;
        break;
      }
      case 6: {
        win6++;
        break;
      }
    }
  });
};

const displayWinStatic = () => {
  console.log(`> 당첨 통계
    ————
    3개 일치 (5000원)- ${win3}개
    4개 일치 (50000원)- ${win4}개
    5개 일치 (1500000원)- ${win5}개
    6개 일치 (2000000000원)- ${win6}개
    나의 수익금은 ${(
      win3 * winPrices.win3 +
      win4 * winPrices.win4 +
      win5 * winPrices.win5 +
      win6 * winPrices.win6
    ).toLocaleString()}원 입니다.`);
};
