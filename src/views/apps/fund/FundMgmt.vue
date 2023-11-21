<template>
  <div class="card">
    <div class="card-header border-0 pt-6">
      <div class="flex-column">
        <form class="form row" autoComplete="on" @submit.prevent="handleSearch">
          <div class="row">
            <div
              class="col-md-3 d-flex align-items-center position-relative my-1"
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
              class="col-md-3 d-flex align-items-center position-relative my-1"
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
              class="col-md-3 d-flex align-items-center position-relative my-1"
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
              class="col-md-3 d-flex align-items-center position-relative my-1"
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
              class="col-md-3 d-flex align-items-center position-relative my-1"
            >
              <el-select
                :placeholder="translate('issuers')"
                size="large"
                clearable
                v-model="formSearchData.issuers"
              >
                <el-option :label="translate('enable')" value="1" />
                <el-option :label="translate('disable')" value="0" />
              </el-select>
            </div>
            <div
              class="col-md-3 d-flex align-items-center position-relative my-1"
            >
              <el-select
                :placeholder="translate('paymentStatus')"
                size="large"
                clearable
                v-model="formSearchData.payment_status"
              >
                <el-option :label="translate('pending')" value="1" />
                <el-option :label="translate('successfully')" value="0" />
                <el-option :label="translate('fail')" value="3" />
              </el-select>
            </div>
            <div
              class="col-md-3 d-flex align-items-center position-relative my-1"
            >
              <el-select
                :placeholder="translate('commandStatus')"
                size="large"
                clearable
                v-model="formSearchData.command_status"
              >
                <el-option :label="translate('pending')" value="1" />
                <el-option :label="translate('successfully')" value="0" />
                <el-option :label="translate('fail')" value="3" />
              </el-select>
            </div>
            <div
              class="col-md-3 d-flex align-items-center position-relative my-1"
            >
              <el-select
                :placeholder="translate('commandType')"
                size="large"
                clearable
                v-model="formSearchData.command_type"
              >
                <el-option :label="translate('buy')" value="1" />
                <el-option :label="translate('sell')" value="0" />
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
        :pagination="pagination"
        :loading="loading"
        :show-overflow-tooltip="false"
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
        <template v-slot:ord_tp="{ row }">
          <div v-if="row.ord_tp === 'buy'">
            <div
              class="bg-success rounded border border-1 border-white order-type"
            >
              {{ row.ord_tp }}
            </div>
          </div>
          <div v-if="row.ord_tp !== 'buy'">
            <div
              class="bg-danger rounded border border-1 border-white order-type"
            >
              {{ row.ord_tp }}
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
import { defineComponent, onBeforeMount, ref } from "vue";
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
        width: "260",
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
        width: 300,
      },
      {
        label: "orderType",
        width: 150,
        prop: "ord_tp",
        visible: true,
      },
      {
        label: "fundCode",
        width: 150,
        prop: "fnd_cd",
        visible: true,
      },
      {
        label: "issuers",
        width: 150,
        prop: "fnd_co_nm",
        visible: true,
      },
      {
        label: "interestHole",
        width: 150,
        prop: "fluctuations",
        visible: true,
      },
      {
        label: "amount",
        width: 150,
        prop: "gross_amt",
        visible: true,
      },
      {
        label: "quantity",
        width: 150,
        prop: "ord_qty",
        visible: true,
      },
      {
        label: "navShare",
        width: 150,
        prop: "cert_nav",
        visible: true,
      },
      {
        label: "paymentStatus",
        width: 150,
        prop: "pymt_stat",
        visible: true,
      },
      {
        label: "orderStatus",
        width: 150,
        prop: "ord_stat",
        visible: true,
      },
      {
        label: "preBalance",
        width: 150,
        prop: "pre_balance",
        visible: true,
      },
      {
        label: "postBalance",
        width: 150,
        prop: "post_balance",
        visible: true,
      },
    ]);
    const loading = ref<boolean>(false);

    const getRequestFundManager = async (
      pageNo?: number,
      // name?: string,
      // publish?: string,
      pageSize = "10"
    ) => {
      loading.value = true;
      await store.getFundList({
        params: {
          // name: name ? name : "",
          // publish: publish ? publish : "",
          pageNo: pageNo,
          pageSize: pageSize,
        },
      });

      const requestPageResponse = JSON.parse(JSON.stringify(store.fundList));

      dataRequestFundManager.value = requestPageResponse.data;
      pagination.value = {
        totalPages: requestPageResponse.totalPages,
        pageNo: requestPageResponse.pageNo,
        pageSize: requestPageResponse.pageSize,
        totalCount: requestPageResponse.totalCount,
        currentCount: requestPageResponse.currentCount,
      };
      loading.value = false;
    };

    const handleSearch = () => {
      const formData = JSON.parse(JSON.stringify(formSearchData.value));
      console.log("formData", formData);
      getRequestFundManager(
        1
        // formData.name,
        // formData.publish ? formData.publish : "",
        // pagination.value.pageSize
      );
    };

    function changePage(page) {
      const formData = JSON.parse(JSON.stringify(formSearchData.value));
      getRequestFundManager(
        page
        // formData.name,
        // formData.publish ? formData.publish : "",
        // pagination.value.pageSize
      );
    }

    const changePageSize = (pageSize) => {
      const formData = JSON.parse(JSON.stringify(formSearchData.value));
      pagination.value.pageSize = pageSize;
      getRequestFundManager(
        1
        // formData.name,
        // formData.publish ? formData.publish : "",
        // pageSize
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

    onBeforeMount(() => {
      getRequestFundManager(1);
    });

    return {
      tableHeader,
      loading,
      formSearchData,
      Search,
      dataRequestFundManager,
      pagination,
      formatDate,
      changePage,
      changePageSize,
      translate,
      handleSearch,
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
