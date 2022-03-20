<template>
    <div class="flex gap-2">
        <div class="grid h-8 w-8 place-content-center rounded-full bg-[#E6E9ED] text-lg">D</div>
        <div class="text-lg">{{ name }}</div>
        <div class="grid place-content-center rounded-2xl px-2 text-sm ring-1 ring-[#848584]">
            Following
        </div>
    </div>
</template>

<script>
export default {
    props: ['name'],
}
</script>

<style></style>
