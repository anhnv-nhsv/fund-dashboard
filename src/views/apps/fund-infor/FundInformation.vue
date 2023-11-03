<template>
  <div class="card">
    <div class="card-header border-0 pt-6">
      <div>
        <form class="form" autoComplete="on">
          <div class="row">
            <div
              class="col-md-10 d-flex align-items-center position-relative my-1"
            >
              <el-input
                autofocus
                v-model="formSearchData.name"
                size="large"
                placeholder="Tìm kiếm tên"
                clearable
                :prefix-icon="Search"
              />
            </div>
            <div
              class="col-md-2 d-flex align-items-center position-relative my-2"
            >
              <button
                :data-kt-indicator="false ? 'on' : null"
                type="submit"
                class="btn btn-primary"
                @click="handleSearch"
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
        :table-data="tableData"
        :loading="loading"
        :show-overflow-tooltip="false"
      >
        <template v-slot:name="{ row }">
          <router-link
            :to="{
              name: 'fund-infor-detail',
              params: {
                id: row.id,
              },
            }"
          >
            {{ row.name }}
          </router-link>
        </template>
      </NHDatatable>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { Search } from "@element-plus/icons-vue";
import { translate } from "@/core/helpers/i18n-translate";
import NHDatatable from "@/components/nh-datatable/NHDatatable.vue";

export default defineComponent({
  name: "fund-information",
  components: {
    NHDatatable,
  },
  setup() {
    const formSearchData = ref({
      name: "",
    });
    const tableHeader = ref([
      {
        label: "Fund",
        prop: "name",
        visible: true,
        fix: true,
      },
      {
        label: "Fund name",
        prop: "vsd",
        visible: true,
      },
      {
        label: "Fund company",
        prop: "date",
        visible: true,
      },
      {
        label: "Founded date",
        prop: "order_type",
        visible: true,
      },
      {
        label: "Minimum amount (VND)",
        prop: "fund_code",
        visible: true,
      },
      {
        label: "NAV",
        prop: "issuers",
        visible: true,
      },
      {
        label: "Updated nav date",
        prop: "fluctuations",
        visible: true,
      },
      {
        label: "redemption fee (%)",
        prop: "amount",
        visible: true,
      },
    ]);
    const loading = ref<boolean>(false);
    const tableData = [
      {
        id: 1,
        vsd: "Quỹ Đầu tư Trái phiếu phát triển Việt Nam VCAM-NH",
        name: "VCAM-NH VBAH",
        date: "CTCP Quản lý Quỹ Đầu tư Chứng khoán Bản Việt",
        order_type: "12/10/2019",
        fund_code: "1,000,000",
        issuers: "99,888,000,200",
        fluctuations: "12/10/2023",
        amount: "0.05%",
      },
      {
        id: 2,
        vsd: "Quỹ Đầu tư Trái phiếu phát triển Việt Nam VCAM-NH",
        name: "VCAM-NH VBAH",
        date: "CTCP Quản lý Quỹ Đầu tư Chứng khoán Bản Việt",
        order_type: "12/10/2019",
        fund_code: "1,000,000",
        issuers: "99,888,000,200",
        fluctuations: "12/10/2023",
        amount: "0.05%",
      },
      {
        id: 3,
        vsd: "Quỹ Đầu tư Trái phiếu phát triển Việt Nam VCAM-NH",
        name: "VCAM-NH VBAH",
        date: "CTCP Quản lý Quỹ Đầu tư Chứng khoán Bản Việt",
        order_type: "12/10/2019",
        fund_code: "1,000,000",
        issuers: "99,888,000,200",
        fluctuations: "12/10/2023",
        amount: "0.05%",
      },
      {
        id: 4,
        vsd: "Quỹ Đầu tư Trái phiếu phát triển Việt Nam VCAM-NH",
        name: "VCAM-NH VBAH",
        date: "CTCP Quản lý Quỹ Đầu tư Chứng khoán Bản Việt",
        order_type: "12/10/2019",
        fund_code: "1,000,000",
        issuers: "99,888,000,200",
        fluctuations: "12/10/2023",
        amount: "0.05%",
      },
    ];

    const handleSearch = () => {
      const formData = JSON.parse(JSON.stringify(formSearchData.value));
      console.log("formData: ", formData);
    };

    return {
      formSearchData,
      tableHeader,
      loading,
      Search,
      tableData,
      translate,
      handleSearch,
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
