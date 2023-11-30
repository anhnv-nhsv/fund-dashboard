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
import { useFundDeclarationStore } from "@/stores/fund-declaration";

export default defineComponent({
  name: "apps-fund-balance",
  components: {
    NHDatatable,
  },
  setup() {
    const store = useFundDeclarationStore();
    const formSearchData = ref({
      name: "",
      trading_code: "",
      ccq_code: "",
    });
    const tableHeader = ref([
      {
        label: "Order",
        prop: "id",
        visible: true,
      },
      {
        label: "fullName",
        prop: "created_at",
        visible: true,
      },
      {
        label: "vsdTradingCode",
        prop: "fnd_co_cd",
        visible: true,
      },
      {
        label: "fundCode",
        prop: "fnd_nm",
        visible: true,
      },
      {
        label: "fundName",
        prop: "fnd_co_nm",
        visible: true,
      },
      {
        label: "totalQuantity",
        prop: "fnd_status",
        visible: true,
      },
      {
        label: "blockQuantity",
        prop: "issuers",
        visible: true,
      },
      {
        label: "availableQuantity",
        prop: "fluctuations",
        visible: true,
      },
    ]);
    const loading = ref<boolean>(false);
    let dataRequestFundInfor = ref();
    const userList = ref([]);
    let fundBalanceAction = ref("");
    const fundFormData = ref({});

    const getRequestFundInfor = async (
      fundName?: string,
      fromDate?: string,
      toDate?: string
    ) => {
      loading.value = true;
      await store.getFundNhsvList({
        params: {
          fnd_nm: fundName ? fundName : "",
          fromDate: fromDate ? fromDate : "",
          toDate: toDate ? toDate : "",
        },
      });

      const requestPageResponse = JSON.parse(
        JSON.stringify(store.fundNhsvList)
      );

      dataRequestFundInfor.value = requestPageResponse.data;
      loading.value = false;
    };

    const handleSearch = () => {
      const formData = JSON.parse(JSON.stringify(formSearchData.value));
      getRequestFundInfor(formData.name ? formData.name : "");
    };

    const handleCloseModal = () => {};

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
      translate,
      handleSearch,
      handleCloseModal,
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
