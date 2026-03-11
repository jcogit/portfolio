<template>
    <div class="flex flex-wrap gap-6 justify-center xl:justify-start">

        <InfoCard class="flex-[1_1_180px] max-w-45" label="Frameworks" variant="info-left" icon="framework"
            :useDarkShadow="true" />

        <InfoCard class="flex-[1_1_180px] max-w-45" label="Performance" variant="info-right" icon="performance"
            :useDarkShadow="true" />

        <InfoCard class="flex-[1_1_180px] max-w-45" label="Responsive" variant="info-left" icon="responsive"
            :useDarkShadow="true" />

        <InfoCard class="flex-[1_1_180px] max-w-45" label="Learning" variant="info-right" icon="learning"
            :useDarkShadow="true" />

        <CreditCard class="flex-[1_1_385px] max-w-96.25" profileSrc="src/assets/profile.png"
            topLine="Software / Web Developer" secondLine="Multimedia Designer" middleText="JANINA-CINDY-ORTELT"
            bottomFirstLeft="Status" bottomFirstRight="Active" bottomSecondLeft="Location" bottomSecondRight="DK"
            :useDarkShadow="true" />

        <KnowledgeCard v-model="activeKnowledge" :knowledge="knowledgeData" :autoRotate="true" />

        <SkillCard :activeKnowledge="activeKnowledge" />

        <TimeLineCard class="w-300" />

    </div>
</template>


<script setup lang="ts">
import { ref } from 'vue'

import InfoCard from "../components/dashboard/InfoCard.vue"
import CreditCard from "../components/dashboard/CreditCard.vue"
import KnowledgeCard from "../components/dashboard/KnowledgeCard.vue"
import SkillCard from "../components/dashboard/SkillCard.vue"
import TimeLineCard from "../components/dashboard/TimeLineCard.vue"

import { knowledgeData } from "../data/knowledge"
import type { KnowledgeKey } from "../data/knowledge"


const firstItem = knowledgeData[0]

let initialKey: KnowledgeKey = 'frontend'

if (firstItem) {
    initialKey = firstItem.key
}

const activeKnowledge = ref<KnowledgeKey>(initialKey)

</script>

<style scoped></style>
