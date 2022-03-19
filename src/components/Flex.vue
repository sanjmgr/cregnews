<template>
    <div class="container mx-auto px-8 py-8">
        <div class="flex flex-col md:flex-row md:gap-16">
            <div class="rounded-md md:basis-1/2 lg:basis-2/5">
                <!-- Hash Tag with Border -->
                <div>
                    <div class="flex items-center justify-between">
                        <ul class="flex list-none justify-between gap-8 py-4">
                            <li class="font-bold">#Popular</li>
                            <li class="font-bold text-[#848584]">#Weather</li>
                            <li class="font-bold">#Trend</li>
                            <!-- <li class="font-bold text-[#848584]">#Entertain</li> -->
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

                    <hr class="w-full border border-[#E6E9ED]" />
                </div>

                <!-- Primary Card -->
                <div class="my-4 md:my-8">
                    <!-- News Source -->
                    <div class="flex gap-2">
                        <div
                            class="grid h-8 w-8 place-content-center rounded-full bg-[#E6E9ED] text-lg"
                        >
                            G
                        </div>
                        <div class="text-lg">The Guardian</div>
                        <div
                            class="grid place-content-center rounded-2xl px-2 text-sm ring-1 ring-[#848584]"
                        >
                            Following
                        </div>
                    </div>
                    <!-- main section -->
                    <article class="mt-4 mb-3">
                        <h2 class="object-cover text-2xl font-bold">
                            Britain starts to open up. Ramadan begins. It feels like perfect timing
                        </h2>
                        <img
                            class="my-4 w-full rounded-2xl md:h-52 lg:h-80"
                            src="https://cdn.pixabay.com/photo/2020/05/24/23/44/hands-5216585_960_720.jpg"
                            alt=""
                        />
                        <section>
                            <p>
                                I'm not a very good Muslim. Not just because of my generallaxness
                                around the rules and practices, but perhops more importantly because
                                question some of the fundamental foundations of the religion.
                            </p>
                            <br />
                            <p>
                                Yet I didn't hesitate to mark myself down as Muslim on the census
                                last month, and after a few lapsed years I am starting this month of
                                Ramadan alongside millions of others around the world with the
                                intention of feeling a bit more spiritual.
                            </p>
                        </section>
                    </article>

                    <ul class="flex list-disc gap-8 text-secondary">
                        <li class="list-none">Readmore</li>
                        <li>4 min read</li>
                    </ul>
                </div>
            </div>
            <div class="md:basis-1/2 lg:basis-3/5">
                <!-- Hash Tag with Border -->
                <div class="mb-4 hidden md:block">
                    <div class="flex items-center justify-between">
                        <ul class="flex list-none justify-between gap-8 py-4">
                            <li class="font-bold">#Health</li>
                            <li class="font-bold text-[#848584]">#Politic</li>
                            <li class="font-bold">#Sports</li>
                            <!-- <li class="font-bold text-[#848584]">#Science</li> -->
                            <!-- <li class="font-bold text-[#848584]">#Tech</li>
                            <li class="font-bold text-[#848584]">#Business</li>
                            <li class="font-bold text-[#848584]">#Weather</li> -->
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

                    <hr class="border-1 w-full border-[#E6E9ED]" />
                </div>
                <div class="flex gap-16">
                    <div class="grid grow place-content-center rounded-md lg:basis-1/2">
                        <!-- Tertiary Card -->
                        <div class="my-4">
                            <!-- News Source -->
                            <div class="flex gap-2">
                                <div
                                    class="grid h-8 w-8 place-content-center rounded-full bg-[#E6E9ED] text-lg"
                                >
                                    F
                                </div>
                                <div class="text-lg">France-Presse</div>
                                <div
                                    class="grid place-content-center rounded-2xl px-2 text-sm ring-1 ring-[#848584]"
                                >
                                    Follow
                                </div>
                            </div>
                            <!-- main section -->
                            <article class="mt-4 mb-3">
                                <h2 class="object-cover text-2xl font-bold">
                                    Russia space chief angry over US scrubbing of Gagarin
                                </h2>
                            </article>
                            <ul class="flex list-disc gap-8 text-secondary">
                                <li class="list-none">Readmore</li>
                                <li>12 min read</li>
                            </ul>
                        </div>

                        <!-- Secondary Card -->
                        <div class="my-4">
                            <!-- News Source -->
                            <div class="flex gap-2">
                                <div
                                    class="grid h-8 w-8 place-content-center rounded-full bg-[#E6E9ED] text-lg"
                                >
                                    D
                                </div>
                                <div class="text-lg">Dorest News</div>
                                <div
                                    class="grid place-content-center rounded-2xl px-2 text-sm ring-1 ring-[#848584]"
                                >
                                    Following
                                </div>
                            </div>
                            <!-- main section -->
                            <article class="mt-4 mb-3">
                                <h2 class="object-cover text-2xl font-bold">
                                    Rethink diet-land use connections to prevent future pandemics,
                                    scientist says
                                </h2>
                                <img
                                    class="my-4 w-full rounded-2xl md:h-52 lg:h-64"
                                    src="https://cdn.pixabay.com/photo/2019/03/18/04/53/bird-4062359_960_720.jpg"
                                    alt=""
                                />
                            </article>
                            <ul class="flex list-disc gap-8 text-secondary">
                                <li class="list-none">Readmore</li>
                                <li>12 min read</li>
                            </ul>
                        </div>
                    </div>
                    <div class="hidden rounded-md lg:block lg:basis-1/2">
                        <!-- Secondary Card -->
                        <div class="my-4">
                            <!-- News Source -->
                            <div class="flex gap-2">
                                <div
                                    class="grid h-8 w-8 place-content-center rounded-full bg-[#E6E9ED] text-lg"
                                >
                                    Y!
                                </div>
                                <div class="text-lg">Yahoo News</div>
                                <div
                                    class="grid place-content-center rounded-2xl px-2 text-sm ring-1 ring-[#848584]"
                                >
                                    Following
                                </div>
                            </div>
                            <!-- main section -->
                            <article class="mt-4 mb-3">
                                <h2 class="object-cover text-2xl font-bold">
                                    27 new COVID cases in Singapore, including 1 in community
                                </h2>
                                <img
                                    class="my-4 w-full rounded-2xl md:h-52 lg:h-64"
                                    src="https://cdn.pixabay.com/photo/2020/01/23/16/42/embrace-4788167_960_720.jpg"
                                    alt=""
                                />
                            </article>
                            <ul class="flex list-disc gap-8 text-secondary">
                                <li class="list-none">Readmore</li>
                                <li>12 min read</li>
                            </ul>
                        </div>

                        <!-- Tertiary Card -->
                        <div class="mb-4 mt-8">
                            <!-- News Source -->
                            <div class="flex gap-2">
                                <div
                                    class="grid h-8 w-8 place-content-center rounded-full bg-[#E6E9ED] text-lg"
                                >
                                    F
                                </div>
                                <div class="text-lg">France-Presse</div>
                                <div
                                    class="grid place-content-center rounded-2xl px-2 text-sm ring-1 ring-[#848584]"
                                >
                                    Follow
                                </div>
                            </div>
                            <!-- main section -->
                            <article class="mt-4 mb-3">
                                <h2 class="object-cover text-2xl font-bold">
                                    Surigae Tropical Cyclone formed around West Pacific, north of
                                    Papua
                                </h2>
                            </article>
                            <ul class="flex list-disc gap-8 text-secondary">
                                <li class="list-none">Readmore</li>
                                <li>15 min read</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {}
</script>

<style></style>
