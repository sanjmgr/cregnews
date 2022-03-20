<template>
    <div class="py-6">
        <Source :name="name" />
        <!-- main section -->
        <article class="mt-4 mb-3">
            <img
                v-if="type === 'tertiary'"
                class="aspect-image my-4 h-auto rounded-2xl object-cover md:hidden"
                :src="urlToImage"
                :alt="title"
            />
            <h2 class="text-2xl font-bold">
                {{ title }}
            </h2>
            <img
                v-if="type !== 'tertiary'"
                class="aspect-image my-4 h-auto rounded-2xl object-cover"
                :src="urlToImage"
                :alt="title"
            />
            <p v-if="type === 'primary'">
                {{ content }}
            </p>
        </article>

        <Readmore :min="readMin" :publishedAt="publishedDate" />
    </div>
</template>

<script>
import Source from './Source.vue'
import Readmore from './Readmore.vue'
import { computed } from '@vue/runtime-core'
import { readTime, dateFormat } from '../utility'

export default {
    props: ['article', 'type'],
    setup(props) {
        let {
            title,
            description,
            urlToImage,
            content,
            publishedAt,
            source: { name },
        } = props.article

        const readMin = computed(() => readTime(title, description, content))

        const publishedDate = computed(() => dateFormat(publishedAt))

        return { title, description, urlToImage, name, content, readMin, publishedDate }
    },
    components: { Source, Readmore },
}
</script>
