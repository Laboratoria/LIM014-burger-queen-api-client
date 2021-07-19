<template>
  <main>
    <section class="menu">
      <div class="buttons">
        <button @click="showFoodMenu">Desayunos</button>
        <button @click="showFoodMenu">Almuerzo y cena</button>
      </div>

      <section class="content">
        <menu-component v-if="breakfast" :menu="breakfastInfo" />
        <menu-component v-else :menu="generalInfo" />
        <total />
      </section>
    </section>
  </main>
</template>

<script>
import menuComponent from "./components/Menu.vue";
import total from "./components/total.vue";
import axios from "axios";

require("@/sass/styles.css");

export default {
  name: "App",
  components: { menuComponent, total },

  data() {
    return {
      breakfast: true,
    };
  },
  computed: {
    breakfastInfo() {
      return this.$store.getters.breakfast;
    },
    generalInfo() {
      return this.$store.getters.generalMenu;
    },
  },

  mounted() {
    this.fetchMenuData();
  },
  methods: {
    showFoodMenu() {
      this.breakfast = !this.breakfast;
    },
    fetchMenuData() {
      axios
        .get("http://localhost:3000/breakfast")
        .then((response) => {
          let results = response.data;
          this.$store.commit("SET_BREAKFAST_ITEMS", results);
        })
        .catch((error) => console.log(error));

      axios
        .get("http://localhost:3000/general")
        .then((response) => {
          let results = response.data;
          this.$store.commit("SET_GENERAL_ITEMS", results);
        })
        .catch((error) => console.log(error));
    },
  },
};
</script>
