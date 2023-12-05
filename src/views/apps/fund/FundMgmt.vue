<template>
  <div class="card">
    <div class="card-header border-0 pt-6">
      <div class="flex-column w-100">
        <form class="form" autoComplete="on" @submit.prevent="handleSearch">
          <div class="row">
            <div
              class="col-md-3 d-flex align-items-center position-relative my-2"
            >
              <el-input
                autofocus
                v-model="formSearchData.name"
                size="large"
                :placeholder="translate('searchNameCode')"
                clearable
                :prefix-icon="Search"
              />
            </div>
            <div
              class="col-md-3 d-flex align-items-center position-relative my-2"
            >
              <el-input
                autofocus
                v-model="formSearchData.trading_code"
                size="large"
                :placeholder="translate('searchTradingCode')"
                clearable
                :prefix-icon="Search"
              />
            </div>
            <div
              class="col-md-3 d-flex align-items-center position-relative my-2"
            >
              <el-input
                autofocus
                v-model="formSearchData.ccq_code"
                size="large"
                :placeholder="translate('searchFundCode')"
                clearable
                :prefix-icon="Search"
              />
            </div>
            <div
              class="col-md-3 d-flex align-items-center position-relative my-2"
            >
              <el-date-picker
                v-model="formSearchData.date_search"
                type="daterange"
                :range-separator="translate('to')"
                :start-placeholder="translate('startDate')"
                :end-placeholder="translate('endDate')"
                format="DD/MM/YYYY"
                value-format="DD-MM-YYYY"
                size="large"
              />
            </div>
          </div>
          <div class="row my-6">
            <div
              class="col-md-3 d-flex align-items-center position-relative my-2"
            >
              <el-select
                :placeholder="translate('issuers')"
                size="large"
                clearable
                v-model="formSearchData.issuers"
              >
                <el-option :label="translate('all')" value="1" />
              </el-select>
            </div>
            <div
              class="col-md-3 d-flex align-items-center position-relative my-2"
            >
              <el-select
                :placeholder="translate('paymentStatus')"
                size="large"
                clearable
                v-model="formSearchData.payment_status"
              >
                <el-option
                  v-for="item in paymentStatus"
                  :key="item.Key"
                  :label="item.VI"
                  :value="item.Key"
                />
              </el-select>
            </div>
            <div
              class="col-md-3 d-flex align-items-center position-relative my-2"
            >
              <el-select
                :placeholder="translate('commandStatus')"
                size="large"
                clearable
                v-model="formSearchData.command_status"
              >
                <el-option
                  v-for="item in commandStatus"
                  :key="item.Key"
                  :label="item.VI"
                  :value="item.Key"
                />
              </el-select>
            </div>
            <div
              class="col-md-3 d-flex align-items-center position-relative my-2"
            >
              <el-select
                :placeholder="translate('commandType')"
                size="large"
                clearable
                v-model="formSearchData.command_type"
              >
                <el-option
                  v-for="item in commandType"
                  :key="item.Key"
                  :label="item.VI"
                  :value="item.Key"
                />
              </el-select>
            </div>
            <div
              class="col-md-2 d-flex align-items-center position-relative my-2"
            >
              <button
                :data-kt-indicator="false ? 'on' : null"
                type="submit"
                class="btn btn-primary"
              >
                <span v-if="true" class="indicator-label">{{
                  translate("search")
                }}</span>
                <span v-if="false" class="indicator-progress"
                  >Please wait...
                  <span
                    class="spinner-border spinner-border-sm align-middle ms-2"
                  ></span
                ></span>
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
    <div class="card-body pt-0">
      <NHDatatable
        :table-header="tableHeader"
        :table-data="dataRequestFundManager"
        :loading="loading"
        :show-overflow-tooltip="false"
        :pagination="pagination"
        :enable-items-per-page-dropdown="true"
        @change-page="changePage"
        @change-page-size="changePageSize"
      >
        <template v-slot:cust_nm="{ row }">
          <div v-if="row.cust_nm !== null">
            <router-link
              :to="{
                name: 'fund-certificates-detail',
                query: {
                  userId: row.acnt_id,
                  orderId: row.ord_id,
                },
              }"
            >
              {{ row.cust_nm }}
            </router-link>
          </div>
          <div v-if="row.cust_nm === null">-</div>
        </template>

        <template v-slot:gross_amt="{ row }">
          <div>
            {{ row.gross_amt.toLocaleString() }}
          </div>
        </template>
        <template v-slot:cert_nav="{ row }">
          <div>
            {{ row.cert_nav.toLocaleString() }}
          </div>
        </template>
        <template v-slot:fnd_full_cd="{ row }">
          <div class="text-uppercase">
            {{ row.fnd_full_cd }}
          </div>
        </template>
        <template v-slot:pymt_stat="{ row }">
          <div>
            {{ handlePaymentStatus(row.pymt_stat) }}
          </div>
        </template>
        <template v-slot:ord_stat="{ row }">
          <div>
            {{ handleOrderStatus(row.ord_stat) }}
          </div>
        </template>
        <template v-slot:ord_tp="{ row }">
          <div v-if="row.ord_tp === 'buy'">
            <div
              class="bg-success rounded border border-1 border-white order-type"
            >
              Mua
            </div>
          </div>
          <div v-if="row.ord_tp === 'sell'">
            <div
              class="bg-danger rounded border border-1 border-white order-type"
            >
              Bán
            </div>
          </div>
        </template>
        <template v-slot:created_dtm="{ row }">
          <div v-if="row.created_dtm">
            {{ formatDate(row.created_dtm) }}
          </div>
          <div v-if="row.created_dtm === null">-</div>
        </template>
      </NHDatatable>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onBeforeMount, ref, watch } from "vue";
import { Search } from "@element-plus/icons-vue";
import { translate } from "@/core/helpers/i18n-translate";
import NHDatatable from "@/components/nh-datatable/NHDatatable.vue";
import { useFundStore } from "@/stores/fund";

export default defineComponent({
  name: "fund-management",
  components: {
    NHDatatable,
  },
  setup() {
    const store = useFundStore();
    let pagination = ref();
    let dataRequestFundManager = ref();
    let paymentStatus = ref();
    let commandStatus = ref();
    let commandType = ref();
    let fromDate = ref();
    let toDate = ref();
    const formSearchData = ref({
      name: "",
      trading_code: "",
      ccq_code: "",
      term: "",
      issuers: "",
      payment_status: "",
      command_status: "",
      command_type: "",
      date_search: [],
    });
    const tableHeader = ref([
      {
        label: "fullname",
        prop: "cust_nm",
        visible: true,
        fix: true,
      },
      {
        label: "vsdTradingCode",
        prop: "trading_code",
        visible: true,
      },
      {
        label: "date",
        prop: "created_at",
        visible: true,
      },
      {
        label: "orderType",
        prop: "ord_tp",
        visible: true,
      },
      {
        label: "fundCode",
        prop: "fnd_full_cd",
        visible: true,
      },
      {
        label: "issuers",
        prop: "fnd_co_nm",
        visible: true,
      },
      {
        label: "interestHole",
        prop: "fluctuations",
        visible: true,
      },
      {
        label: "amount",
        prop: "gross_amt",
        visible: true,
      },
      {
        label: "quantity",
        prop: "ord_qty",
        visible: true,
      },
      {
        label: "navShare",
        prop: "cert_nav",
        visible: true,
      },
      {
        label: "paymentStatus",
        prop: "pymt_stat",
        visible: true,
      },
      {
        label: "orderStatus",
        prop: "ord_stat",
        visible: true,
      },
    ]);
    const loading = ref<boolean>(false);

    watch(formSearchData.value, (_) => {
      if (formSearchData?.value?.date_search) {
        const formatData = JSON.parse(
          JSON.stringify(formSearchData.value.date_search)
        );

        fromDate.value = customFromDate(formatData[0]);
        toDate.value = customToDate(formatData[1]);
      } else {
        formSearchData.value.date_search = [];
      }
    });

    const customFromDate = (date) => {
      if (date) {
        const dateComponents = date.split("-");

        const dateObject = new Date(
          dateComponents[2],
          dateComponents[1] - 1,
          dateComponents[0]
        );

        dateObject.setHours(0, 0, 0, 0);

        const formattedDate = `${("0" + dateObject.getDate()).slice(-2)}-${(
          "0" +
          (dateObject.getMonth() + 1)
        ).slice(-2)}-${dateObject.getFullYear()} ${(
          "0" + dateObject.getHours()
        ).slice(-2)}:${("0" + dateObject.getMinutes()).slice(-2)}:${(
          "0" + dateObject.getSeconds()
        ).slice(-2)}`;

        return formattedDate;
      }
    };
    const customToDate = (date) => {
      if (date) {
        const dateComponents = date.split("-");

        const dateObject = new Date(
          dateComponents[2],
          dateComponents[1] - 1,
          dateComponents[0]
        );

        dateObject.setHours(23, 59, 59, 23);

        const formattedDate = `${("0" + dateObject.getDate()).slice(-2)}-${(
          "0" +
          (dateObject.getMonth() + 1)
        ).slice(-2)}-${dateObject.getFullYear()} ${(
          "0" + dateObject.getHours()
        ).slice(-2)}:${("0" + dateObject.getMinutes()).slice(-2)}:${(
          "0" + dateObject.getSeconds()
        ).slice(-2)}`;

        return formattedDate;
      }
    };

    const getRequestFundManager = async (
      pageNo?: number,
      pageSize = "10",
      name?: string,
      VsdTradingCode?: string,
      fundCode?: string,
      fromDate?: string,
      toDate?: string,
      paymentStatus?: string,
      commandStatus?: string,
      commandType?: string
    ) => {
      loading.value = true;
      await store.getFundList({
        params: {
          name: name ? name : "",
          VsdTradingCode: VsdTradingCode ? VsdTradingCode : "",
          fund_code: fundCode ? fundCode : "",
          fromDate: fromDate ? fromDate : "",
          toDate: toDate ? toDate : "",
          payment_status: paymentStatus ? paymentStatus : "",
          order_type: commandType ? commandType : "",
          order_status: commandStatus ? commandStatus : "",
          pageNo: pageNo,
          pageSize: pageSize,
        },
      });

      const requestPageResponse = JSON.parse(JSON.stringify(store.fundList));

      dataRequestFundManager.value = requestPageResponse.data;
      pagination.value = {
        totalPages: requestPageResponse.totalPages,
        pageNo: +requestPageResponse.pageNo,
        pageSize: requestPageResponse.pageSize,
        totalCount: requestPageResponse.totalCount,
        currentCount: +requestPageResponse.currentCount,
      };
      loading.value = false;
    };

    const getFundStatus = async () => {
      loading.value = true;
      await store.getStatusFundList();

      const requestFundResponse = JSON.parse(
        JSON.stringify(store.fundStatusList)
      );
      paymentStatus.value = requestFundResponse.data.payment_status;
      commandStatus.value = requestFundResponse.data.order_status;
      commandType.value = requestFundResponse.data.order_type;
      loading.value = false;
    };

    const handleSearch = () => {
      const formData = JSON.parse(JSON.stringify(formSearchData.value));
      getRequestFundManager(
        1,
        pagination.value.pageSize,
        formData.name ? formData.name : "",
        formData.trading_code ? formData.trading_code : "",
        formData.ccq_code ? formData.ccq_code : "",
        fromDate.value,
        toDate.value,
        formData.payment_status ? formData.payment_status : "",
        formData.command_status ? formData.command_status : "",
        formData.command_type ? formData.command_type : ""
      );
    };

    const formatDate = (val) => {
      const date = new Date(val);
      const dateObject = new Date(date);

      const year = dateObject.getFullYear();
      const month = String(dateObject.getMonth() + 1).padStart(2, "0");
      const day = String(dateObject.getDate()).padStart(2, "0");

      const desiredDateString = `${day}-${month}-${year}`;

      return desiredDateString;
    };

    const handlePaymentStatus = (val) => {
      let text = "";
      switch (val) {
        case "pending":
          text = "Chưa thanh toán";
          break;
        case "fail":
          text = "Chuyển tiền không thành công";
          break;
        case "waiting_confirm":
          text = "Lệnh chuyển tiền đang chờ xác nhận";
          break;
        case "success":
          text = "Chuyển tiền thành công";
          break;
        case "rollback":
          text = "Hoàn tiền thành công";
          break;
        default:
          break;
      }
      return text;
    };

    const handleOrderStatus = (val) => {
      let text = "";
      switch (val) {
        case "pending_confirmation":
          text = "Đợi người dùng xác nhận OTP";
          break;
        case "new":
          text = "Mới tạo";
          break;
        case "cancel":
          text = "Đã bị hủy";
          break;
        case "approved":
          text = "Chờ nhập lên VSD";
          break;
        case "pending_completion":
          text = "Chờ kết quả giao dịch";
          break;
        case "completed":
          text = "Thành công";
          break;
        case "system_cancel":
          text = "Hệ thống huỷ lệnh";
          break;
        default:
          break;
      }
      return text;
    };

    function changePage(page) {
      getRequestFundManager(page, pagination.value.pageSize);
    }

    const changePageSize = (pageSize) => {
      pagination.value.pageSize = pageSize;
      getRequestFundManager(1, pageSize);
    };

    onBeforeMount(() => {
      getRequestFundManager(1);
      getFundStatus();
    });

    return {
      tableHeader,
      loading,
      formSearchData,
      Search,
      dataRequestFundManager,
      pagination,
      paymentStatus,
      commandStatus,
      commandType,
      formatDate,
      translate,
      handleSearch,
      handlePaymentStatus,
      handleOrderStatus,
      changePageSize,
      changePage,
    };
  },
});
</script>

<style scoped>
.order-type {
  max-width: fit-content;
  padding: 0 8px;
  margin: auto;
}
.del-btn {
  padding: 14px 15px;
}

.table-img {
  width: 100%;
  border-radius: 8px;
  position: relative;
  object-fit: contain;
}

.card-title {
  width: 100%;
}

.my-header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.action-right {
  flex: 1;
}

.search-page {
  flex-flow: row;
}

.dialog-footer button:first-child {
  margin-right: 0;
}

.btn-add {
  position: relative;
  left: 24px;
}

.wrapper-header {
  flex-flow: row;
}
</style>
