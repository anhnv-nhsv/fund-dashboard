<template>
  <div class="card">
    <div class="card-header border-0 pt-6">
      <form class="form row" autoComplete="on" @submit.prevent="handleSearch">
        <div class="col-md-8 d-flex align-items-center position-relative my-1">
          <el-input
            autofocus
            v-model="formSearchData.name"
            size="large"
            :placeholder="translate('searchNameCode')"
            clearable
            :prefix-icon="Search"
          />
        </div>
        <div class="col-md-4 d-flex align-items-center position-relative my-2">
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
    <div class="card-body pt-0">
      <NHDatatable
        :table-header="tableHeader"
        :table-data="dataRequestFundInfor"
        :loading="loading"
        :pagination="pagination"
        userRole="all"
      >
        <template v-slot:fnd_full_cd="{ row }">
          <div v-if="row.fnd_full_cd === null">-</div>
          <div v-if="row.fnd_full_cd !== null">
            <router-link
              :to="{
                name: 'fund-infor-detail',
                query: {
                  fundCode: row.fnd_co_cd,
                },
              }"
            >
              {{ row.fnd_full_cd }}
            </router-link>
          </div>
        </template>
        <template v-slot:found_dt="{ row }">
          <div v-if="row.found_dt">
            {{ formatDate(row.found_dt) }}
          </div>
          <div v-if="row.found_dt === undefined">-</div>
        </template>
        <template v-slot:fnd_nm="{ row }">
          <div v-if="row.fnd_nm">
            {{ cleanFundname(row.fnd_nm) }}
          </div>
          <div v-if="row.fnd_nm === undefined">-</div>
        </template>
        <template v-slot:buy_min_amt="{ row }">
          <div v-if="row.buy_min_amt === null">-</div>
          <div v-if="row.buy_min_amt !== null">
            {{ row.buy_min_amt.toLocaleString() }}
          </div>
        </template>
        <template v-slot:nav="{ row }">
          <div v-if="row.nav === null">-</div>
          <div v-if="row.nav !== null">
            {{ row.nav.toLocaleString() }}
          </div>
        </template>
        <template v-slot:nav_upd_dt="{ row }">
          <div v-if="row.nav_upd_dt">
            {{ row.nav_upd_dt }}
          </div>
          <div v-if="row.nav_upd_dt === undefined">-</div>
        </template>
        <template v-slot:redemption_fee="{ row }">
          <div v-for="(item, index) in row.redemption_fee" :key="index">
            <div class="d-flex">
              <div v-if="item.holding_min === 0 || item.holding_min === 12">
                Từ tháng {{ item.holding_min }} - {{ item.holding_max }}:
              </div>
              <div v-if="item.holding_min === 24">
                Trên {{ item.holding_min }} tháng:
              </div>
              <div>&nbsp;{{ item.fee_percentage_text }}</div>
            </div>
          </div>
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
import { useFundInforStore } from "@/stores/fund-infor";

export default defineComponent({
  name: "fund-information",
  components: {
    NHDatatable,
  },
  setup() {
    const store = useFundInforStore();
    let pagination = ref();
    let dataRequestFundInfor = ref();
    const formSearchData = ref({
      name: "",
    });
    const tableHeader = ref([
      {
        label: "fundCode",
        prop: "fnd_full_cd",
        visible: true,
        fix: true,
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
        label: "Founded date",
        prop: "found_dt",
        visible: true,
      },
      {
        label: "Minimum amount (VND)",
        prop: "buy_min_amt",
        visible: true,
      },
      {
        label: "NAV",
        prop: "nav",
        visible: true,
      },
      {
        label: "Updated nav date",
        prop: "nav_upd_dt",
        visible: true,
      },
      {
        label: "redemption fee (%)",
        prop: "redemption_fee",
        visible: true,
      },
    ]);
    const loading = ref<boolean>(false);

    const getRequestFundInfor = async (name?: string) => {
      loading.value = true;
      await store.getFundInforList({
        params: {
          name: name ? name : "",
        },
      });

      const requestPageResponse = JSON.parse(
        JSON.stringify(store.fundInforList)
      );

      dataRequestFundInfor.value = formatDataGetFund(requestPageResponse.data);
      loading.value = false;
    };

    const formatDataGetFund = (items) => {
      if (items.length > 0) {
        return items.map((item) => {
          return {
            ...item,
            redemption_fee: formatRedemption(item.redemption_fee),
          };
        });
      }
    };

    const formatRedemption = (item) => {
      const formattedJsonString = JSON.parse(item);
      return formattedJsonString;
    };

    const handleSearch = () => {
      const formData = JSON.parse(JSON.stringify(formSearchData.value));
      getRequestFundInfor(formData.name ? formData.name : "");
    };

    const formatDate = (val) => {
      const year = val.substring(0, 4);
      const month = val.substring(4, 6);
      const day = val.substring(6, 8);

      // Create the formatted date string
      const formattedDate = day + "-" + month + "-" + year;
      return formattedDate;
    };

    const cleanFundname = (name) => {
      // eslint-disable-next-line no-useless-escape
      let cleanUrl = name.replace(/^\"|\"$/g, "");

      return cleanUrl;
    };

    onBeforeMount(() => {
      getRequestFundInfor();
    });

    return {
      formSearchData,
      tableHeader,
      loading,
      dataRequestFundInfor,
      pagination,
      Search,
      translate,
      formatDate,
      handleSearch,
      cleanFundname,
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
