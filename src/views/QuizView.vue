<template>
  <div class="container" style="perspective: 900px">
    <h1 class="mt-3">Проходження тесту</h1>

    <p v-if="!isEndOfTest">
      Поточне запитання: <b>{{ currentIndex + 1 }}</b
      >; Всього запитань: <b>{{ tests.length }} </b>
    </p>

    <transition name="rotate" mode="out-in">
      <test-card
        v-if="currentQuestion"
        :key="currentIndex"
        :initial-selected="answers[currentIndex]"
        :headTitle="currentQuestion.description"
        :question="currentQuestion.question"
        :picture="currentQuestion.picture"
        :answers="currentQuestion.answers"
        @answer-submit="answerSubmit"
        @go-back="goBack"
      />
    </transition>

    <transition name="fade">
      <div class="card-group mt-4" v-if="isEndOfTest">
        <answer-card
          v-for="(test, index) in tests"
          :key="test.id"
          :selected="answers[index]"
          :correctAnswer="test.correct_answer"
          :headTitle="test.description"
          :question="test.question"
          :picture="test.picture"
          :answers="test.answers"
        />
      </div>
    </transition>
  </div>
</template>

<script>
import TestCard from "@/components/TestCard.vue";
import AnswerCard from "@/components/AnswerCard.vue";
export default {
  components: { TestCard, AnswerCard },

  data() {
    return {
      tests: [],
      currentIndex: 0,
      answers: [],
    };
  },
  methods: {
    answerSubmit(result) {
      this.answers[this.currentIndex] = result;
      this.currentIndex++;
    },
    goBack() {
      if (this.currentIndex > 0) {
        this.currentIndex--;
      }
    },
  },
  computed: {
    currentQuestion() {
      return this.tests[this.currentIndex];
    },
    isEndOfTest() {
      return this.currentIndex === this.tests.length;
    },
  },
  async created() {
    const response = await fetch("/tests.json");
    this.tests = await response.json();
  },
};
</script>

<style scoped>
.rotate-enter-active,
.rotate-leave-active {
  transition: transform 0.5s ease;
}
.rotate-enter-from {
  transform: rotateY(-90deg);
}
.rotate-leave-to {
  transform: rotateY(90deg);
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 2s 0.5s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>



