<template>
  <div class="card">
    <div class="row">
      <div class="col-6">
        <div class="pb-8">
          <h2 class="my-8 mx-8">Thông tin cá nhân</h2>
          <div v-for="(item, index) in detailResponse" :key="index">
            <div class="px-12">
              <span class="line my-4"></span>
              <div class="row px-4">
                <div class="col-6 d-flex align-items-center">
                  <div class="fs-5" style="min-width: 50%">
                    VSD trading code
                  </div>
                  <span class="fs-5">{{
                    item?.trading_code === "null" ? "N/A" : item?.trading_code
                  }}</span>
                </div>
                <div class="col-6 d-flex align-items-center">
                  <div class="fs-5" style="min-width: 50%">Họ tên</div>
                  <span class="fs-5">{{ item?.cust_nm }}</span>
                </div>
              </div>
            </div>
            <div class="px-12">
              <span class="line my-4"></span>
              <div class="row px-4">
                <div class="col-6 d-flex align-items-center">
                  <div class="fs-5" style="min-width: 50%">Loại hình TK</div>
                  <span class="fs-5">N/A</span>
                </div>
                <div class="col-6 d-flex align-items-center">
                  <div class="fs-5" style="min-width: 50%">Loại NĐT</div>
                  <span class="fs-5">{{ item?.acnt_type }}</span>
                </div>
              </div>
            </div>
            <div class="px-12">
              <span class="line my-4"></span>
              <div class="row px-4">
                <div class="col-6 d-flex align-items-center">
                  <div class="fs-5" style="min-width: 50%">Quốc tịch</div>
                  <span class="fs-5">{{
                    item?.nationality === "null" ? "N/A" : item?.nationality
                  }}</span>
                </div>
                <div class="col-6 d-flex align-items-center">
                  <div class="fs-5" style="min-width: 50%">Giới tính</div>
                  <span class="fs-5">{{ item?.sex_tp }}</span>
                </div>
              </div>
            </div>
            <div class="px-12">
              <span class="line my-4"></span>
              <div class="row px-4">
                <div class="col-6 d-flex align-items-center">
                  <div class="fs-5" style="min-width: 50%">Ngày sinh</div>
                  <span class="fs-5">{{ item?.dob }}</span>
                </div>
                <div class="col-6 d-flex align-items-center">
                  <div class="fs-5" style="min-width: 50%">Số ĐKSH</div>
                  <span class="fs-5">{{ item?.idno }}</span>
                </div>
              </div>
            </div>
            <div class="px-12">
              <span class="line my-4"></span>
              <div class="row px-4">
                <div class="col-6 d-flex align-items-center">
                  <div class="fs-5" style="min-width: 50%">Loại hình ĐKSH</div>
                  <span class="fs-5">{{ item?.id_type_text }}</span>
                </div>
                <div class="col-6 d-flex align-items-center">
                  <div class="fs-5" style="min-width: 50%">Ngày cấp</div>
                  <span class="fs-5">{{ item?.idno_iss_dt }}</span>
                </div>
              </div>
            </div>
            <div class="px-12">
              <span class="line my-4"></span>
              <div class="row px-4">
                <div class="col-6 d-flex align-items-center">
                  <div class="fs-5" style="min-width: 50%">Nơi cấp</div>
                  <span class="fs-5">{{ item?.idno_iss_pl }}</span>
                </div>
                <div class="col-6 d-flex align-items-center">
                  <div class="fs-5" style="min-width: 50%">SĐT</div>
                  <span class="fs-5">{{ item?.tel }}</span>
                </div>
              </div>
            </div>
            <div class="px-12">
              <span class="line my-4"></span>
              <div class="row px-4">
                <div class="col-6 d-flex align-items-center">
                  <div class="fs-5" style="min-width: 50%">Địa chỉ</div>
                  <span class="fs-5">{{ item?.addr }}</span>
                </div>
                <div class="col-6 d-flex align-items-center">
                  <div class="fs-5" style="min-width: 50%">Email</div>
                  <span class="fs-5">{{ item?.email }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="pb-8">
          <h2 class="my-8 mx-8">Xem chi tiết giao dịch</h2>
          <div v-for="(item, index) in detailOrderResponse" :key="index">
            <div class="px-12">
              <div class="container-transaction">
                <div class="">
                  <div class="px-4 mt-4">
                    <div class="d-flex align-items-center">
                      <div class="fs-5" style="min-width: 50%">
                        VSD trading code
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
                      <div class="fs-5" style="min-width: 50%">Fund code</div>
                      <span class="fs-5 transaction-right">{{
                        item?.fnd_cd
                      }}</span>
                    </div>
                  </div>
                  <span class="line my-4"></span>
                  <div class="px-4">
                    <div class="d-flex align-items-center">
                      <div class="fs-5" style="min-width: 50%">Type</div>
                      <span class="fs-5 transaction-right">{{
                        item?.ord_tp
                      }}</span>
                    </div>
                  </div>
                  <span class="line my-4"></span>
                  <div class="px-4">
                    <div class="d-flex align-items-center">
                      <div class="fs-5" style="min-width: 50%">
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
                      <div class="fs-5" style="min-width: 50%">Quantity</div>
                      <span class="fs-5 transaction-right">{{
                        item?.ord_qty
                      }}</span>
                    </div>
                  </div>
                  <span class="line my-4"></span>
                  <div class="px-4">
                    <div class="d-flex align-items-center">
                      <div class="fs-5" style="min-width: 50%">Fee</div>
                      <span class="fs-5 transaction-right"
                        >{{ (item?.fee_rt * 100).toFixed(1) }}%</span
                      >
                    </div>
                  </div>
                  <span class="line my-4"></span>
                  <div class="px-4">
                    <div class="d-flex align-items-center">
                      <div class="fs-5" style="min-width: 50%">
                        Estimate fee
                      </div>
                      <span class="fs-5 transaction-right">{{
                        item?.gross_amt.toLocaleString()
                      }}</span>
                    </div>
                  </div>
                  <span class="line my-4"></span>
                  <div class="px-4">
                    <div class="d-flex align-items-center">
                      <div class="fs-5" style="min-width: 50%">Tax</div>
                      <span class="fs-5 transaction-right"
                        >{{ item?.tax_rt }}%</span
                      >
                    </div>
                  </div>
                  <span class="line my-4"></span>
                  <div class="px-4">
                    <div class="d-flex align-items-center">
                      <div class="fs-5" style="min-width: 50%">
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
                      <div class="fs-5" style="min-width: 50%">Net amount</div>
                      <span class="fs-5 transaction-right">{{
                        item?.net_amt
                      }}</span>
                    </div>
                  </div>
                  <span class="line my-4"></span>
                  <div class="px-4">
                    <div class="d-flex align-items-center">
                      <div class="fs-5" style="min-width: 50%">Unit price</div>
                      <span class="fs-5 transaction-right">{{
                        item?.unit_pri_amt
                      }}</span>
                    </div>
                  </div>
                  <span class="line my-4"></span>
                  <div class="px-4">
                    <div class="d-flex align-items-center">
                      <div class="fs-5" style="min-width: 50%">NAV/Share</div>
                      <span class="fs-5 transaction-right">{{
                        item?.cert_nav.toLocaleString()
                      }}</span>
                    </div>
                  </div>
                  <span class="line my-4"></span>
                  <div class="px-4">
                    <div class="d-flex align-items-center">
                      <div class="fs-5" style="min-width: 50%">NAV</div>
                      <span class="fs-5 transaction-right">{{
                        item?.nav.toLocaleString()
                      }}</span>
                    </div>
                  </div>
                  <span class="line my-4"></span>
                  <div class="px-4">
                    <div class="d-flex align-items-center">
                      <div class="fs-5" style="min-width: 50%">NAV Date</div>
                      <span class="fs-5 transaction-right">{{
                        item?.nav_upd_dt
                      }}</span>
                    </div>
                  </div>
                  <span class="line my-4"></span>
                  <div class="px-4">
                    <div class="d-flex align-items-center">
                      <div class="fs-5" style="min-width: 50%">Status</div>
                      <span class="fs-5 transaction-right">{{
                        item?.ord_stat
                      }}</span>
                    </div>
                  </div>
                  <span class="line my-4"></span>
                  <div class="px-4 pb-4">
                    <div class="d-flex align-items-center">
                      <div class="fs-5" style="min-width: 50%">
                        Payment state
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
            <div v-if="!item.sync_vsd_confirmation">
              <NhPdf pdfFund="https://pdfobject.com/pdf/sample-3pp.pdf" />
              <!-- <NhPdf /> -->
            </div>
            <div v-if="item.sync_order_form">
              <div class="no-pdf"></div>
            </div>
          </div>
          <div class="my-8 mx-8">
            <h2>VSD Trading</h2>
            <div v-if="!item.sync_vsd_confirmation">
              <NhPdf pdfFund="https://pdfobject.com/pdf/sample.pdf" />
            </div>
            <div v-if="item.sync_vsd_confirmation">
              <div class="no-pdf"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onBeforeMount, ref } from "vue";
import NhPdf from "@/components/pdf-fund/NHPdf.vue";
import { useFundStore } from "@/stores/fund";

import { translate } from "@/core/helpers/i18n-translate";
import { useRoute } from "vue-router";

export default defineComponent({
  name: "apps-fund-details-management",
  components: {
    NhPdf,
  },
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

    onBeforeMount(() => {
      getFundManagerDetail();
      getFundOrderDetails();
    });

    return {
      detailResponse,
      detailOrderResponse,
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

.no-pdf {
  position: relative;
  background-image: url(https://sandbox.vcam.dev/assets/admin_v2/examples/image-default-bfa5d396aa260191d8ec7ec4e8f6da1f593ddd667a0aa98be24487d3202e4263.png);
  background-position: 50% 50%;
  background-repeat: no-repeat;
  -moz-background-size: contain;
  -o-background-size: contain;
  -webkit-background-size: contain;
  background-size: contain;
  height: 450px;
  width: 450px;
  content: "";
  margin: 0 10px 10px 0;
}
.container-transaction {
  border: 1px solid #bfbebe;
}
.transaction-right {
  /* flex: 1; */
}
</style>
