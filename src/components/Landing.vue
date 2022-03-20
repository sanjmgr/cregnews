<template>
    <div class="container mx-auto px-8 py-8">
        <div class="flex flex-col md:flex-row md:gap-16">
            <div class="divide-y rounded-md md:basis-1/2 lg:basis-2/5">
                <HashTag :tags="primaryTags" />
                <div v-if="headlines.length">
                    <NewsCard
                        v-for="(article, index) in headlines"
                        :key="article"
                        :article="article"
                        :type="shuffle[index]"
                    />
                </div>
            </div>
            <div class="md:basis-1/2 md:divide-y lg:basis-3/5">
                <HashTag class="hidden md:flex" :tags="secondaryTags" />
                <div class="flex flex-col md:gap-1 lg:flex-row lg:gap-16">
                    <div class="rounded-md lg:basis-1/2">
                        <NewsCard :article="tertiary[0]" type="tertiary" />
                        <NewsCard :article="secondary[0]" type="secondary" />
                    </div>
                    <div class="rounded-md lg:block lg:basis-1/2">
                        <NewsCard :article="secondary[1]" type="secondary" />
                        <NewsCard :article="tertiary[1]" type="tertiary" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { onMounted, ref } from '@vue/runtime-core'
import HashTag from './HashTag.vue'
import { articles, headlines } from '../assets/articles'
import { GET } from '../worker/Http'
import NewsCard from './NewsCard.vue'
import { chunkIntoN } from '../utility'

export default {
    setup() {
        const shuffle = ['primary', 'secondary', 'tertiary', 'primary', 'tertiary', 'secondary']

        const { 0: primary, 1: secondary, 2: tertiary } = chunkIntoN(articles, 3)

        const primaryTags = [
            {
                name: 'Popular',
                isPrimary: true,
            },
            {
                name: 'Hot',
                isPrimary: false,
            },
            {
                name: 'Trend',
                isPrimary: true,
            },
            {
                name: 'Entertain',
                isPrimary: false,
            },
        ]

        const secondaryTags = [
            {
                name: 'Health',
                isPrimary: true,
            },
            {
                name: 'Politic',
                isPrimary: true,
            },
            {
                name: 'Sports',
                isPrimary: false,
            },
            {
                name: 'Science',
                isPrimary: true,
            },
        ]

        return {
            primary,
            secondary,
            tertiary,
            primaryTags,
            secondaryTags,
            headlines,
            shuffle,
            headlines,
        }
    },
    components: { HashTag, NewsCard },
}
</script>

<style></style>
