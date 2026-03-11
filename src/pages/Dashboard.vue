<template>
    <div class="dashboard-wrap pb-6">

        <InfoCard class="info-card info-1" label="Frameworks" variant="info-left" icon="framework"
            :useDarkShadow="true" />

        <InfoCard class="info-card info-2" label="Performance" variant="info-right" icon="performance"
            :useDarkShadow="true" />

        <InfoCard class="info-card info-3" label="Responsive" variant="info-left" icon="responsive"
            :useDarkShadow="true" />

        <InfoCard class="info-card info-4" label="Learning" variant="info-right" icon="learning"
            :useDarkShadow="true" />

        <CreditCard class="credit-card" profileSrc="src/assets/profile.png" topLine="Software / Web Developer"
            secondLine="Multimedia Designer" middleText="JANINA-CINDY-ORTELT" bottomFirstLeft="Status"
            bottomFirstRight="Active" bottomSecondLeft="Location" bottomSecondRight="DK" :useDarkShadow="true" />

        <KnowledgeCard class="knowledge-card" v-model="activeKnowledge" :knowledge="knowledgeData" :autoRotate="true" />

        <SkillCard class="skill-card" :activeKnowledge="activeKnowledge" />

        <TimeLineCard class="timeline-card" />

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

<style scoped>
.dashboard-wrap {
    display: grid;
    grid-template-columns: repeat(3, minmax(10rem, 11.25rem));
    gap: 1.5rem;
    justify-content: center;
    justify-items: center;
}

.info-card {
    width: 100%;
    max-width: 11.25rem;
}

.credit-card {
    width: 100%;
    max-width: 24rem;
}

.knowledge-card,
.skill-card {
    width: 100%;
    max-width: 36.75rem;
}

.timeline-card {
    width: 100%;
    max-width: 36.75rem;
}

@media (max-width: 1639px) {

    .info-1 {
        grid-column: 1;
        grid-row: 1;
    }

    .info-2 {
        grid-column: 2;
        grid-row: 1;
    }

    .info-3 {
        grid-column: 3;
        grid-row: 1;
    }

    .info-4 {
        grid-column: 1;
        grid-row: 2;
    }

    .credit-card {
        grid-column: 2 / span 2;
        grid-row: 2;
        justify-self: start;
    }

    .knowledge-card {
        grid-column: 1 / span 3;
        grid-row: 3;
    }

    .skill-card {
        grid-column: 1 / span 3;
        grid-row: 4;
    }

    .timeline-card {
        grid-column: 1 / span 3;
        grid-row: 5;
        max-width: 36.75rem;
    }
}

@media (min-width: 1640px) {
    .dashboard-wrap {
        display: flex;
        flex-wrap: wrap;
        justify-content: flex-start;
    }

    .timeline-card {
        max-width: 75rem;
    }
}

@media (max-width: 767px) {
    .dashboard-wrap {
        grid-template-columns: repeat(2, minmax(8.75rem, 11.25rem));
    }

    .knowledge-card,
    .skill-card,
    .timeline-card {
        max-width: 100%;
    }

    .info-1 {
        grid-column: 1;
        grid-row: 1;
    }

    .info-2 {
        grid-column: 2;
        grid-row: 1;
    }

    .info-3 {
        grid-column: 1;
        grid-row: 2;
    }

    .info-4 {
        grid-column: 2;
        grid-row: 2;
    }

    .credit-card,
    .knowledge-card,
    .skill-card,
    .timeline-card {
        grid-column: 1 / span 2;
        justify-self: stretch;
    }

    .credit-card {
        grid-row: 3;
    }

    .knowledge-card {
        grid-row: 4;
    }

    .skill-card {
        grid-row: 5;
    }

    .timeline-card {
        grid-row: 6;
    }
}
</style>
