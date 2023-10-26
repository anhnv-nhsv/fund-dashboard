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
import type { FormInstance } from "element-plus";
import { translate } from "@/core/helpers/i18n-translate";

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
  },
  components: { NhForm },
  setup(props, ctx) {
    const loading = ref(false);
    const ruleFormRef = ref<FormInstance>();
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

    const handleRequest = (formEl: FormInstance | undefined) => {};

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
