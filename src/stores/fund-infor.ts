import { ref } from "vue";
import { defineStore } from "pinia";
import ApiService from "@/core/services/ApiService";

export const useFundInforStore = defineStore("fund-infor", () => {
  const fundInforList = ref([]);
  const errors = ref({});

  function setError(error: any) {
    errors.value = { ...error };
  }

  function setFundInforList(data) {
    fundInforList.value = data;
  }

  function getFundInforList(params) {
    return ApiService.query("/funds/getFunds", params)
      .then(({ data }) => {
        setFundInforList(data);
      })
      .catch(({ response }) => {
        setError(response.data.errors);
      });
  }

  return {
    fundInforList,
    errors,
    getFundInforList,
  };
});
