import { ref } from "vue";
import { defineStore } from "pinia";
import ApiService from "@/core/services/ApiService";

export const useFundInforStore = defineStore("fund-infor", () => {
  const fundInforList = ref([]);
  const fundInforDetail = ref([]);
  const errors = ref({});

  function setError(error: any) {
    errors.value = { ...error };
  }

  function setFundInforList(data) {
    fundInforList.value = data;
  }

  function setFundInforDetailList(data) {
    fundInforDetail.value = data;
  }

  function getFundInforList(params?: any) {
    return ApiService.query("/funds/getFunds", params)
      .then(({ data }) => {
        setFundInforList(data);
      })
      .catch(({ response }) => {
        setError(response.data.errors);
      });
  }

  function getFundInforDetails(keyword, params?: any) {
    return ApiService.query(`/funds/?fnd_co_cd=${keyword}`, params)
      .then(({ data }) => {
        setFundInforDetailList(data);
      })
      .catch(({ response }) => {
        setError(response.data.errors);
      });
  }

  return {
    fundInforList,
    fundInforDetail,
    errors,
    getFundInforList,
    getFundInforDetails,
  };
});
