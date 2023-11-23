<template>
  <div class="card">
    <div class="p-8" v-for="(item, index) in detailResponse" :key="index">
      <div class="text-center fs-3 fw-bolder">
        {{ item?.fnd_full_cd }}-Quỹ Đầu tư Trái phiếu phát triển Việt Nam
        {{ item?.fnd_cd }}
      </div>
      <div class="container-fund-detail">
        <div class="px-12">
          <div class="px-2 row">
            <div class="col-6 line py-4">
              <div class="d-flex mt-4 align-items-center">
                <div class="fs-5 fw-bolder" style="min-width: 200px">
                  Fund code
                </div>
                <span class="fs-5 text-muted">{{ item?.fnd_full_cd }}</span>
              </div>
              <div class="d-flex mt-4 align-items-center">
                <div class="fs-5 fw-bolder" style="min-width: 200px">
                  Fund name
                </div>
                <span class="fs-5 text-muted">{{ item?.fnd_nm }}</span>
              </div>
              <div class="d-flex mt-4 align-items-center">
                <div class="fs-5 fw-bolder" style="min-width: 200px">
                  Company name
                </div>
                <span class="fs-5 text-muted">{{ item?.fnd_co_nm }}</span>
              </div>
              <div class="d-flex mt-4 align-items-center">
                <div class="fs-5 fw-bolder" style="min-width: 200px">
                  Strategy
                </div>
                <span class="fs-5 text-muted">{{ item?.strategy }}</span>
              </div>
              <div class="d-flex mt-4 align-items-center">
                <div class="fs-5 fw-bolder" style="min-width: 200px">
                  Trading date
                </div>
                <span class="fs-5 text-muted">{{ item?.trd_dt }}</span>
              </div>
              <div class="d-flex mt-4 align-items-center">
                <div class="fs-5 fw-bolder" style="min-width: 200px">
                  Closing time
                </div>
                <span class="fs-5 text-muted">{{ item?.ord_cls_tm }}</span>
              </div>
              <div class="d-flex mt-4 align-items-center">
                <div class="fs-5 fw-bolder" style="min-width: 200px">
                  Subsciption fee
                </div>
                <span class="fs-5 text-muted"
                  >{{ (item?.subs_fee_rt * 100).toFixed(1) }}%</span
                >
              </div>
              <div class="d-flex mt-4 align-items-center">
                <div class="fs-5 fw-bolder" style="min-width: 200px">
                  Redemption fee
                </div>
                <div
                  class="fs-5 text-muted"
                  v-for="(redemp, index) in item?.redemption_fee"
                  :key="index"
                >
                  <div class="d-flex">
                    <div
                      v-if="
                        redemp?.holding_min === 0 || redemp?.holding_min === 12
                      "
                    >
                      Từ tháng {{ redemp?.holding_min }} -
                      {{ redemp?.holding_max }}:
                    </div>
                    <div v-if="redemp?.holding_min === 24">
                      Trên {{ redemp?.holding_min }} tháng:
                    </div>
                    <div>&nbsp;{{ redemp?.fee_percentage_text }},&nbsp;</div>
                  </div>
                </div>
              </div>
              <div class="d-flex mt-4 align-items-center">
                <div class="fs-5 fw-bolder" style="min-width: 200px">
                  Sell tax
                </div>
                <span class="fs-5 text-muted"
                  >{{ (item?.sell_tax_rt * 100).toFixed(1) }}%</span
                >
              </div>
              <div class="d-flex mt-4 align-items-center">
                <div class="fs-5 fw-bolder" style="min-width: 200px">
                  Bank name
                </div>
                <span class="fs-5 text-muted">{{ item.bank_nm }}</span>
              </div>
              <div class="d-flex mt-4 align-items-center">
                <div class="fs-5 fw-bolder" style="min-width: 200px">
                  Bank acccount name
                </div>
                <span class="fs-5 text-muted">{{ item.bank_acnt_nm }}</span>
              </div>
              <div class="d-flex mt-4 align-items-center">
                <div class="fs-5 fw-bolder" style="min-width: 200px">
                  Bank acccount number
                </div>
                <span class="fs-5 text-muted">{{ item.bank_acnt_no }}</span>
              </div>
            </div>
            <div class="col-6 py-4">
              <div class="d-flex mt-4 align-items-center">
                <div class="fs-5 fw-bolder" style="min-width: 200px">
                  Buy minmum amount
                </div>
                <span class="fs-5 text-muted"
                  >{{ item?.buy_min_amt.toLocaleString() }} VND</span
                >
              </div>
              <div class="d-flex mt-4 align-items-center">
                <div class="fs-5 fw-bolder" style="min-width: 200px">NAV</div>
                <span class="fs-5 text-muted"
                  >{{ item?.nav.toLocaleString() }} VND</span
                >
              </div>
              <div class="d-flex mt-4 align-items-center">
                <div class="fs-5 fw-bolder" style="min-width: 200px">
                  Updated NAV date
                </div>
                <span class="fs-5 text-muted">{{ item?.nav_upd_dt }}</span>
              </div>
              <div class="d-flex mt-4 align-items-center">
                <div class="fs-5 fw-bolder" style="min-width: 200px">
                  Growth in month
                </div>
                <span class="fs-5 text-danger">{{
                  item?.growth_in_mth === null ? "-" : item?.growth_in_mth
                }}</span>
              </div>
              <div class="d-flex mt-4 align-items-center">
                <div class="fs-5 fw-bolder" style="min-width: 200px">
                  Growth in 6M
                </div>
                <span class="fs-5 text-success">{{
                  item?.growth_in_last_6m === null
                    ? "-"
                    : item?.growth_in_last_6m
                }}</span>
              </div>
              <div class="d-flex mt-4 align-items-center">
                <div class="fs-5 fw-bolder" style="min-width: 200px">
                  Growth in 1Y
                </div>
                <span class="fs-5 text-success">{{
                  item?.growth_in_last_1y === null
                    ? "-"
                    : item?.growth_in_last_1y
                }}</span>
              </div>
              <div class="d-flex mt-4 align-items-center">
                <div class="fs-5 fw-bolder" style="min-width: 200px">
                  Growth in 3Y
                </div>
                <span class="fs-5 text-success">{{
                  item?.growth_in_last_3y === null
                    ? "-"
                    : item?.growth_in_last_3y
                }}</span>
              </div>
              <div class="d-flex mt-4 align-items-center">
                <div class="fs-5 fw-bolder" style="min-width: 200px">
                  Growth in 5Y
                </div>
                <span class="fs-5 text-success">{{
                  item?.growth_in_last_5y === null
                    ? "-"
                    : item?.growth_in_last_5y
                }}</span>
              </div>
              <div class="d-flex mt-4 align-items-center">
                <div class="fs-5 fw-bolder" style="min-width: 200px">
                  Growth YTD
                </div>
                <span class="fs-5 text-success">{{
                  item?.growth_ytd === null ? "-" : item?.growth_ytd
                }}</span>
              </div>
              <div class="d-flex mt-4 align-items-center">
                <div class="fs-5 fw-bolder" style="min-width: 200px">
                  Growth inception
                </div>
                <span class="fs-5 text-success">{{
                  item?.growth_icpt === null ? "-" : item?.growth_icpt
                }}</span>
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
      console.log("detailResponse.value: ", detailResponse.value);

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

    onBeforeMount(() => {
      getFundInforDetail();
    });

    return {
      detailResponse,
      detailOrderResponse,
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

.line {
  border-right: 1px solid #d4d3d3;
  position: relative;
  right: 18px;
}
.transaction-right {
  /* flex: 1; */
}
</style>
