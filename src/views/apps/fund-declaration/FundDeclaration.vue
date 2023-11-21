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
              :range-separator="translate('to')"
              :start-placeholder="translate('startDate')"
              :end-placeholder="translate('endDate')"
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
            @click="addFundDeclaration"
          >
            <KTIcon icon-name="plus" icon-class="fs-2" />
            {{ translate("addBtn") }}
          </button>
        </div>
      </div>
    </div>
    <div class="card-body pt-0">
      <NHDatatable
        :table-header="tableHeader"
        :table-data="dataRequestFundInfor"
        :loading="loading"
      >
        <template v-slot:actionColumn>
          <el-table-column
            header-align="center"
            class-name="text-center"
            :label="translate('action')"
          >
            <template #default="scope">
              <div class="change-status">
                <el-button
                  size="small"
                  type="default"
                  data-bs-toggle="modal"
                  data-bs-target="#kt_fund_declaration_action_modal"
                  @click.prevent="editFundDeclaration(scope.row)"
                >
                  {{ translate("editBtn") }}
                </el-button>
              </div>
            </template>
          </el-table-column>
        </template>
      </NHDatatable>
    </div>
  </div>
  <FundDeclarationModal
    @on-close="handleCloseModal"
    :data="rowDetail"
    :action="fundDeclaAction"
  />
</template>

<script lang="ts">
import { defineComponent, onBeforeMount, ref } from "vue";
import { Search } from "@element-plus/icons-vue";
import { translate } from "@/core/helpers/i18n-translate";
import FundDeclarationModal from "@/components/modals/forms/FundDeclarationModal.vue";
import NHDatatable from "@/components/nh-datatable/NHDatatable.vue";
import { useFundInforStore } from "@/stores/fund-infor";

export default defineComponent({
  name: "apps-declaration-management",
  components: {
    NHDatatable,
    FundDeclarationModal,
  },
  setup() {
    const store = useFundInforStore();
    const formSearchData = ref({
      name: "",
      date_search: [],
    });
    const tableHeader = ref([
      {
        label: "Order",
        prop: "seq_no",
        visible: true,
      },
      {
        label: "Date",
        prop: "vsd",
        visible: true,
      },
      {
        label: "Fund",
        prop: "fnd_full_cd",
        visible: true,
      },
      {
        label: "Fund name",
        prop: "fnd_nm",
        visible: true,
      },
      {
        label: "Fund company",
        prop: "fnd_co_nm",
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
    let pagination = ref();
    let dataRequestFundInfor = ref();
    const userList = ref([]);
    const rowDetail = ref();
    let fundDeclaAction = ref("");

    const getRequestFundInfor = async (
      pageNo?: number,
      name?: string,
      pageSize = "10"
    ) => {
      loading.value = true;
      await store.getFundInforList({
        params: {
          name: name ? name : "",
          pageNo: pageNo,
          pageSize: pageSize,
        },
      });

      const requestPageResponse = JSON.parse(
        JSON.stringify(store.fundInforList)
      );

      dataRequestFundInfor.value = requestPageResponse.data;

      pagination.value = {
        totalPages: requestPageResponse.totalPages,
        pageNo: requestPageResponse.pageNo,
        pageSize: requestPageResponse.pageSize,
        totalCount: requestPageResponse.totalCount,
        currentCount: requestPageResponse.currentCount,
      };
      loading.value = false;
    };

    const handleSearch = (e) => {
      const formData = JSON.parse(JSON.stringify(formSearchData.value));
      console.log("formData: ", formData);
    };
    const addFundDeclaration = () => {
      fundDeclaAction.value = "add";
    };
    const editFundDeclaration = (val?: object | undefined) => {
      fundDeclaAction.value = "edit";
    };

    const handleCloseModal = () => {};

    onBeforeMount(() => {
      getRequestFundInfor(1);
    });
    return {
      userList,
      formSearchData,
      fundDeclaAction,
      tableHeader,
      loading,
      Search,
      dataRequestFundInfor,
      rowDetail,
      translate,
      handleSearch,
      handleCloseModal,
      editFundDeclaration,
      addFundDeclaration,
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
