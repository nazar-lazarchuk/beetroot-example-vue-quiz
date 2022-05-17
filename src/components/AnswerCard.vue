<template>
  <div class="card">

    <div class="card-header">{{ headTitle }}</div>

    <img :src="picture" class="card-img-top" alt="" />
  
    <div class="card-body">
      <p class="card-text">{{ question }}</p>
    </div>

    <form class="list-group list-group-flush" @submit.prevent>

      <div
        class="list-group-item"
        v-for="item in answers"
        :key="item.id"
        :class="{
          'bg-success': item.id === correctAnswer,
          'bg-danger': selected === item.id && item.id !== correctAnswer,
        }"
      >
        <label>
          <input
            class="form-check-input"
            type="radio"
            name="radio"
            :value="item.id"
            :checked="selected === item.id"
            disabled
          />
          <span>{{ item.title }}</span>
        </label>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  props: [
    'selected',
    'correctAnswer',
    'headTitle',
    'question',
    'picture',
    'answers',
  ],
};
</script>

<style>
</style>