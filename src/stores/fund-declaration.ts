import { ref } from "vue";
import { defineStore } from "pinia";
import ApiService from "@/core/services/ApiService";

export const useFundDeclarationStore = defineStore("fund-declaration", () => {
  const fundNhsvList = ref([]);
  const errors = ref({});

  function setError(error: any) {
    errors.value = { ...error };
  }

  function setFundNhsvList(data) {
    fundNhsvList.value = data;
  }

  function getFundNhsvList(params?: any) {
    return ApiService.query("/funds/getFundsNhsv", params)
      .then(({ data }) => {
        setFundNhsvList(data);
      })
      .catch(({ response }) => {
        setError(response.data.errors);
      });
  }

  function createFund(val) {
    return ApiService.post("/funds/createFund", val);
  }

  return {
    fundNhsvList,
    errors,
    getFundNhsvList,
    createFund,
  };
});
