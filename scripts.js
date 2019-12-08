// const questions =
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function pronounceTheQuestion(question) {
  var msg = new SpeechSynthesisUtterance();
  msg.volume = 1; // 0 to 1
  msg.rate = 1; // 0.1 to 10
  msg.pitch = 1; //0 to 2
  msg.text = question;
  msg.lang = 'fi-FI';
  speechSynthesis.speak(msg);
}

var app = new Vue({
  el: '#app',
  data: {
    questions: [
      ["Moi! / Hei!", "", "", ["chapter 1"]],
      ["Mikä sun nimi on? Kuka sinä olet?",  "Mun nimi on / Minä olen", "", ["chapter 1"]],
      ["Miten sun nimi kirjoitetaan?", "Se kirjoitetaan A.L.A.I.A.K.S.E.I.", "", ["chapter 1"]],
      ["Miten sun sukunimi kirjoitetaan?", "Se kirjoitetaan K.U.C.H.Y.N.", "", ["chapter 1"]],
      ["Missä sä asut?", "Mä asun Amurilla", "", ["chapter 1"]],
      ["Mistä kieltä sä puhut?", "Mä puhun englantia, venäjää, valkovenäjää ja vahan suomea ", "", ["chapter 1"]],
      ["Mistä maasta sä tulet?", "Mä tulen valkovenäjältä", "", ["chapter 1"]],
      ["Mikä on sun puhelinnumero?", "", "", ["chapter 1"]],
      ["Mitkä asiat ovat tosi suomalaisia?", "Esimerkiksi revontulet, salmiaki, lakku", "", ["chapter 1"]],
      ["Miksi sä opiskelet suomea?", "Koska täällä töissä", "", ["chapter 1"]],

      ["Terve!", "", "", ["chapter 2"]],
      ["Mitä kuuluu?", "hyvää/ihan hyvää", "", ["chapter 2"]],
      ["Miten sun etu nimi kirjoitetaan?", "Se kirjoitetaan A.L.A.I.A.K.S.E.I.", "", ["chapter 2"]],
      ["Mitkä asiat ovat tosi suomalaisia?", "Esimerkiksi ...", "", ["chapter 2"]],
      ["Mikä päivä tänään on?", "Tänään on keskivikko", "", ["chapter 2"]],
      ["Asutko sä Tampereella?", "Joo, asun.", "", ["chapter 2"]],
      ["Mitä kieliä sä puhut?", "Mä puhun englantia, valkovenäjää, venäjää ja vahan suomea", "", ["chapter 2"]],
      ["Minkämaalainen sinä olet?", "Mä olen valkovenäläinen", "", ["chapter 2"]],
      ["Missä paikoissa olet käynyt täällä Suomessa?", "Olen käynyt Helsingissa Turussa", "", ["chapter 2"]],
      ["Miksi olet Suomessa?", "Olen Suomessa, koska täällä töissä", "", ["chapter 2"]],

      ["Mikä päivä tänään on?", "Tänään on keskivikko", "", ["chapter 3"]],
      ["Mikä kuukausi nyt on?", "Nyt on joulukky", "", ["chapter 3"]],
      ["Missä kuussa on sun syntymäpäivä?", "Mun syntymäpäivä on joulussa", "", ["chapter 3"]],
      ["Miksi opiskelet suomea tällä kurssilla?", "Koska olen täällä töissä", "", ["chapter 3"]],
      ["Kuka hän on? Mistä maasta hän on?", "hän on ...", "", ["chapter 3"]],
      ["Mitä sä teet tänään kurssin jälkeen?", "Pyörallia kotiin. Teen ruokaa", "", ["chapter 3"]],
      ["Miten kauan olet ollut Suomessa?", "Mä olen ollut Suomessa täällä kolme kuukautta", "", ["chapter 3"]],
      ["Missä olet käynyt täällä Suomessa?", "Olen käynyt Helsingissa, Turussa", "", ["chapter 3"]],
      ["Mikä on sun kotikaupunki?", "Mun kotikaupunki oli Homel, mutta nyt se on Tampere", "", ["chapter 3"]],
      ["Miten sä tulit kurssille tänään?", "Tulin tänään kurssille pyörällä", "", ["chapter 3"]],

      ["Miten sulla on mennyt", "Ihan hyvin", "", ["chapter 4"]],
      ["Minkävärinen auto sinulla on?", "Minulla ei ole autoa, mun pyörä on tumman sininen", "", ["chapter 4"]],
      ["Mitä sinä teet yleensä viikonloppuna?", "Menen ulos ja pyöräilen ja teen ruokka", "", ["chapter 4"]],
      ["Missä puhut yleensä suomea?", "Työkaverian ja kaverian kansaa", "", ["chapter 4"]],
      ["Mihin sä haluaisit matkustaa?", "Haluaisin matkustaa Islantin", "", ["chapter 4"]],
      ["Leivetko usein? Saunotko usein? Nukutko usein?", "En leivo usein. en tykkää leipoa. Sannonme tosi usein", "", ["chapter 4"]],
      ["Kuinka kauan olet opiskellut suomea?", "Olen opiskellut suomea noin kolme kuukautta", "", ["chapter 4"]],
      ["Mitä tykkäät tehdä viikonloppuna?", "Tykkään käyn Talinnissa tai Tukolmissa", "", ["chapter 4"]],
      ["Millainen sää on tänään? Millainen ilma on tänään?", "On kylmä. Sataa lunta", "", ["chapter 4"]],
      ["Mitä teit eilen?", "Opiskelin suomea ja menin tuli pyöritys treenit", "", ["chapter 4"]],

      ["Miten sulla menee? Miten teillä menee?", "Hyvin on mennyt.", "", ["chapter 5"]],
      ["Mitä sä teit viikonloppuna", "Tein ruokaa ja menin ulos", "", ["chapter 5"]],
      ["Vietätko sö joulua? Miten? Mitä te teette yleensä?", "En vietä joulua. Meillä on muita juhlia.", "", ["chapter 5"]],
      ["Millainen perhe sulla on?", "Mun perhe on pieni: vain minä ja aiti ja isä ja pikkusisko ja vieli", "", ["chapter 5"]],
      ["Mitä sä tykkäät tehdä?", "Tykkään tuli pyörityssa ja pyöralissa", "", ["chapter 5"]],
      ["Millainen sää on Suomessa marraskuussa? Entä helmikuussa?", "Marraskussa on viileä, sataa räntää ja lunta, joskus maassa on lunta. Helmikuussa on kylmä ja pakkasta. Sataa lunta ja maassa on lunta", "", ["chapter 5"]],
      ["Onko teillä töissä pikkujoulut? Onko kaverian kanssa pikkujoulut? Missä? Mitä teette?", "Joo, meillä on kaksi pikkujoulut - töissä pikkujoulut ja kaverian kanssa pikkujoulut", "", ["chapter 5"]],
      ["Mitä Suomessa tehdään jouluna?", "Joulu on kaunis aika Suomessa. On paljon perinteitä. Ihmiset ostavat lahjoja. Jouluruoka on hyvää: joulutortut, piparit, glögi, laatikot, kinkku. Suomalaiset käyvat hautausmaalla jouluaattona.", "", ["chapter 5"]],
      ["Millainen Suomi on talvella, syksillä, kesällä, keväällä?", "Syksyllä sataa paljon. On ruska. Talvella on kylmä ja pakkasta. Voi luskea mäkeä, hiihtää ja luistella. Maassa on lunta. Kesälla on lämmintä ja voi uida järvessä ja saunoa mökillä. Syksyllä voi mennä sienimetsään tai marjastaa. Päivä on vielä pitkä. Talvella on pimeää.", "", ["chapter 5"]],
      ["Mistä sä tykkäät?", "Tykkään kahvista, jatelosta, pyöralista ja tuli pyöritysta.", "", ["chapter 5"]],
    ],
    current: 0,
    isAnswerShown: false,
    selectedChapters: [1,2,3,4,5],
  },
  computed: {
    question: function () {
      return this.includedQuestion[this.current][0]
    },
    answer: function () {
      return this.includedQuestion[this.current][1]
    },
    includedQuestion: function () {
      let selectedQuestionsArray = [];

      this.selectedChapters.forEach(
        (selectedChapter) => {
          let startIndex = (selectedChapter - 1) * 10;
          for(let i = startIndex; i < startIndex + 10; i++) {
            selectedQuestionsArray.push(this.questions[i]);
          }
        }
      )

      return selectedQuestionsArray;
    }
  },
  methods: {
    nextQuestion: function () {
      this.current = this.current + 1 < this.includedQuestion.length ? this.current + 1 : 0
      pronounceTheQuestion(this.includedQuestion[this.current][0])
    },
    prevQuestion: function () {
      this.current = this.current - 1 > 0 ? this.current - 1 : this.includedQuestion.length - 1
      pronounceTheQuestion(this.includedQuestion[this.current][0])
    },
    randomQuestoin: function () {
      let randomQuestion = getRandomInt(this.includedQuestion.length);
      this.current =  randomQuestion == this.current ? randomQuestion : getRandomInt(this.includedQuestion.length);
      pronounceTheQuestion(this.includedQuestion[this.current][0])
    },
    toggleAnswers: function () {
      this.isAnswerShown = this.isAnswerShown ? false : true;
    },
    vocalizeAnswer: function () {
      pronounceTheQuestion(this.includedQuestion[this.current][1])
    },
    resetIndex: function () {
      this.current = 0;
    }
  }
})
