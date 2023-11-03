<template>
  <div class="card">
    <div class="p-8">
      <div class="text-center fs-3 fw-bolder">
        VCAM-NH VABF-Quỹ Đầu tư Trái phiếu phát triển Việt Nam VCAM-NH
      </div>
      <div class="container-fund-detail">
        <div class="px-12">
          <div class="px-2 row">
            <div class="col-6 line py-4">
              <div class="d-flex mt-4 align-items-center">
                <div class="fs-5 fw-bolder" style="min-width: 200px">
                  Fund code
                </div>
                <span class="fs-5 text-muted">VCAM-NH VABF</span>
              </div>
              <div class="d-flex mt-4 align-items-center">
                <div class="fs-5 fw-bolder" style="min-width: 200px">
                  Fund name
                </div>
                <span class="fs-5 text-muted"
                  >Quỹ Đầu tư Trái phiếu phát triển Việt Nam VCAM-NH</span
                >
              </div>
              <div class="d-flex mt-4 align-items-center">
                <div class="fs-5 fw-bolder" style="min-width: 200px">
                  Company name
                </div>
                <span class="fs-5 text-muted"
                  >CTCP Quản lý Quỹ Đầu tư Chứng khoán Bản Việt</span
                >
              </div>
              <div class="d-flex mt-4 align-items-center">
                <div class="fs-5 fw-bolder" style="min-width: 200px">
                  Strategy
                </div>
                <span class="fs-5 text-muted"
                  >Quỹ áp dụng chiến lược đa dạng hóa danh mục và đầu tư chọn
                  lọc nhắm hướng đến mục tiêu ...</span
                >
              </div>
              <div class="d-flex mt-4 align-items-center">
                <div class="fs-5 fw-bolder" style="min-width: 200px">
                  Trading date
                </div>
                <span class="fs-5 text-muted">Daily</span>
              </div>
              <div class="d-flex mt-4 align-items-center">
                <div class="fs-5 fw-bolder" style="min-width: 200px">
                  Closing time
                </div>
                <span class="fs-5 text-muted">14:45:00 daily</span>
              </div>
              <div class="d-flex mt-4 align-items-center">
                <div class="fs-5 fw-bolder" style="min-width: 200px">
                  Subsciption fee
                </div>
                <span class="fs-5 text-muted">0.05%</span>
              </div>
            </div>
            <div class="col-6 py-4">
              <div class="d-flex mt-4 align-items-center">
                <div class="fs-5 fw-bolder" style="min-width: 200px">
                  Buy minmum amount
                </div>
                <span class="fs-5 text-muted">1,000,000 VND</span>
              </div>
              <div class="d-flex mt-4 align-items-center">
                <div class="fs-5 fw-bolder" style="min-width: 200px">NAV</div>
                <span class="fs-5 text-muted">99,888,000,200 VND</span>
              </div>
              <div class="d-flex mt-4 align-items-center">
                <div class="fs-5 fw-bolder" style="min-width: 200px">
                  Updated NAV date
                </div>
                <span class="fs-5 text-muted">12/10/2023</span>
              </div>
              <div class="d-flex mt-4 align-items-center">
                <div class="fs-5 fw-bolder" style="min-width: 200px">
                  Growth in month
                </div>
                <span class="fs-5 text-danger">-2.75%</span>
              </div>
              <div class="d-flex mt-4 align-items-center">
                <div class="fs-5 fw-bolder" style="min-width: 200px">
                  Growth in 6M
                </div>
                <span class="fs-5 text-success">10.75%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { Search } from "@element-plus/icons-vue";

export default defineComponent({
  name: "fund-information-details",
  components: {},
  setup() {
    return {};
  },
});
</script>

<style scoped>
.container-fund-detail {
  border: 1px solid #d4d3d3;
  margin-top: 12px;
}

.line {
  border-right: 1px solid #d4d3d3;
  position: relative;
  right: 18px;
}
.transaction-right {
  /* flex: 1; */
}
</style>
