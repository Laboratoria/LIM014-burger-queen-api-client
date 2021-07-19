<template>
  <section class="total">
    <h3>TOTAL {{ sum }}</h3>
    <ul>
      <li v-for="item in data" :key="item.ID">
        <p v-html="item"></p>
        <span class="remove">X</span>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  computed: {
    data() {
      return this.$store.getters.selectedItems;
    },
  },
  data() {
    return {
      sum: 0,
    };
  },

  methods: {},
  watch: {},
};
</script>
