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
              :placeholder="translate('searchFundName')"
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
        <template v-slot:fnd_status="{ row }">
          <div v-if="row.fnd_status === 'sell'">
            <div class="">Bán</div>
          </div>
          <div v-if="row.fnd_status === 'stopped'">
            <div class="">Dừng bán</div>
          </div>
        </template>
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
    :data="fundFormData"
    :action="fundDeclaAction"
    @submitSearch="handleSearch"
  />
</template>

<script lang="ts">
import { defineComponent, onBeforeMount, ref, watch } from "vue";
import { Search } from "@element-plus/icons-vue";
import { translate } from "@/core/helpers/i18n-translate";
import FundDeclarationModal from "@/components/modals/forms/FundDeclarationModal.vue";
import NHDatatable from "@/components/nh-datatable/NHDatatable.vue";
import { useFundDeclarationStore } from "@/stores/fund-declaration";

export default defineComponent({
  name: "apps-declaration-management",
  components: {
    NHDatatable,
    FundDeclarationModal,
  },
  setup() {
    const store = useFundDeclarationStore();
    const formSearchData = ref({
      name: "",
      date_search: [],
    });
    const tableHeader = ref([
      {
        label: "Order",
        prop: "id",
        visible: true,
      },
      {
        label: "Date",
        prop: "created_at",
        visible: true,
      },
      {
        label: "Fund-NHSV",
        prop: "fnd_co_cd",
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
        prop: "fnd_status",
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
    let dataRequestFundInfor = ref();
    const userList = ref([]);
    let fundDeclaAction = ref("");
    const fundFormData = ref({});
    let fromDate = ref();
    let toDate = ref();

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
      getRequestFundInfor(
        formData.name ? formData.name : "",
        fromDate.value,
        toDate.value
      );
    };
    const addFundDeclaration = () => {
      fundDeclaAction.value = "add";
      fundFormData.value = {
        fundCode: "",
        fundName: "",
        companyName: "",
        isSell: "sell",
      };
    };
    const editFundDeclaration = (val?: object | undefined) => {
      fundDeclaAction.value = "edit";
      const row = JSON.parse(JSON.stringify(val));

      fundFormData.value = {
        id: row.id,
        fundCode: row.fnd_co_cd,
        fundName: row.fnd_nm,
        companyName: row.fnd_co_nm,
        date: row.created_at,
        isSell: row.fnd_status,
      };
    };

    const handleCloseModal = () => {};

    onBeforeMount(() => {
      getRequestFundInfor();
    });

    return {
      userList,
      formSearchData,
      fundDeclaAction,
      tableHeader,
      loading,
      Search,
      dataRequestFundInfor,
      fundFormData,
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
