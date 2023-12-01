<template>
  <div
    class="modal fade"
    id="kt_fund_declaration_action_modal"
    ref="fundDeclarationModalRef"
    tabindex="-1"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered mw-800px">
      <div class="modal-content">
        <div class="modal-header">
          <h2 class="fw-bolder" v-if="action === 'add'">Add Funds</h2>
          <h2 class="fw-bolder" v-else>Edit Funds</h2>
          <div
            id="kt_customer_export_close"
            data-bs-dismiss="modal"
            class="btn btn-icon btn-sm btn-active-icon-primary"
          >
            <span class="svg-icon svg-icon-1">
              <inline-svg src="media/icons/duotune/arrows/arr061.svg" />
            </span>
          </div>
        </div>
        <div class="modal-body scroll-y mx-5 mx-xl-5">
          <NhForm>
            <template v-slot:customForm>
              <el-form
                ref="ruleFormRef"
                :model="fundForm"
                label-width="160px"
                :rules="rules"
              >
                <el-form-item label="Fund code" prop="fundCode">
                  <el-input
                    v-model="fundForm.fundCode"
                    placeholder="Fund code"
                    clearable
                  />
                </el-form-item>
                <el-form-item label="Fund name" prop="fundName">
                  <el-input
                    v-model="fundForm.fundName"
                    placeholder="Fund name"
                    clearable
                  />
                </el-form-item>
                <el-form-item label="Company name" prop="companyName">
                  <el-input
                    v-model="fundForm.companyName"
                    placeholder="Company name"
                    clearable
                  />
                </el-form-item>
                <el-form-item>
                  <el-checkbox
                    v-model="fundForm.isSell"
                    label="Sell"
                    size="large"
                  />
                </el-form-item>
              </el-form>
            </template>
          </NhForm>
        </div>
        <div class="modal-footer">
          <button
            type="reset"
            id="kt_modal_test_editor_cancel"
            class="btn btn-light me-3"
            data-bs-dismiss="modal"
          >
            {{ translate("cancelBtn") }}
          </button>
          <button
            class="btn btn-lg btn-primary"
            type="submit"
            @click.prevent="handleRequest(ruleFormRef)"
          >
            <span v-if="!loading" class="indicator-label">
              {{ translate("submitBtn") }}
              <span class="svg-icon svg-icon-3 ms-2 me-0">
                <inline-svg src="media/icons/duotune/arrows/arr064.svg" />
              </span>
            </span>
            <span v-if="loading" class="indicator-progress">
              {{ translate("pleaseWait") }}
              <span
                class="spinner-border spinner-border-sm align-middle ms-2"
              ></span>
            </span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref, watch } from "vue";
import NhForm from "@/components/nh-forms/NHForm.vue";
import Swal from "sweetalert2/dist/sweetalert2.js";
import type { FormInstance } from "element-plus";
import { hideModal } from "@/core/helpers/dom";
import { translate } from "@/core/helpers/i18n-translate";
import { useFundDeclarationStore } from "@/stores/fund-declaration";

export default defineComponent({
  name: "fund-category-modal",
  props: {
    action: { type: String, default: () => "add", required: false },
    data: {
      type: Object,
      default: () => {
        return {};
      },
      required: true,
    },
    submitSearch: {
      type: Function,
    },
  },
  components: { NhForm },
  setup(props, ctx) {
    const loading = ref(false);
    const ruleFormRef = ref<FormInstance>();
    const store = useFundDeclarationStore();
    const fundDeclarationModalRef = ref<null | HTMLElement>(null);

    const fundForm = ref({
      id: undefined,
      fundCode: "",
      fundName: "",
      companyName: "",
      isSell: false,
    });
    const rules = reactive({
      fundCode: [
        {
          required: true,
          message: translate("requiredField"),
          trigger: "blur",
        },
      ],
      fundName: [
        {
          required: true,
          message: translate("requiredField"),
          trigger: "blur",
        },
      ],
      companyName: [
        {
          required: true,
          message: translate("requiredField"),
          trigger: "blur",
        },
      ],
    });

    watch(
      () => props.data,
      (newData) => {
        const data = JSON.parse(JSON.stringify(newData));
        fundForm.value = {
          id: data.id,
          fundCode: data.fundCode,
          fundName: data.fundName,
          companyName: data.companyName,
          isSell: data.isSell === "stopped" ? false : true,
        };
      }
    );

    const handleRequest = (formEl: FormInstance | undefined) => {
      const today = new Date();
      const date =
        today.getDate() +
        "-" +
        (today.getMonth() + 1) +
        "-" +
        today.getFullYear();
      const currentSeconds = today.getSeconds();

      const formattedSeconds =
        currentSeconds < 10 ? "0" + currentSeconds : currentSeconds;

      const time =
        today.getHours() + ":" + today.getMinutes() + ":" + formattedSeconds;
      const dateTime = date + " " + time;

      const seconds = new Date().getTime();

      loading.value = true;
      if (!formEl) return;
      formEl.validate(async (valid, fields) => {
        if (valid) {
          const rawForm = JSON.parse(JSON.stringify(fundForm.value));

          const formData = {
            fnd_co_cd_p: rawForm.fundCode,
            fnd_nm_p: rawForm.fundName,
            fnd_co_nm_p: rawForm.companyName,
            fnd_status_p: rawForm.isSell === true ? "sell" : "stopped",
            created_at_p: dateTime,
          };

          if (props.action === "add") {
            const result = await store.createFund({
              ...formData,
              found_value_p: seconds,
            });
            if (result.data.success === true) {
              Swal.fire({
                position: "center",
                icon: "success",
                title: translate("successfully"),
                showConfirmButton: false,
                timer: 1000,
              }).then(() => {
                ctx.emit("submitSearch");
                hideModal(fundDeclarationModalRef.value);
              });
            } else {
              Swal.fire({
                position: "center",
                icon: "error",
                title: result.data.mess,
                showConfirmButton: false,
                timer: 1000,
              });
            }
          } else {
            const result = await store.updateFund(formData);
            if (result.data.success === true) {
              Swal.fire({
                position: "center",
                icon: "success",
                title: translate("successfully"),
                showConfirmButton: false,
                timer: 1000,
              }).then(() => {
                ctx.emit("submitSearch");
                hideModal(fundDeclarationModalRef.value);
              });
            } else {
              Swal.fire({
                position: "center",
                icon: "error",
                title: result.data.mess,
                showConfirmButton: false,
                timer: 1000,
              });
            }
          }
        } else {
          console.log("error submit!", fields);
        }
      });
      loading.value = false;
    };

    return {
      fundForm,
      ruleFormRef,
      rules,
      loading,
      fundDeclarationModalRef,
      handleRequest,
      translate,
    };
  },
});
</script>

<style scoped lang="scss">
.btn-upload {
  border-right: 0;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  border-collapse: inherit !important;
  background-color: #009ef7 !important;
  color: #fff !important;
}
</style>
