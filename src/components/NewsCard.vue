<template>
    <div class="py-6">
        <Source :name="name" />
        <!-- main section -->
        <article class="mt-4 mb-3 flex flex-col">
            <h2 class="text-2xl font-bold">
                {{ title }}
            </h2>
            <div
                :class="[
                    'aspect-w-3 aspect-h-2 my-4',
                    type === 'tertiary' ? 'order-first md:hidden' : 'order-1',
                ]"
            >
                <img
                    :loading="index <= 1 ? 'eager' : 'lazy'"
                    class="rounded-2xl object-cover"
                    :src="urlToImage"
                    :alt="title"
                />
            </div>
            <p v-if="type === 'primary'" class="order-last">
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
    props: ['article', 'type', 'index'],
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
