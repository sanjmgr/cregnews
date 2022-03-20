<template>
    <div class="flex items-center justify-between space-x-2">
        <ul class="flex list-none space-x-4 py-4">
            <li
                :class="['font-bold', !tag.isPrimary && 'text-[#848584]']"
                v-for="tag in tags"
                :key="tag"
            >
                #{{ tag.name }}
            </li>
            <!-- <li class="font-bold text-[#848584]">#Weather</li>
            <li class="font-bold">#Entertain</li> -->
        </ul>
        <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
        >
            <path
                d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z"
            />
        </svg>
    </div>
</template>

<script>
export default {
    props: ['tags'],
    setup(props) {
        console.log(props.tags)
    },
}
</script>

<style></style>
