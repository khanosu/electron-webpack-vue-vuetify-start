<template>
<v-app>
    <div>
      <v-btn class="pink">{{name}}</v-btn>
      <v-btn flat class="blue">
        <v-icon>mail</v-icon>
      </v-btn>
    </div>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      name: "Press Me!"
    };
  }
};
</script>

<style scoped>

</style>