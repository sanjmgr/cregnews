<template>
    <div class="container mx-auto px-8 py-8 md:px-4">
        <CommandPalette :articles="primary" />
        <div class="flex flex-col justify-between md:flex-row md:gap-16">
            <div class="divide-y rounded-md md:basis-1/2 lg:basis-2/5">
                <HashTag :tags="tags_1" />
                <div v-if="primary.length">
                    <NewsCard
                        v-for="(article, index) in primary"
                        :key="article"
                        :article="article"
                        :type="shuffle_1[index]"
                    />
                </div>
            </div>
            <div class="md:basis-1/2 md:divide-y lg:basis-3/5">
                <HashTag class="hidden md:flex" :tags="tags_2" />
                <div class="flex flex-col md:gap-1 lg:flex-row lg:gap-16">
                    <div class="rounded-md lg:basis-1/2">
                        <NewsCard
                            v-for="(article, index) in secondary"
                            :key="article"
                            :article="article"
                            :type="shuffle_2[index]"
                        />
                    </div>
                    <div class="rounded-md lg:block lg:basis-1/2">
                        <NewsCard
                            v-for="(article, index) in tertiary"
                            :key="article"
                            :article="article"
                            :type="shuffle_3[index]"
                        />
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
import CommandPalette from './CommandPalette.vue'

import { chunkIntoN, shuffle_1, shuffle_2, shuffle_3, tags_1, tags_2 } from '../utility'

export default {
    setup() {
        const { 0: primary, 1: secondary, 2: tertiary } = chunkIntoN(articles, 3)

        return {
            primary,
            secondary,
            tertiary,
            shuffle_1,
            shuffle_2,
            shuffle_3,
            tags_1,
            tags_2,
        }
    },
    components: { HashTag, NewsCard, CommandPalette },
}
</script>
