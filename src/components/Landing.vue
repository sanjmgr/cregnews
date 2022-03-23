<template>
    <div class="container mx-auto px-8 py-8 md:px-4">
        <div class="flex flex-row-reverse">
            <CommandPalette :articles="primary" />
        </div>
        <div class="flex flex-col justify-between md:flex-row md:gap-16">
            <div class="divide-y rounded-md md:basis-1/2 lg:basis-2/5">
                <HashTag :tags="tags_1" />
                <template v-if="isLoaded">
                    <NewsCard
                        v-for="(article, index) in primary"
                        :key="article"
                        :index="index"
                        :article="article"
                        :type="shuffle_1[index]"
                    />
                </template>
                <template v-else>
                    <SkeletonCard type="primary" />
                </template>
            </div>
            <div class="md:basis-1/2 md:divide-y lg:basis-3/5">
                <HashTag class="hidden md:flex" :tags="tags_2" />
                <div class="flex flex-col md:gap-1 lg:flex-row lg:gap-16">
                    <div class="rounded-md lg:basis-1/2">
                        <template v-if="isLoaded">
                            <NewsCard
                                v-for="(article, index) in secondary"
                                :key="article"
                                :index="index"
                                :article="article"
                                :type="shuffle_2[index]"
                            />
                        </template>
                        <template v-else>
                            <SkeletonCard type="tertiary" />
                            <SkeletonCard type="secondary" />
                        </template>
                    </div>
                    <div class="rounded-md lg:block lg:basis-1/2">
                        <template v-if="isLoaded">
                            <NewsCard
                                v-for="(article, index) in tertiary"
                                :key="article"
                                :index="index"
                                :article="article"
                                :type="shuffle_3[index]"
                            />
                        </template>
                        <template v-else>
                            <SkeletonCard type="secondary" />
                            <SkeletonCard type="tertiary" />
                        </template>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import HashTag from './HashTag.vue'
import { articles } from '../assets/articles'
import NewsCard from './NewsCard.vue'
import SkeletonCard from './SkeletonCard.vue'
import CommandPalette from './CommandPalette.vue'
import { onMounted, ref, Suspense } from 'vue'

import { chunkIntoN, shuffle_1, shuffle_2, shuffle_3, tags_1, tags_2 } from '../utility'

export default {
    setup() {
        const { 0: primary, 1: secondary, 2: tertiary } = chunkIntoN(articles, 3)
        const isLoaded = ref(false)

        onMounted(() => {
            setTimeout(() => {
                isLoaded.value = true
                console.log('Here time out...')
            }, 5000)
        })

        return {
            primary,
            secondary,
            tertiary,
            shuffle_1,
            shuffle_2,
            shuffle_3,
            tags_1,
            tags_2,
            isLoaded,
        }
    },
    components: { Suspense, SkeletonCard, HashTag, NewsCard, CommandPalette },
}
</script>
