<template>
    <div class="container mx-auto px-8 py-8">
        <div class="flex flex-col md:flex-row md:gap-16">
            <div class="divide-y rounded-md md:basis-1/2 lg:basis-2/5">
                <HashTag :tags="primaryTags" />
                <PrimaryCard :article="primary[0]" />
            </div>
            <div class="md:basis-1/2 md:divide-y lg:basis-3/5">
                <HashTag class="hidden md:flex" :tags="secondaryTags" />
                <div class="flex flex-col md:gap-1 lg:flex-row lg:gap-16">
                    <div class="rounded-md lg:basis-1/2">
                        <TertiaryCard :article="tertiary[1]" />
                        <SecondaryCard :article="secondary[0]" />
                    </div>
                    <div class="rounded-md lg:block lg:basis-1/2">
                        <SecondaryCard :article="secondary[1]" />
                        <TertiaryCard :article="tertiary[1]" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import PrimaryCard from './cards/PrimaryCard.vue'
import SecondaryCard from './cards/SecondaryCard.vue'
import TertiaryCard from './cards/TertiaryCard.vue'
import HashTag from './HashTag.vue'
import { articles } from '../assets/articles'

export default {
    setup() {
        const chunkIntoN = (arr, n) => {
            const size = Math.ceil(arr.length / n)
            return Array.from({ length: n }, (_, i) => arr.slice(i * size, i * size + size))
        }

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

        return { primary, secondary, tertiary, primaryTags, secondaryTags }
    },
    components: { PrimaryCard, SecondaryCard, TertiaryCard, HashTag },
}
</script>

<style></style>
