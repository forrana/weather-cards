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
      ["Tammikuu", "January. Tammikuussa on kylmä. On pakkasta. Sataa lunta ja maassa on lunta.", "", ["chapter 1"]],
      ["Helmikuu",  "February. Helmikuussa on kylmä. On pakkasta. Sataa lunta ja maassa on lunta.", "", ["chapter 1"]],
      ["Maaliskuu", "March. Maaliskuussa on kelmä, sataa joskus räntää", "", ["chapter 1"]],
      ["Huhtikuu",  "April. Huhtikuussa sata joskus räntää ja on viilea ja on sumuista.", "", ["chapter 1"]],
      ["Toukokuu", "May. Toukokuussa on jo aika lämmin", "", ["chapter 1"]],
      ["Kesäkuu",  "June. Kesäkuussa aurinko paistaa ja on lämmin.", "", ["chapter 1"]],
      ["Heinäkuu", "July. Heinäkuussa aurinko paistaa ja on lämmin.", "", ["chapter 1"]],
      ["Elokuu",  "August. Elokuussa aurinko paistaa ja on lämmin.", "", ["chapter 1"]],
      ["Syyskuu", "September. Syyskuussa on viilea ja on tuulista.", "", ["chapter 1"]],
      ["Lokakuu",  "October. ", "Lokakuussa on harmaa ja sataa paljon vettä tai rantää", ["chapter 1"]],
      ["Marraskuu", "November. ", "Marraskuussa on harmaa ja sataa paljon vettä tai rantää", ["chapter 1"]],
      ["Joulukuu",  "December. ", "Joulukuussa on viileä, sataa räntää ja lunta, joskus maassa on lunta", ["chapter 1"]],
    ],
    current: 0,
    isAnswerShown: false,
    selectedChapters: [1],
  },
  computed: {
    question: function () {
      return this.includedQuestion[this.current][0]
    },
    answer: function () {
      return this.includedQuestion[this.current][1]
    },
    includedQuestion: function () {
      return this.questions
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
    vocalizeQuestion: function () {
      pronounceTheQuestion(this.includedQuestion[this.current][0])
    }
  },
  mounted: function () {
      pronounceTheQuestion(this.includedQuestion[this.current][0])
  }
})
