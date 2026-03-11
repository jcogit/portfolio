<template>
    <BaseCard variant="info-left" :useDarkShadow="true" class="p-4">
        <h3 class="text-sm text-text-primary mb-4 text-left w-full uppercase">General Information</h3>
        <div class="grid grid-cols-2 gap-4 w-full">
            <TextField v-for="item in info" :key="item.label" :label="item.label" :value="item.value" variant="dark" />
        </div>
    </BaseCard>
</template>

<script setup lang="ts">
import BaseCard from '../ui/BaseCard.vue'
import TextField from '../ui/BaseTextField.vue'
import { generalInfo } from '../../data/generalInfo'

const info = generalInfo
</script>