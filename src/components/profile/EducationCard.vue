<template>
    <BaseCard variant="info-left" :useDarkShadow="true" class="p-4">
        <h3 class="text-sm text-text-primary mb-4 text-left w-full uppercase">
            Education
        </h3>

        <div class="flex flex-col gap-4 w-full">
            <div v-for="item in edu" :key="`${item.from}-${item.to}-${item.designation}`" class="education-row w-full">
                <div class="date-row">
                    <TextField label="From" :value="item.from.toString()" variant="dark" class="date-field"
                        :inputStyle="{ width: '50px', textAlign: 'center' }" />
                    <TextField label="To" :value="item.to.toString()" variant="dark" class="date-field"
                        :inputStyle="{ width: '50px', textAlign: 'center' }" />
                </div>

                <TextField label="Designation" :value="item.designation" variant="dark" class="designation-field"
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

.education-row {
    display: flex;
    gap: 0.5rem;
    align-items: flex-start;
    width: 100%;
}

.date-row {
    display: flex;
    gap: 0.5rem;
}

.designation-field {
    flex: 1;
}

@media (max-width: 767px) {
    .education-row {
        flex-direction: column;
        gap: 0.375rem;
    }

    .date-row {
        width: 100%;
    }

    .designation-field {
        width: 100%;
    }
}
</style>