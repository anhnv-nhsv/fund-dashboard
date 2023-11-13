<template>
  <div v-if="pdfItem">
    <vue-pdf-app theme="dark" style="height: 50vh" :pdf="pdfItem"></vue-pdf-app>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref, watch } from "vue";
import VuePdfApp from "vue3-pdf-app";
import "vue3-pdf-app/dist/icons/main.css";

export default defineComponent({
  name: "nh-pdf",
  props: {
    pdfFund: { type: String, required: true, default: () => "" },
  },
  components: {
    VuePdfApp,
  },
  setup(props, ctx) {
    const pdfItem = ref(props?.pdfFund);

    return {
      pdfItem,
    };
  },
});
</script>

<style scoped lang="scss"></style>
