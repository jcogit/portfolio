<template>
  <div class="selection-field flex flex-col mb-2">
    <label class="text-xs text-text-muted">{{ label }}</label>
    <select :value="value" disabled class="readonly-select">
      <option :value="value">{{ value }}</option>
    </select>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  label: string
  value: string
}>()
</script>

<style scoped>
.readonly-select {
  background: rgba(var(--color-surface-primary-rgb), 0.2);
  border: 1px solid var(--color-stroke);
  border-radius: 4px;
  padding: 4px 6px;
  font-size: 12px;
  color: var(--color-text-primary);
  appearance: none;
}
</style>