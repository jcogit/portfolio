<template>
    <BaseCard variant="info-left" :useDarkShadow="true" class="p-4">
        <h3 class="text-sm text-text-primary mb-4 text-left w-full uppercase">
            Education
        </h3>

        <div class="flex flex-col gap-4 w-full">
            <div v-for="item in edu" :key="`${item.from}-${item.to}-${item.designation}`"
                class="flex gap-2 items-start w-full">
                <TextField label="From" :value="item.from.toString()" variant="dark"
                    :inputStyle="{ width: '50px', textAlign: 'center' }" />
                <TextField label="To" :value="item.to.toString()" variant="dark"
                    :inputStyle="{ width: '50px', textAlign: 'center' }" />
                <TextField label="Designation" :value="item.designation" variant="dark" class="flex-1"
                    :inputStyle="{ width: '100%' }" />
            </div>
        </div>
    </BaseCard>
</template>

<script setup lang="ts">
import BaseCard from '../ui/BaseCard.vue'
import TextField from '../ui/BaseTextField.vue'
import { education } from '../../data/education'

const edu = education
</script>

<style scoped>
.flex-1 {
    flex: 1;
}

.text-field .readonly-input {
    box-sizing: border-box;
}
</style>