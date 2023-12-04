<template>
  <button class="btn btn-lg back-btn" @click="handleBack">
    <span><i class="fa fa-arrow-left fa-3x"></i></span>
  </button>
  <div class="card">
    <div class="row">
      <div class="col-6">
        <div class="pb-8">
          <h2 class="my-8 mx-8">{{ translate("personalInformation") }}</h2>
          <div v-for="(item, index) in detailResponse" :key="index">
            <div class="px-12">
              <span class="line my-4"></span>
              <div class="row px-4">
                <div class="col-6 d-flex align-items-center">
                  <div class="fs-5 text-muted" style="min-width: 50%">
                    {{ translate("vsdTradingCode") }}
                  </div>
                  <span class="fs-5 text-dark">{{
                    item?.trading_code === "null" ? "N/A" : item?.trading_code
                  }}</span>
                </div>
                <div class="col-6 d-flex align-items-center">
                  <div class="fs-5 text-muted" style="min-width: 50%">
                    {{ translate("fullName") }}
                  </div>
                  <span class="fs-5 text-dark">{{ item?.cust_nm }}</span>
                </div>
              </div>
            </div>
            <div class="px-12">
              <span class="line my-4"></span>
              <div class="row px-4">
                <div class="col-6 d-flex align-items-center">
                  <div class="fs-5 text-muted" style="min-width: 50%">
                    {{ translate("accountType") }}
                  </div>
                  <span class="fs-5 text-dark">N/A</span>
                </div>
                <div class="col-6 d-flex align-items-center">
                  <div class="fs-5 text-muted" style="min-width: 50%">
                    {{ translate("investorType") }}
                  </div>
                  <span class="fs-5 text-dark">{{ item?.acnt_type }}</span>
                </div>
              </div>
            </div>
            <div class="px-12">
              <span class="line my-4"></span>
              <div class="row px-4">
                <div class="col-6 d-flex align-items-center">
                  <div class="fs-5 text-muted" style="min-width: 50%">
                    {{ translate("nationality") }}
                  </div>
                  <span class="fs-5 text-dark">{{
                    item?.nationality === "null" ? "N/A" : item?.nationality
                  }}</span>
                </div>
                <div class="col-6 d-flex align-items-center">
                  <div class="fs-5 text-muted" style="min-width: 50%">
                    {{ translate("gender") }}
                  </div>
                  <span class="fs-5 text-dark">{{ item?.sex_tp }}</span>
                </div>
              </div>
            </div>
            <div class="px-12">
              <span class="line my-4"></span>
              <div class="row px-4">
                <div class="col-6 d-flex align-items-center">
                  <div class="fs-5 text-muted" style="min-width: 50%">
                    {{ translate("DateofBirth") }}
                  </div>
                  <span class="fs-5 text-dark">{{ item?.dob }}</span>
                </div>
                <div class="col-6 d-flex align-items-center">
                  <div class="fs-5 text-muted" style="min-width: 50%">
                    {{ translate("ownershipRegistration") }}
                  </div>
                  <span class="fs-5 text-dark">{{ item?.idno }}</span>
                </div>
              </div>
            </div>
            <div class="px-12">
              <span class="line my-4"></span>
              <div class="row px-4">
                <div class="col-6 d-flex align-items-center">
                  <div class="fs-5 text-muted" style="min-width: 50%">
                    {{ translate("typeRegistration") }}
                  </div>
                  <span class="fs-5 text-dark">{{ item?.id_type_text }}</span>
                </div>
                <div class="col-6 d-flex align-items-center">
                  <div class="fs-5 text-muted" style="min-width: 50%">
                    {{ translate("dateRange") }}
                  </div>
                  <span class="fs-5 text-dark">{{ item?.idno_iss_dt }}</span>
                </div>
              </div>
            </div>
            <div class="px-12">
              <span class="line my-4"></span>
              <div class="row px-4">
                <div class="col-6 d-flex align-items-center">
                  <div class="fs-5 text-muted" style="min-width: 50%">
                    {{ translate("issuedBy") }}
                  </div>
                  <span class="fs-5 text-dark">{{ item?.idno_iss_pl }}</span>
                </div>
                <div class="col-6 d-flex align-items-center">
                  <div class="fs-5 text-muted" style="min-width: 50%">
                    {{ translate("phoneNumber") }}
                  </div>
                  <span class="fs-5 text-dark">{{ item?.tel }}</span>
                </div>
              </div>
            </div>
            <div class="px-12">
              <span class="line my-4"></span>
              <div class="row px-4">
                <div class="col-6 d-flex align-items-center">
                  <div class="fs-5 text-muted" style="min-width: 50%">
                    {{ translate("address") }}
                  </div>
                  <span class="fs-5 text-dark">{{ item?.addr }}</span>
                </div>
                <div class="col-6 d-flex align-items-center">
                  <div class="fs-5 text-muted" style="min-width: 50%">
                    {{ translate("email") }}
                  </div>
                  <span class="fs-5 text-dark">{{ item?.email }}</span>
                </div>
              </div>
            </div>
            <div class="px-12">
              <span class="line my-4"></span>
            </div>
          </div>
        </div>
        <div class="pb-8">
          <h2 class="my-8 mx-8">{{ translate("transactionDetails") }}</h2>
          <div v-for="(item, index) in detailOrderResponse" :key="index">
            <div class="px-12">
              <div class="container-transaction">
                <div class="">
                  <div class="px-4 mt-4">
                    <div class="d-flex align-items-center">
                      <div class="fs-5 text-muted" style="min-width: 50%">
                        {{ translate("vsdTradingCode") }}
                      </div>
                      <span class="fs-5 transaction-right">{{
                        item?.trading_code === "null"
                          ? "N/A"
                          : item?.trading_code
                      }}</span>
                    </div>
                  </div>
                  <span class="line my-4"></span>
                  <div class="px-4">
                    <div class="d-flex align-items-center">
                      <div class="fs-5 text-muted" style="min-width: 50%">
                        {{ translate("fundCode") }}
                      </div>
                      <span class="fs-5 transaction-right">{{
                        item?.fnd_full_cd
                      }}</span>
                    </div>
                  </div>
                  <span class="line my-4"></span>
                  <div class="px-4">
                    <div class="d-flex align-items-center">
                      <div class="fs-5 text-muted" style="min-width: 50%">
                        {{ translate("type") }}
                      </div>
                      <span class="fs-5 transaction-right">{{
                        item?.ord_tp
                      }}</span>
                    </div>
                  </div>
                  <span class="line my-4"></span>
                  <div class="px-4">
                    <div class="d-flex align-items-center">
                      <div class="fs-5 text-muted" style="min-width: 50%">
                        Gross amount
                      </div>
                      <span class="fs-5 transaction-right">{{
                        item?.gross_amt.toLocaleString()
                      }}</span>
                    </div>
                  </div>
                  <span class="line my-4"></span>
                  <div class="px-4">
                    <div class="d-flex align-items-center">
                      <div class="fs-5 text-muted" style="min-width: 50%">
                        Quantity
                      </div>
                      <span class="fs-5 transaction-right">{{
                        item?.ord_qty
                      }}</span>
                    </div>
                  </div>
                  <span class="line my-4"></span>
                  <div class="px-4">
                    <div class="d-flex align-items-center">
                      <div class="fs-5 text-muted" style="min-width: 50%">
                        {{ translate("fee") }}
                      </div>
                      <span class="fs-5 transaction-right"
                        >{{ (item?.fee_rt * 100).toFixed(2) }}%</span
                      >
                    </div>
                  </div>
                  <span class="line my-4"></span>
                  <div class="px-4">
                    <div class="d-flex align-items-center">
                      <div class="fs-5 text-muted" style="min-width: 50%">
                        Estimate fee
                      </div>
                      <span class="fs-5 transaction-right">{{
                        item?.fee_amt.toLocaleString()
                      }}</span>
                    </div>
                  </div>
                  <span class="line my-4"></span>
                  <div class="px-4">
                    <div class="d-flex align-items-center">
                      <div class="fs-5 text-muted" style="min-width: 50%">
                        Tax
                      </div>
                      <span class="fs-5 transaction-right"
                        >{{ (item?.tax_rt * 100).toFixed(2) }}%</span
                      >
                    </div>
                  </div>
                  <span class="line my-4"></span>
                  <div class="px-4">
                    <div class="d-flex align-items-center">
                      <div class="fs-5 text-muted" style="min-width: 50%">
                        Estimate tax
                      </div>
                      <span class="fs-5 transaction-right">{{
                        item?.tax_amt
                      }}</span>
                    </div>
                  </div>
                  <span class="line my-4"></span>
                  <div class="px-4">
                    <div class="d-flex align-items-center">
                      <div class="fs-5 text-muted" style="min-width: 50%">
                        Net amount
                      </div>
                      <span class="fs-5 transaction-right">{{
                        item?.net_amt
                      }}</span>
                    </div>
                  </div>
                  <span class="line my-4"></span>
                  <div class="px-4">
                    <div class="d-flex align-items-center">
                      <div class="fs-5 text-muted" style="min-width: 50%">
                        {{ translate("unitPrice") }}
                      </div>
                      <span class="fs-5 transaction-right">{{
                        item?.unit_pri_amt
                      }}</span>
                    </div>
                  </div>
                  <span class="line my-4"></span>
                  <div class="px-4">
                    <div class="d-flex align-items-center">
                      <div class="fs-5 text-muted" style="min-width: 50%">
                        NAV/Share
                      </div>
                      <span class="fs-5 transaction-right">{{
                        item?.cert_nav.toLocaleString()
                      }}</span>
                    </div>
                  </div>
                  <span class="line my-4"></span>
                  <div class="px-4">
                    <div class="d-flex align-items-center">
                      <div class="fs-5 text-muted" style="min-width: 50%">
                        NAV
                      </div>
                      <span class="fs-5 transaction-right">{{
                        item?.nav.toLocaleString()
                      }}</span>
                    </div>
                  </div>
                  <span class="line my-4"></span>
                  <div class="px-4">
                    <div class="d-flex align-items-center">
                      <div class="fs-5 text-muted" style="min-width: 50%">
                        NAV Date
                      </div>
                      <span class="fs-5 transaction-right">{{
                        item?.nav_upd_dt
                      }}</span>
                    </div>
                  </div>
                  <span class="line my-4"></span>
                  <div class="px-4">
                    <div class="d-flex align-items-center">
                      <div class="fs-5 text-muted" style="min-width: 50%">
                        {{ translate("status") }}
                      </div>
                      <span class="fs-5 transaction-right">{{
                        item?.ord_stat
                      }}</span>
                    </div>
                  </div>
                  <span class="line my-4"></span>
                  <div class="px-4 pb-4">
                    <div class="d-flex align-items-center">
                      <div class="fs-5 text-muted" style="min-width: 50%">
                        {{ translate("paymentStatus") }}
                      </div>
                      <span class="fs-5 transaction-right">{{
                        item?.pymt_stat
                      }}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-6">
        <div v-for="(item, index) in detailOrderResponse" :key="index">
          <div class="my-8 mx-8">
            <h2>Order form</h2>
            <div v-if="item?.sync_order_form === 'null'">
              <div class="no-pdf"></div>
            </div>
            <div v-if="item?.sync_order_form !== 'null'">
              <div v-if="getLastFile(item?.sync_order_form) == 'pdf'">
                <iframe
                  id="fred"
                  style="border: 1px solid #666ccc"
                  title="PDF in an i-Frame"
                  :src="cleanURLs(item?.sync_order_form)"
                  frameborder="1"
                  scrolling="auto"
                  width="100%"
                  height="600px"
                ></iframe>
              </div>
              <div v-if="getLastFile(item?.sync_order_form) == 'png'">
                <el-image
                  class="url-link"
                  :src="cleanURLs(item?.sync_order_form)"
                  :zoom-rate="1.2"
                  :max-scale="7"
                  :min-scale="0.2"
                  :preview-src-list="[cleanURLs(item?.sync_order_form)]"
                  :initial-index="4"
                  fit="cover"
                />
              </div>
            </div>
          </div>
          <div class="my-8 mx-8">
            <h2>VSD Trading</h2>
            <div v-if="item?.sync_vsd_confirmation === 'null'">
              <div class="no-pdf"></div>
            </div>
            <div v-if="item?.sync_vsd_confirmation !== 'null'">
              <div v-if="getLastFile(item?.sync_vsd_confirmation) == 'pdf'">
                <iframe
                  id="fred"
                  style="border: 1px solid #666ccc"
                  title="PDF in an i-Frame"
                  :src="cleanURLs(item?.sync_vsd_confirmation)"
                  frameborder="1"
                  scrolling="auto"
                  width="100%"
                  height="600px"
                ></iframe>
              </div>
              <div v-if="getLastFile(item?.sync_vsd_confirmation) == 'png'">
                <el-image
                  class="url-link"
                  :src="cleanURLs(item?.sync_vsd_confirmation)"
                  :zoom-rate="1.2"
                  :max-scale="7"
                  :min-scale="0.2"
                  :preview-src-list="[cleanURLs(item?.sync_vsd_confirmation)]"
                  :initial-index="4"
                  fit="cover"
                />
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
import { useFundStore } from "@/stores/fund";

import { translate } from "@/core/helpers/i18n-translate";
import { useRoute } from "vue-router";

export default defineComponent({
  name: "apps-fund-details-management",
  components: {},
  setup() {
    const loading = ref<boolean>(false);
    const detailResponse = ref();
    const detailOrderResponse = ref();
    const store = useFundStore();
    const route = useRoute();

    const getFundManagerDetail = async () => {
      loading.value = true;
      await store.getFundListDetails(route.query.userId);

      const requestFundResponse = JSON.parse(
        JSON.stringify(store.fundListDetail)
      );
      detailResponse.value = requestFundResponse?.data;
      loading.value = false;
    };

    const getFundOrderDetails = async () => {
      loading.value = true;
      await store.getFundListOrderDetails(route.query.orderId);

      const requestOrderResponse = JSON.parse(
        JSON.stringify(store.fundListOrderDetail)
      );

      detailOrderResponse.value = requestOrderResponse?.data;
      loading.value = false;
    };

    const getLastFile = (url) => {
      const fileExtension = url.split(".").pop();

      let stringWithBacktick = fileExtension;

      let stringWithoutBacktick = stringWithBacktick.slice(0, -1);

      return stringWithoutBacktick;
    };

    const cleanURLs = (url) => {
      // eslint-disable-next-line no-useless-escape
      let cleanUrl = url.replace(/^\"|\"$/g, "");

      return cleanUrl;
    };

    const handleBack = () => {
      window.history.back();
    };

    onBeforeMount(() => {
      getFundManagerDetail();
      getFundOrderDetails();
    });

    return {
      detailResponse,
      detailOrderResponse,
      translate,
      getLastFile,
      cleanURLs,
      handleBack,
    };
  },
});
</script>

<style scoped>
.line {
  display: block;
  width: 100%;
  border: 1px solid #bebebe;
  border-radius: 4px;
}

.back-btn {
  border-radius: 50%;
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

.no-pdf {
  position: relative;
  background-image: url(https://sandbox.vcam.dev/assets/admin_v2/examples/image-default-bfa5d396aa260191d8ec7ec4e8f6da1f593ddd667a0aa98be24487d3202e4263.png);
  background-position: 50% 50%;
  background-repeat: no-repeat;
  -moz-background-size: contain;
  -o-background-size: contain;
  -webkit-background-size: contain;
  background-size: contain;
  height: 300px;
  width: 300px;
  content: "";
  margin: 0 10px 10px 0;
}
.container-transaction {
  border: 1px solid #bfbebe;
}
.transaction-right {
  /* flex: 1; */
}

.url-link {
  padding: 30px;
  background-color: white;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  max-width: 350px;
}
</style>
