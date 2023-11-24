import { ref } from "vue";
import { defineStore } from "pinia";
import ApiService from "@/core/services/ApiService";

export const useFundStore = defineStore("fund-mgmt", () => {
  const fundList = ref([]);
  const fundStatusList = ref();
  const fundSearchList = ref();
  const fundListDetail = ref([]);
  const fundListOrderDetail = ref([]);
  const errors = ref({});

  function setError(error: any) {
    errors.value = { ...error };
  }

  function setFundList(data) {
    fundList.value = data;
  }

  function setStatusFundList(data) {
    fundStatusList.value = data;
  }

  function setSearchFundList(data) {
    fundSearchList.value = data;
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

  function getStatusFundList(params?: any) {
    return ApiService.query("/customers/statusList", params)
      .then(({ data }) => {
        setStatusFundList(data);
      })
      .catch(({ response }) => {
        setError(response.data.errors);
      });
  }

  function getSearchFundList(params) {
    return ApiService.query("/order/searchOrders", params)
      .then(({ data }) => {
        setSearchFundList(data);
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
    fundStatusList,
    fundListDetail,
    fundListOrderDetail,
    errors,
    fundSearchList,
    getFundList,
    getStatusFundList,
    getFundListDetails,
    getFundListOrderDetails,
    getSearchFundList,
  };
});
