/**
 * 1. 로또를 구매하는 함수
 * 2. 랜덤한 숫자를 생성하는 함수
 * 3. 로또를 발행하는 함수
 * 4. 당첨넘버를 세팅하는 함수
 * 5. 발행한 로또와 당첨넘버를 비교하는 함수
 * 6. 당첨통계를 확인 or 출력하는 함수
 */
let lottos = [];
let luckyNumbers = [];
let win3 = 0,
  win4 = 0,
  win5 = 0,
  win6 = 0;
const winPrices = {
  win3: 5000,
  win4: 50000,
  win5: 1500000,
  win6: 2000000000
};
let money = 5000000000;
let lottoMaxumber = 46;
let lottoLength = 6;
let lottoPrice = 1000;

const generateRandomIndex = max => {
  return Math.floor(Math.random() * max);
};

const createLotto = () => {
  const lotto = [];
  const AllLottoNumbers = [];
  for (let i = 1; i < lottoMaxNumber; i++) {
    AllLottoNumbers.push(i);
  }

  for (let i = 0; i < lottoLength; i++) {
    lotto.push(
      AllLottoNumbers.splice(generateRandomIndex(AllLottoNumbers.length), 1)[0]
    );
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

const buyLottos = money => {
  const lottoCount = Math.floor(money / lottoPrice);
  lottos = createLottos(lottoCount);
};

const setLuckyNumbers = () => {
  luckyNumbers = createLotto();
};

const compareLottos = () => {
  // for (let i = 0; i < lottos.length; i++) {
  //   let winCount = 0;
  //   for (let j = 0; j < lottos[i].length; j++) {
  //     if(luckyNumbers.indexOf(lottos[i][j]) > -1) {
  //       winCount++
  //     }
  //   }
  // }
  lottos.forEach(lotto => {
    let winCount = lotto.filter(number => luckyNumbers.includes(number)).length;
    // lotto.forEach(number => {
    //   if(luckyNumbers.indexOf(number) > -1) {
    //     winCount++
    //   }
    // })

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

const displayWinStatistics = () => {
  console.log(`
    > 당첨 통계
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

setLuckyNumbers();
buyLottos(money);
compareLottos();
displayWinStatistics();
