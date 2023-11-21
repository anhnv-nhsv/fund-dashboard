import { ref } from "vue";
import { defineStore } from "pinia";
import ApiService from "@/core/services/ApiService";

export const useFundStore = defineStore("fund-mgmt", () => {
  const fundList = ref([]);
  const fundListDetail = ref([]);
  const fundListOrderDetail = ref([]);
  const errors = ref({});

  function setError(error: any) {
    errors.value = { ...error };
  }

  function setFundList(data) {
    fundList.value = data;
  }

  function setFundListDetail(data) {
    fundListDetail.value = data;
  }

  function setFundListOrderDetail(data) {
    fundListOrderDetail.value = data;
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

  function getFundListDetails(keyword, params?: any) {
    return ApiService.query(`/customers/?idAcc=${keyword}`, params)
      .then(({ data }) => {
        setFundListDetail(data);
      })
      .catch(({ response }) => {
        setError(response.data.errors);
      });
  }

  function getFundListOrderDetails(keyword, params?: any) {
    return ApiService.query(`/order/?orderId=${keyword}`, params)
      .then(({ data }) => {
        setFundListOrderDetail(data);
      })
      .catch(({ response }) => {
        setError(response.data.errors);
      });
  }

  return {
    fundList,
    fundListDetail,
    fundListOrderDetail,
    errors,
    getFundList,
    getFundListDetails,
    getFundListOrderDetails,
  };
});
