<template>
    <button
        @click="handleIsOpen"
        class="cursor-pointer bg-white hover:ring-slate-300 md:w-72 md:rounded-lg md:shadow-md md:ring-1 md:ring-black/5 md:focus:outline-none md:focus:ring-2 md:focus:ring-sky-500"
    >
        <div class="flex h-12 items-center justify-between px-4">
            <div class="flex gap-3">
                <SearchIcon class="h-6 w-6 text-gray-500" />
                <span class="hidden text-gray-400 md:block"> Quick search... </span>
            </div>
            <kbd
                class="hidden whitespace-nowrap font-poppins font-semibold dark:text-slate-500 md:inline-block"
            >
                <abbr title="Control" class="text-slate-300 no-underline dark:text-slate-500">
                    Ctrl
                </abbr>
                <abbr class="text-slate-500">K</abbr>
            </kbd>
        </div>
    </button>

    <TransitionRoot :show="isOpen" as="template">
        <Dialog @close="setIsOpen" class="fixed inset-0 overflow-y-auto p-4 pt-[25vh] font-poppins">
            <TransitionChild
                enter=" ease-out duration-300"
                enter-from="opacity-0"
                enter-to="opacity-100"
                leave="ease-in duration-200"
                leave-from="opacity-100"
                leave-to="opacity-0"
            >
                <DialogOverlay class="fixed inset-0 bg-gray-500/75" />
            </TransitionChild>
            <TransitionChild
                enter=" ease-out duration-300"
                enter-from="opacity-0 scale-95"
                enter-to="opacity-100 scale-100"
                leave="ease-in duration-200"
                leave-from="opacity-100 scale-100"
                leave-to="opacity-0 scale-95"
            >
                <Combobox
                    @change="handleIsOpen"
                    as="div"
                    class="relative mx-auto max-w-xl divide-y divide-gray-100 overflow-hidden rounded-xl bg-white shadow-2xl ring-1 ring-black/5"
                >
                    <div class="flex items-center px-4">
                        <SearchIcon class="h-6 w-6 text-gray-500" />
                        <ComboboxInput
                            @change="query = $event.target.value"
                            class="h-12 w-full border-0 bg-transparent text-gray-800 placeholder-gray-400 focus:ring-0"
                            placeholder="Search..."
                        />
                    </div>
                    <template v-if="filteredArticles.length > 0">
                        <ComboboxOptions static class="max-h-96 overflow-y-auto py-4 text-sm">
                            <ComboboxOption
                                v-for="article of filteredArticles"
                                :key="article"
                                v-slot="{ active }"
                                :value="article"
                            >
                                <li
                                    :class="[
                                        active
                                            ? 'bg-indigo-600 px-4 py-2 text-white'
                                            : 'bg-white px-4 py-2 text-gray-900',
                                    ]"
                                >
                                    {{ article.title }}
                                </li>
                            </ComboboxOption>
                        </ComboboxOptions>
                    </template>
                    <template v-if="query && filteredArticles.length === 0">
                        <p class="p-4 text-sm text-gray-500">No results found.</p>
                    </template>
                </Combobox>
            </TransitionChild>
        </Dialog>
    </TransitionRoot>
</template>

<script>
import { ref } from '@vue/reactivity'
import { SearchIcon } from '@heroicons/vue/outline'
import {
    Dialog,
    DialogOverlay,
    Combobox,
    ComboboxInput,
    ComboboxOptions,
    ComboboxOption,
    TransitionRoot,
    TransitionChild,
} from '@headlessui/vue'
import { computed, onMounted } from '@vue/runtime-core'
export default {
    props: ['articles'],
    setup(props) {
        const isOpen = ref(false)
        const query = ref('')

        const setIsOpen = value => (isOpen.value = value)
        const handleIsOpen = evt => {
            setIsOpen(!isOpen.value)
        }

        // Todo: clear query once dialog closed
        // Todo: keyboard click enter, select the selected option

        const filteredArticles = computed(() =>
            query.value
                ? props.articles.filter(article =>
                      article.title.toLowerCase().includes(query.value.toLowerCase())
                  )
                : []
        )

        const keyDown = evt => {
            if (evt.key === 'k' && (evt.metaKey || evt.ctrlKey)) {
                evt.preventDefault()
                setIsOpen(!isOpen.value)
            }
        }

        onMounted(() => {
            window.addEventListener('keydown', keyDown)
        })

        return {
            isOpen,
            setIsOpen,
            handleIsOpen,
            query,
            filteredArticles,
        }
    },
    components: {
        Dialog,
        DialogOverlay,
        Combobox,
        ComboboxInput,
        SearchIcon,
        ComboboxOptions,
        ComboboxOption,
        TransitionRoot,
        TransitionChild,
    },
}
</script>
