<template>
  <div class="card">
    <div class="card-header border-0 pt-6">
      <div class="flex-column">
        <form class="form row" autoComplete="on" @submit.prevent="handleSearch">
          <div
            class="col-md-4 d-flex align-items-center position-relative my-1"
          >
            <el-input
              autofocus
              v-model="formSearchData.name"
              size="large"
              :placeholder="translate('searchInput')"
              clearable
              :prefix-icon="Search"
            />
          </div>
          <div
            class="col-md-5 d-flex align-items-center position-relative my-1"
          >
            <el-date-picker
              v-model="formSearchData.date_search"
              type="daterange"
              range-separator="To"
              start-placeholder="Start date"
              end-placeholder="End date"
              format="DD/MM/YYYY"
              value-format="DD-MM-YYYY"
              size="large"
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
      <div class="card-toolbar">
        <div
          class="d-flex justify-content-end"
          data-kt-customer-table-toolbar="base"
        >
          <button
            type="button"
            class="btn btn-primary"
            data-bs-toggle="modal"
            data-bs-target="#kt_fund_declaration_action_modal"
          >
            <KTIcon icon-name="plus" icon-class="fs-2" />
            Add
          </button>
        </div>
      </div>
    </div>
    <div class="card-body pt-0">
      <NHDatatable
        :table-header="tableHeader"
        :table-data="tableData"
        :loading="loading"
      >
      </NHDatatable>
    </div>
  </div>
  <FundDeclarationModal
    @on-close="handleCloseModal"
    :data="rowDetail"
    :action="userAction"
  />
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { Search } from "@element-plus/icons-vue";
import { translate } from "@/core/helpers/i18n-translate";
import FundDeclarationModal from "@/components/modals/forms/FundDeclarationModal.vue";
import NHDatatable from "@/components/nh-datatable/NHDatatable.vue";

export default defineComponent({
  name: "apps-declaration-management",
  components: {
    NHDatatable,
    FundDeclarationModal,
  },
  setup() {
    const formSearchData = ref({
      name: "",
      date_search: "",
    });
    const tableHeader = ref([
      {
        label: "Order",
        prop: "order",
        visible: true,
      },
      {
        label: "Date",
        prop: "vsd",
        visible: true,
      },
      {
        label: "Fund",
        prop: "name",
        visible: true,
      },
      {
        label: "Fund name",
        prop: "date",
        visible: true,
      },
      {
        label: "Fund company",
        prop: "order_type",
        visible: true,
      },
      {
        label: "Status",
        prop: "fund_code",
        visible: true,
      },
      {
        label: "Created user",
        prop: "issuers",
        visible: true,
      },
      {
        label: "Edited Infor",
        prop: "fluctuations",
        visible: true,
      },
    ]);
    const loading = ref<boolean>(false);
    const userList = ref([]);
    const value1 = ref();
    const rowDetail = ref();
    let userAction = ref("");
    const tableData = [
      {
        id: 1,
        order: 1,
        vsd: "10/12/2023 00:00:00",
        name: "VCAM-NH VABF",
        date: "Quỹ Đầu tư Trái phiếu phát triển Việt Nam VCAM-NH",
        order_type: "CTCP Quản lý Quỹ Đầu tư Chứng khoán Bản Việt",
        fund_code: "Sell",
        issuers: "mietnt",
        fluctuations: "20/12/2023- mietnt 00:00:00",
      },
      {
        id: 1,
        order: 1,
        vsd: "10/12/2023 00:00:00",
        name: "VCAM-NH VABF",
        date: "Quỹ Đầu tư Trái phiếu phát triển Việt Nam VCAM-NH",
        order_type: "CTCP Quản lý Quỹ Đầu tư Chứng khoán Bản Việt",
        fund_code: "Sell",
        issuers: "mietnt",
        fluctuations: "20/12/2023- mietnt 00:00:00",
      },
      {
        id: 1,
        order: 1,
        vsd: "10/12/2023 00:00:00",
        name: "VCAM-NH VABF",
        date: "Quỹ Đầu tư Trái phiếu phát triển Việt Nam VCAM-NH",
        order_type: "CTCP Quản lý Quỹ Đầu tư Chứng khoán Bản Việt",
        fund_code: "Sell",
        issuers: "mietnt",
        fluctuations: "20/12/2023- mietnt 00:00:00",
      },
    ];

    const handleSearch = (e) => {
      const formData = JSON.parse(JSON.stringify(formSearchData.value));
      console.log("formData: ", formData);
    };
    const handleCloseModal = () => {};

    return {
      userList,
      formSearchData,
      value1,
      tableHeader,
      userAction,
      loading,
      Search,
      tableData,
      rowDetail,
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
