<template>
    <div class="flex items-center justify-between space-x-2 text-secondary">
        <div class="flex items-center gap-2">
            <span>Readmore</span>
            <span class="h-1 w-1 rounded-full bg-secondary" />
            <span>{{ min || 5 }} min read</span>
        </div>
        <div>{{ publishedAt }}</div>
    </div>
</template>

<script>
export default {
    props: ['min', 'publishedAt'],
}
</script>

<style></style>
