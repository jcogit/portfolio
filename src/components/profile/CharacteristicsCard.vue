<template>
    <BaseCard variant="info-left" :useDarkShadow="true" class="p-4">
        <h3 class="text-sm text-text-primary mb-4 text-left w-full uppercase">Characteristics</h3>
        <div class="flex flex-wrap gap-2">
            <Badge v-for="item in characteristics" :key="item" variant="cool">{{ item }}</Badge>
        </div>
    </BaseCard>
</template>

<script setup lang="ts">
import BaseCard from '../ui/BaseCard.vue'
import Badge from '../ui/BaseBadge.vue'
import { characteristics } from '../../data/characteristics'
</script>