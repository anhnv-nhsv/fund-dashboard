<template>
  <button class="btn btn-lg back-btn" @click="handleBack">
    <span><i class="fa fa-arrow-left fa-3x"></i></span>
  </button>
  <div class="card">
    <div class="p-8" v-for="(item, index) in detailResponse" :key="index">
      <div class="text-center fs-3 fw-bolder">
        {{ item?.fnd_full_cd }} - Quỹ Đầu tư Trái phiếu phát triển Việt Nam
        {{ item?.fnd_cd }}
      </div>
      <div class="container-fund-detail">
        <div class="px-12">
          <div class="px-2 row">
            <div class="col-lg-6 col-md-12 col-sm-12 line py-4">
              <div class="d-flex mt-4 align-items-center">
                <div class="fs-5 text-muted" style="min-width: 40%">
                  Fund code
                </div>
                <span class="fs-5 text-dark ms-1" style="min-width: 60%">{{
                  item?.fnd_full_cd
                }}</span>
              </div>
              <div class="d-flex mt-4 align-items-center">
                <div class="fs-5 text-muted" style="min-width: 40%">
                  Fund name
                </div>
                <span class="fs-5 text-dark ms-1" style="min-width: 60%">{{
                  item?.fnd_nm
                }}</span>
              </div>
              <div class="d-flex mt-4 align-items-center">
                <div class="fs-5 text-muted" style="min-width: 40%">
                  Company name
                </div>
                <span class="fs-5 text-dark ms-1" style="min-width: 60%">{{
                  item?.fnd_co_nm
                }}</span>
              </div>
              <div class="d-flex mt-4 align-items-center">
                <div class="fs-5 text-muted" style="min-width: 40%">
                  Strategy
                </div>
                <span class="fs-5 text-dark ms-1" style="min-width: 60%">{{
                  item?.strategy
                }}</span>
              </div>
              <div class="d-flex mt-4 align-items-center">
                <div class="fs-5 text-muted" style="min-width: 40%">
                  Trading date
                </div>
                <span class="fs-5 text-dark ms-1" style="min-width: 60%">{{
                  item?.trd_dt
                }}</span>
              </div>
              <div class="d-flex mt-4 align-items-center">
                <div class="fs-5 text-muted" style="min-width: 40%">
                  Closing time
                </div>
                <span class="fs-5 text-dark ms-1" style="min-width: 60%">{{
                  item?.ord_cls_tm
                }}</span>
              </div>
              <div class="d-flex mt-4 align-items-center">
                <div class="fs-5 text-muted" style="min-width: 40%">
                  Subsciption fee
                </div>
                <span class="fs-5" style="min-width: 60%"
                  >{{ (item?.subs_fee_rt * 100).toFixed(1) }}%</span
                >
              </div>
              <div class="d-flex mt-4 align-items-center">
                <div class="fs-5 text-muted" style="min-width: 40%">
                  Redemption fee
                </div>
                <div style="min-width: 60%">
                  <div
                    class="fs-5"
                    v-for="(redemp, index) in item?.redemption_fee"
                    :key="index"
                  >
                    <div class="d-flex">
                      <div
                        class="text-nowrap"
                        v-if="
                          redemp?.holding_min === 0 ||
                          redemp?.holding_min === 12
                        "
                      >
                        Từ tháng {{ redemp?.holding_min }} -
                        {{ redemp?.holding_max }}:
                      </div>
                      <div
                        class="text-nowrap"
                        v-if="redemp?.holding_min === 24"
                      >
                        Trên {{ redemp?.holding_min }} tháng:
                      </div>
                      <div class="text-nowrap">
                        &nbsp;{{ redemp?.fee_percentage_text }},&nbsp;
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="d-flex mt-4 align-items-center">
                <div class="fs-5 text-muted" style="min-width: 40%">
                  Sell tax
                </div>
                <span class="fs-5"
                  >{{ (item?.sell_tax_rt * 100).toFixed(1) }}%</span
                >
              </div>
              <div class="d-flex mt-4 align-items-center">
                <div class="fs-5 text-muted" style="min-width: 40%">
                  Bank name
                </div>
                <span class="fs-5 text-dark ms-1" style="min-width: 60%">{{
                  item.bank_nm
                }}</span>
              </div>
              <div class="d-flex mt-4 align-items-center">
                <div class="fs-5 text-muted" style="min-width: 40%">
                  Bank acccount name
                </div>
                <span class="fs-5 text-dark ms-1" style="min-width: 60%">{{
                  item.bank_acnt_nm
                }}</span>
              </div>
              <div class="d-flex mt-4 align-items-center">
                <div class="fs-5 text-muted" style="min-width: 40%">
                  Bank acccount number
                </div>
                <span class="fs-5 text-dark ms-1" style="min-width: 60%">{{
                  item.bank_acnt_no
                }}</span>
              </div>
            </div>
            <div class="col-lg-6 col-md-12 col-sm-12 py-4">
              <div class="d-flex mt-4 align-items-center">
                <div class="fs-5 text-muted" style="min-width: 40%">
                  Buy minmum amount
                </div>
                <span class="fs-5" style="min-width: 60%"
                  >{{ item?.buy_min_amt.toLocaleString() }} VND</span
                >
              </div>
              <div class="d-flex mt-4 align-items-center">
                <div class="fs-5 text-muted" style="min-width: 40%">NAV</div>
                <span class="fs-5 text-dark"
                  >{{ item?.nav.toLocaleString() }} VND</span
                >
              </div>
              <div class="d-flex mt-4 align-items-center">
                <div class="fs-5 text-muted" style="min-width: 40%">
                  Updated NAV date
                </div>
                <span class="fs-5 text-dark ms-1" style="min-width: 60%">{{
                  item?.nav_upd_dt
                }}</span>
              </div>
              <div class="d-flex mt-4 align-items-center">
                <div class="fs-5 text-muted" style="min-width: 40%">
                  Growth in month
                </div>
                <span
                  v-if="item?.growth_in_mth > 0"
                  class="fs-5 text-success"
                  style="min-width: 60%"
                  >{{ (item?.growth_in_mth * 100).toFixed(2) }}%</span
                >
                <span
                  v-if="item?.growth_in_mth < 0"
                  class="fs-5 text-danger"
                  style="min-width: 60%"
                  >{{ (item?.growth_in_mth * 100).toFixed(2) }}%</span
                >
                <span
                  v-if="item?.growth_in_mth == 0"
                  class="fs-5 text-dark"
                  style="min-width: 60%"
                  >{{ item?.growth_in_mth }}</span
                >
              </div>
              <div class="d-flex mt-4 align-items-center">
                <div class="fs-5 text-muted" style="min-width: 40%">
                  Growth in 6M
                </div>
                <span
                  v-if="item?.growth_in_last_6m > 0"
                  class="fs-5 text-success"
                  style="min-width: 60%"
                  >{{ (item?.growth_in_last_6m * 100).toFixed(2) }}%</span
                >
                <span
                  v-if="item?.growth_in_last_6m < 0"
                  class="fs-5 text-danger"
                  style="min-width: 60%"
                  >{{ (item?.growth_in_last_6m * 100).toFixed(2) }}%</span
                >
                <span
                  v-if="item?.growth_in_last_6m == 0"
                  class="fs-5 text-dark"
                  >{{ item?.growth_in_last_6m }}</span
                >
              </div>
              <div class="d-flex mt-4 align-items-center">
                <div class="fs-5 text-muted" style="min-width: 40%">
                  Growth in 1Y
                </div>
                <span
                  v-if="item?.growth_in_last_1y > 0"
                  class="fs-5 text-success"
                  style="min-width: 60%"
                  >{{ (item?.growth_in_last_1y * 100).toFixed(2) }}%</span
                >
                <span
                  v-if="item?.growth_in_last_1y < 0"
                  class="fs-5 text-danger"
                  style="min-width: 60%"
                  >{{ (item?.growth_in_last_1y * 100).toFixed(2) }}%</span
                >
                <span
                  v-if="item?.growth_in_last_1y == 0"
                  class="fs-5 text-dark"
                  >{{ item?.growth_in_last_1y }}</span
                >
              </div>
              <div class="d-flex mt-4 align-items-center">
                <div class="fs-5 text-muted" style="min-width: 40%">
                  Growth in 3Y
                </div>
                <span
                  v-if="item?.growth_in_last_3y > 0"
                  class="fs-5 text-success"
                  style="min-width: 60%"
                  >{{ (item?.growth_in_last_3y * 100).toFixed(2) }}%</span
                >
                <span
                  v-if="item?.growth_in_last_3y < 0"
                  class="fs-5 text-danger"
                  style="min-width: 60%"
                  >{{ (item?.growth_in_last_3y * 100).toFixed(2) }}%</span
                >
                <span
                  v-if="item?.growth_in_last_3y == 0"
                  class="fs-5 text-dark"
                  >{{ item?.growth_in_last_3y }}</span
                >
              </div>
              <div class="d-flex mt-4 align-items-center">
                <div class="fs-5 text-muted" style="min-width: 40%">
                  Growth in 5Y
                </div>
                <span
                  v-if="item?.growth_in_last_5y > 0"
                  class="fs-5 text-success"
                  style="min-width: 60%"
                  >{{ (item?.growth_in_last_5y * 100).toFixed(2) }}%</span
                >
                <span
                  v-if="item?.growth_in_last_5y < 0"
                  class="fs-5 text-danger"
                  style="min-width: 60%"
                  >{{ (item?.growth_in_last_5y * 100).toFixed(2) }}%</span
                >
                <span
                  v-if="item?.growth_in_last_5y == 0"
                  class="fs-5 text-dark"
                  >{{ item?.growth_in_last_5y }}</span
                >
              </div>
              <div class="d-flex mt-4 align-items-center">
                <div class="fs-5 text-muted" style="min-width: 40%">
                  Growth YTD
                </div>
                <span
                  v-if="item?.growth_ytd > 0"
                  class="fs-5 text-success"
                  style="min-width: 60%"
                  >{{ (item?.growth_ytd * 100).toFixed(2) }}%</span
                >
                <span
                  v-if="item?.growth_ytd < 0"
                  class="fs-5 text-danger"
                  style="min-width: 60%"
                  >{{ (item?.growth_ytd * 100).toFixed(2) }}%</span
                >
                <span
                  v-if="item?.growth_ytd == 0"
                  class="fs-5 text-dark"
                  style="min-width: 60%"
                  >{{ item?.growth_ytd }}</span
                >
              </div>
              <div class="d-flex mt-4 align-items-center">
                <div class="fs-5 text-muted" style="min-width: 40%">
                  Growth inception
                </div>
                <span
                  v-if="item?.growth_icpt > 0"
                  class="fs-5 text-success"
                  style="min-width: 60%"
                  >{{ (item?.growth_icpt * 100).toFixed(2) }}%</span
                >
                <span
                  v-if="item?.growth_icpt < 0"
                  class="fs-5 text-danger"
                  style="min-width: 60%"
                  >{{ (item?.growth_icpt * 100).toFixed(2) }}%</span
                >
                <span
                  v-if="item?.growth_icpt == 0"
                  class="fs-5 text-dark"
                  style="min-width: 60%"
                  >{{ item?.growth_icpt }}</span
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onBeforeMount, ref } from "vue";
import { useFundInforStore } from "@/stores/fund-infor";
import { useRoute } from "vue-router";

export default defineComponent({
  name: "fund-information-details",
  components: {},
  setup() {
    const loading = ref<boolean>(false);
    const detailResponse = ref();
    const detailOrderResponse = ref();
    const store = useFundInforStore();
    const route = useRoute();

    const getFundInforDetail = async () => {
      loading.value = true;
      await store.getFundInforDetails(route.query.fundCode);

      const requestFundResponse = JSON.parse(
        JSON.stringify(store.fundInforDetail)
      );

      detailResponse.value = formatDataGetFund(requestFundResponse?.data);

      loading.value = false;
    };

    const formatDataGetFund = (items) => {
      if (items.length > 0) {
        return items.map((item) => {
          return {
            ...item,
            redemption_fee: formatRedemption(item.redemption_fee),
          };
        });
      }
    };

    const formatRedemption = (item) => {
      const formattedJsonString = JSON.parse(item);

      return formattedJsonString;
    };

    const handleBack = () => {
      window.history.back();
    };

    onBeforeMount(() => {
      getFundInforDetail();
    });

    return {
      detailResponse,
      detailOrderResponse,
      handleBack,
    };
  },
});
</script>

<style scoped>
.container-fund-detail {
  border: 1px solid #d4d3d3;
  margin-top: 12px;
  border-radius: 4px;
}

.back-btn {
  border-radius: 6px;
  margin-bottom: 12px;
  background-color: rgb(145 123 123 / 20%);
  color: white;
  border: none;
  padding: 30px 30px;
  z-index: 9999;
  -webkit-transition: background-color 1s, color 1s, -webkit-transform 0.5s;
  transition: background-color 1s, transform 0.5s;
}

.back-btn:hover {
  background-color: rgb(241 231 231 / 80%);
  color: black;
  -webkit-transform: translateX(-5px);
  -webkit-box-shadow: 5px 0px 18px 0px rgba(105, 105, 105, 0.8);
  -moz-box-shadow: 5px 0px 18px 0px rgba(105, 105, 105, 0.8);
  box-shadow: 5px 0px 18px 0px rgba(105, 105, 105, 0.8);
}

@media (min-width: 375px) {
  .line {
    border-right: 0 solid #d4d3d3;
  }
}

@media (min-width: 768px) {
  .line {
    border-right: 0 solid #d4d3d3;
  }
}

@media (min-width: 992px) {
  .line {
    border-right: 1px solid #d4d3d3;
    position: relative;
    right: 18px;
  }
}
.transaction-right {
  /* flex: 1; */
}
</style>
