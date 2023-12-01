import { ref } from "vue";
import { defineStore } from "pinia";
import ApiService from "@/core/services/ApiService";

export const useFundBalanceStore = defineStore("fund-balance", () => {
  const fundListBalance = ref([]);
  const errors = ref({});

  function setError(error: any) {
    errors.value = { ...error };
  }

  function setFundListBalance(data) {
    fundListBalance.value = data;
  }

  function getFundListBalance(params) {
    return ApiService.query("/customers/balanceList", params)
      .then(({ data }) => {
        setFundListBalance(data);
      })
      .catch(({ response }) => {
        setError(response.data.errors);
      });
  }

  return {
    fundListBalance,
    errors,
    getFundListBalance,
  };
});
