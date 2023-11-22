<template>
  <div>
    <div class="contianer-pdf">
      <button class="btn-pdf" @click="page = page > 1 ? page - 1 : page">
        Prev
      </button>
      <span>{{ page }} / {{ pages }}</span>
      <button class="btn-pdf" @click="page = page < pages ? page + 1 : page">
        Next
      </button>
    </div>
    <VuePDF :pdf="pdf" :page="page" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from "vue";
import { VuePDF, usePDF } from "@tato30/vue-pdf";
import "@tato30/vue-pdf";

export default defineComponent({
  name: "nh-pdf",
  props: {
    pdfFund: { type: String, required: true, default: () => "" },
  },
  components: {
    VuePDF,
  },
  setup(props, ctx) {
    const pdfItem = ref(props?.pdfFund);
    const page = ref(1);
    const { pdf, pages, info } = usePDF({
      url: pdfItem.value,
    });

    return {
      pdf,
      pages,
      page,
    };
  },
});
</script>

<style scoped lang="scss">
.contianer-pdf {
  margin-bottom: 8px;
}
.btn-pdf {
  background-color: #43a675;
  color: #fff;
  padding: 10px;
  margin: 7px;
  border-radius: 4px;
  border: none;
  cursor: pointer;
}
</style>
