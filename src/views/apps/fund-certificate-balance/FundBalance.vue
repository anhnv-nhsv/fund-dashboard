<template>
  <div class="card">
    <div class="card-header border-0 pt-6 pb-3">
      <div class="w-100">
        <form class="form row" autoComplete="on" @submit.prevent="handleSearch">
          <div></div>
          <div
            class="col-md-3 d-flex align-items-center position-relative my-1"
          >
            <el-input
              autofocus
              v-model="formSearchData.name"
              size="large"
              :placeholder="translate('searchFundName')"
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
        </form>
      </div>
    </div>
    <div class="card-body pt-0">
      <NHDatatable
        :table-header="tableHeader"
        :table-data="dataRequestFundInfor"
        :loading="loading"
        :show-overflow-tooltip="false"
        :pagination="pagination"
        :enable-items-per-page-dropdown="true"
        @change-page="changePage"
        @change-page-size="changePageSize"
      >
        <template v-slot:fnd_status="{ row }">
          <div v-if="row.fnd_status === 'sell'">
            <div class="">Bán</div>
          </div>
          <div v-if="row.fnd_status === 'stopped'">
            <div class="">Dừng bán</div>
          </div>
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
import { useFundBalanceStore } from "@/stores/fund-balance";

export default defineComponent({
  name: "apps-fund-balance",
  components: {
    NHDatatable,
  },
  setup() {
    const store = useFundBalanceStore();
    const formSearchData = ref({
      name: "",
      trading_code: "",
      ccq_code: "",
    });
    const tableHeader = ref([
      {
        label: "fullName",
        prop: "cust_nm",
        visible: true,
      },
      {
        label: "vsdTradingCode",
        prop: "trading_code",
        visible: true,
      },
      {
        label: "fundCode",
        prop: "fund_code_text",
        visible: true,
      },
      {
        label: "fundName",
        prop: "fnd_nm",
        visible: true,
      },
      {
        label: "totalQuantity",
        prop: "qty",
        visible: true,
      },
      {
        label: "blockQuantity",
        prop: "qty_blk",
        visible: true,
      },
      {
        label: "availableQuantity",
        prop: "qty_avail",
        visible: true,
      },
    ]);
    const loading = ref<boolean>(false);
    let dataRequestFundInfor = ref();
    let pagination = ref();
    const userList = ref([]);
    let fundBalanceAction = ref("");
    const fundFormData = ref({});

    const getRequestFundInfor = async (
      pageNo?: number,
      pageSize = "10",
      fundName?: string,
      fromDate?: string,
      toDate?: string
    ) => {
      loading.value = true;
      await store.getFundListBalance({
        params: {
          name: fundName ? fundName : "",
          VsdTradingCode: fromDate ? fromDate : "",
          fund_code: toDate ? toDate : "",
          pageNo: pageNo,
          pageSize: pageSize,
        },
      });

      const requestPageResponse = JSON.parse(
        JSON.stringify(store.fundListBalance)
      );

      dataRequestFundInfor.value = requestPageResponse.data;
      pagination.value = {
        totalPages: requestPageResponse.totalPages,
        pageNo: +requestPageResponse.pageNo,
        pageSize: requestPageResponse.pageSize,
        totalCount: requestPageResponse.totalCount,
        currentCount: +requestPageResponse.currentCount,
      };
      loading.value = false;
    };

    const handleSearch = () => {
      const formData = JSON.parse(JSON.stringify(formSearchData.value));
      getRequestFundInfor(
        1,
        pagination.value.pageSize,
        formData.name ? formData.name : "",
        formData.trading_code ? formData.trading_code : "",
        formData.ccq_code ? formData.ccq_code : ""
      );
    };

    function changePage(page) {
      getRequestFundInfor(page, pagination.value.pageSize);
    }

    const changePageSize = (pageSize) => {
      pagination.value.pageSize = pageSize;
      getRequestFundInfor(1, pageSize);
    };

    onBeforeMount(() => {
      getRequestFundInfor();
    });

    return {
      userList,
      formSearchData,
      fundBalanceAction,
      tableHeader,
      loading,
      Search,
      dataRequestFundInfor,
      fundFormData,
      pagination,
      translate,
      handleSearch,
      changePage,
      changePageSize,
    };
  },
});
</script>

<style scoped>
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
