<template>
    <div class="py-6">
        <div class="flex items-center gap-2">
            <div class="h-8 w-8 animate-pulse rounded-full bg-[#E6E9ED]"></div>
            <div class="h-6 w-[25%] animate-pulse rounded-md bg-[#E6E9ED]"></div>
            <div class="h-6 w-[20%] animate-pulse rounded-2xl bg-[#E6E9ED]"></div>
        </div>
        <article class="mt-4 mb-3 flex flex-col">
            <div class="space-y-2">
                <div class="h-6 w-[72%] animate-pulse rounded-sm bg-[#E6E9ED]" />
                <div class="h-6 w-[80%] animate-pulse rounded-sm bg-[#E6E9ED]" />
                <div class="h-6 w-[90%] animate-pulse rounded-sm bg-[#E6E9ED]" />
                <div class="h-6 w-[40%] animate-pulse rounded-sm bg-[#E6E9ED]" />
            </div>
            <div
                :class="[
                    'aspect-w-3 aspect-h-2 my-4 animate-pulse rounded-2xl bg-[#E6E9ED]',
                    type === 'tertiary' ? 'order-first md:hidden' : 'order-1',
                ]"
            ></div>
            <div v-if="type === 'primary'" class="order-last space-y-2">
                <div class="h-5 w-[85%] animate-pulse rounded-sm bg-[#E6E9ED]" />
                <div class="h-5 w-[90%] animate-pulse rounded-sm bg-[#E6E9ED]" />
                <div class="h-5 w-[92%] animate-pulse rounded-sm bg-[#E6E9ED]" />
                <div class="h-5 w-[86%] animate-pulse rounded-sm bg-[#E6E9ED]" />
                <div class="h-5 w-[40%] animate-pulse rounded-sm bg-[#E6E9ED]" />
            </div>
        </article>

        <div class="flex items-center justify-between space-x-2 text-secondary">
            <div class="flex w-1/2 items-center gap-2">
                <div class="h-4 w-40 animate-pulse rounded-sm bg-[#E6E9ED]"></div>
                <div class="h-1 w-1 animate-pulse rounded-full bg-secondary" />
                <div class="h-4 w-40 animate-pulse rounded-sm bg-[#E6E9ED]"></div>
            </div>
            <div class="h-4 w-1/2 animate-pulse rounded-sm bg-[#E6E9ED]"></div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['type'],
}
</script>
