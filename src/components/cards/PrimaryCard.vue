<template>
    <div class="py-6">
        <Source :name="name" />
        <!-- main section -->
        <article class="mt-4 mb-3">
            <h2 class="object-cover text-2xl font-bold">
                {{ title }}
            </h2>
            <img class="aspect-image my-4 h-auto rounded-2xl" :src="urlToImage" :alt="title" />
            <section>
                <p>
                    {{ content }}
                </p>
                <!-- <br />
                <p>
                    Yet I didn't hesitate to mark myself down as Muslim on the census last month,
                    and after a few lapsed years I am starting this month of Ramadan alongside
                    millions of others around the world with the intention of feeling a bit more
                    spiritual.
                </p> -->
            </section>
        </article>

        <Readmore :min="readMin" :publishedAt="publishedDate" />
    </div>
</template>

<script>
import Source from '../Source.vue'
import Readmore from '../Readmore.vue'
import { computed } from '@vue/runtime-core'
import { readTime, dateFormat } from '../../utility'

export default {
    props: ['article'],
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

<style></style>
