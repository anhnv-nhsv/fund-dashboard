import { ref } from "vue";
import { defineStore } from "pinia";
import ApiService from "@/core/services/ApiService";

export const useFundStore = defineStore("fund-mgmt", () => {
  const fundList = ref([]);
  const errors = ref({});

  function setError(error: any) {
    errors.value = { ...error };
  }

  function setFundList(data) {
    fundList.value = data;
  }

  function getFundList(params) {
    return ApiService.query("/order/getOrders", params)
      .then(({ data }) => {
        setFundList(data);
      })
      .catch(({ response }) => {
        setError(response.data.errors);
      });
  }

  return {
    fundList,
    errors,
    getFundList,
  };
});
