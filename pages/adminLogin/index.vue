<script setup lang="ts">
import { onMounted } from 'vue'
import { APIStore } from '~/stores/apiService'
const store = APIStore()
import { showToast, openDialog, showLoading, hideLoading } from '~/stores/eventBus'

onMounted(() => {
  console.log('adminLogin mounted')
  // showLoading()
})
</script>
<template>
  <div>adminLogin</div>
</template>
