<template>
  <div class="card">
    <div class="card-header border-0 pt-6">
      <div class="flex-column">
        <form class="form row" autoComplete="on">
          <div class="row">
            <div
              class="col-md-3 d-flex align-items-center position-relative my-1"
            >
              <el-input
                autofocus
                size="large"
                placeholder="Tìm kiếm tên"
                clearable
                :prefix-icon="Search"
              />
            </div>
            <div
              class="col-md-3 d-flex align-items-center position-relative my-1"
            >
              <el-input
                autofocus
                size="large"
                placeholder="Tìm kiếm VSD trading code"
                clearable
                :prefix-icon="Search"
              />
            </div>
            <div
              class="col-md-3 d-flex align-items-center position-relative my-1"
            >
              <el-input
                autofocus
                size="large"
                placeholder="Tìm kiếm mã CCQ"
                clearable
                :prefix-icon="Search"
              />
            </div>
            <div
              class="col-md-3 d-flex align-items-center position-relative my-1"
            >
              <el-input
                autofocus
                size="large"
                :placeholder="translate('searchInput')"
                clearable
                :prefix-icon="Search"
              />
            </div>
          </div>
          <div class="row my-6">
            <div
              class="col-md-3 d-flex align-items-center position-relative my-1"
            >
              <el-select placeholder="Tổ chức phát hành" size="large">
                <el-option :label="translate('all')" value />
                <el-option :label="translate('enable')" value="1" />
                <el-option :label="translate('disable')" value="0" />
              </el-select>
            </div>
            <div
              class="col-md-3 d-flex align-items-center position-relative my-1"
            >
              <el-select placeholder="Trạng thái thanh toán" size="large">
                <el-option :label="translate('all')" value />
                <el-option :label="translate('enable')" value="1" />
                <el-option :label="translate('disable')" value="0" />
              </el-select>
            </div>
            <div
              class="col-md-3 d-flex align-items-center position-relative my-1"
            >
              <el-select placeholder="Trạng thái lệnh" size="large">
                <el-option :label="translate('all')" value />
                <el-option :label="translate('enable')" value="1" />
                <el-option :label="translate('disable')" value="0" />
              </el-select>
            </div>
            <div
              class="col-md-3 d-flex align-items-center position-relative my-1"
            >
              <el-select placeholder="Loại lệnh" size="large">
                <el-option :label="translate('all')" value />
                <el-option :label="translate('enable')" value="1" />
                <el-option :label="translate('disable')" value="0" />
              </el-select>
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
        :show-overflow-tooltip="true"
      >
        <template v-slot:name="{ row }">
          <!-- <router-link :to="`/app/fund-certificates/${row.id}`">{{
            row.name
          }}</router-link> -->
          <router-link
            :to="{
              name: 'FundDetails',
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
  name: "apps-fund-management",
  components: {
    NHDatatable,
  },
  setup() {
    const tableHeader = ref([
      {
        label: "Full name",
        prop: "name",
        visible: true,
        width: "260",
      },
      {
        label: "VSD Trading code",
        prop: "vsd",
        visible: true,
      },
      {
        label: "Date",
        prop: "date",
        visible: true,
        width: 300,
      },
      {
        label: "Order type",
        width: 150,
        prop: "order_type",
        visible: true,
      },
      {
        label: "Fund code",
        width: 150,
        prop: "fund_code",
        visible: true,
      },
      {
        label: "Tổ chức phát hành",
        width: 150,
        prop: "issuers",
        visible: true,
      },
      {
        label: "Lãi/lỗ",
        width: 150,
        prop: "fluctuations",
        visible: true,
      },
      {
        label: "Amount",
        width: 150,
        prop: "amount",
        visible: true,
      },
      {
        label: "Quantity",
        width: 150,
        prop: "quantity",
        visible: true,
      },
      {
        label: "NAV/Share",
        width: 150,
        prop: "nav_share",
        visible: true,
      },
      {
        label: "Payment status",
        width: 150,
        prop: "payment_status",
        visible: true,
      },
      {
        label: "Order status",
        width: 150,
        prop: "order_status",
        visible: true,
      },
      {
        label: "Pre-balance",
        width: 150,
        prop: "pre_balance",
        visible: true,
      },
      {
        label: "Post balance",
        width: 150,
        prop: "post_balance",
        visible: true,
      },
    ]);
    const loading = ref<boolean>(false);
    const userList = ref([]);
    const tableData = [
      {
        id: 1,
        vsd: "039FIC0001",
        name: "Nguyen A",
        date: "04/10/2023 00:00:00",
        order_type: "Buy",
        fund_code: "VCAM-NH VABF",
        issuers: "Viet Capital",
        fluctuations: "",
        amount: "1,000,000,000",
        quantity: "",
        nav_share: "",
        payment_status: "Successful",
        order_status: "Pending",
        pre_balance: "10,986.35",
        post_balance: "",
      },
      {
        id: 2,
        vsd: "039FIC0001",
        name: "Nguyen A",
        date: "02/10/2023 00:00:00",
        order_type: "Buy",
        fund_code: "VCAM-NH VABF",
        issuers: "Viet Capital",
        fluctuations: "1,000,000,000",
        amount: "1,000,000,000",
        quantity: "986.35",
        nav_share: "11,000.25",
        payment_status: "Successful",
        order_status: "Successful",
        pre_balance: "10,000",
        post_balance: "10,986.35",
      },
      {
        id: 3,
        vsd: "039FIC0002",
        name: "Tran BB",
        date: "02/10/2023 00:00:00",
        order_type: "Sell",
        fund_code: "VCAM-NH VABF",
        issuers: "Viet Capital",
        fluctuations: "",
        amount: "1,000,000",
        quantity: "986.35",
        nav_share: "11,000.35",
        payment_status: "Successful",
        order_status: "Successful",
        pre_balance: "10,000",
        post_balance: "9,013.65",
      },
      {
        id: 4,
        vsd: "039FIC0001",
        name: "Nguyen A",
        date: "02/10/2023 00:00:00",
        order_type: "Buy",
        fund_code: "VCAM-NH VABF 1",
        issuers: "Viet Capital",
        fluctuations: "1,000,000,000",
        amount: "1,000,000,000",
        quantity: "1,000.25",
        nav_share: "11,000.35",
        payment_status: "Successful",
        order_status: "Successful",
        pre_balance: "0",
        post_balance: "1,000.25",
      },
    ];

    const handleSearch = (e) => {
      e.prevenDefault();
    };

    return {
      userList,
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
