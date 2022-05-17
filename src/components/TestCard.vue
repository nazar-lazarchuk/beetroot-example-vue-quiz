<template>
  <div class="card">

    <div class="card-header">{{ headTitle }}</div>

    <img :src="picture" class="card-img-top" alt="" />
  
    <div class="card-body">
      <p class="card-text">{{ question }}</p>
    </div>

    <form class="list-group list-group-flush" @submit.prevent="onSubmit">

      <div class="list-group-item" v-for="item in answers" :key="item.id">
        <label>
          <input
            class="form-check-input"
            type="radio"
            name="radio"
            :value="item.id"
            :checked="selected === item.id"
            @change="onSelect(item.id)"
          />
          <span>{{ item.title }}</span>
        </label>
      </div>

      <div class="card-body d-flex justify-content-between">
        <button type="button" class="btn btn-secondary" @click="$emit('go-back')">
          Go Back
        </button>
        <button type="submit" class="btn btn-primary">Go Forward</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  props: [
    'initialSelected',
    'headTitle',
    'question',
    'picture',
    'answers',
  ],
  data() {
    return {
      selected: null,
    };
  },
  created() {
    this.selected = this.initialSelected || null;
  },
  methods: {
    onSelect(id) {
      this.selected = id;
    },
    onSubmit() {
      if (this.selected === null) {
        return alert('Виберіть один з варіантів');
      }
      this.$emit('answer-submit', this.selected);
    }
  }
};
</script>

<style>
</style>