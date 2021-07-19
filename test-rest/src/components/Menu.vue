<template>
  <section class="breakfast">
    <ul>
      <li class="item" v-for="item in menu" :key="item.ID" @click="selectDish">
        <p>{{ item.product }}</p>
        <p>S./ {{ item.price }}</p>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  props: ["menu"],

  methods: {
    selectDish(e) {
      if (e.target.className == "item") {
        let html = e.target.innerHTML;
        this.$store.commit("SET_SELECTED_ITEMS", html);
      }
    },
  },
};
</script>
