<template>
    <!-- Hyper UI -->
    <header class="sticky inset-x-0 top-0 z-50 bg-white shadow-md">
        <div class="flex items-center h-16 max-w-screen-xl gap-5 px-4 mx-auto sm:px-4 lg:px-14 xl:px-14">
            <a class="block text-teal-600" href="/">
                <span class="sr-only">Home</span>
                <img class="h-10 py-1"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/10_Minute_School_Logo.svg/1200px-10_Minute_School_Logo.svg.png"
                    alt="">
            </a>

            <div class="flex items-center justify-end flex-1 md:flex-1 lg:justify-between md:justify-end">
                <nav class="hidden sm:hidden md:hidden lg:inline-block xl:block" aria-labelledby="header-navigation">
                    <h2 class="sr-only" id="header-navigation">Header navigation</h2>
                    <ul class="flex items-center gap-2 text-lg font-normal text-gray-700">
                        <li>
                            <NuxtLink
                                class="font-sans text-sm font-medium normal-case transition rounded-md btn btn-sm btn-ghost hover:bg-red-500 px-4 hover:text-white"
                                to="/">
                                ক্লাস ১-১২
                            </NuxtLink>
                        </li>
                        <li>
                            <NuxtLink
                                class="font-sans text-sm font-medium normal-case transition rounded-md btn btn-sm btn-ghost hover:bg-red-500 px-4 hover:text-white"
                                to="/">
                                কোর্স সমূহ
                            </NuxtLink>
                        </li>
                        <li>
                            <NuxtLink
                                class="font-sans text-sm font-medium normal-case transition rounded-md btn btn-sm btn-ghost hover:bg-red-500 px-4 hover:text-white"
                                to="/">
                                ভর্তি পরীক্ষা
                            </NuxtLink>
                        </li>
                        <li>
                            <NuxtLink
                                class="font-sans text-sm font-medium normal-case transition rounded-md btn btn-sm btn-ghost hover:bg-red-500 px-4 hover:text-white"
                                to="/">
                                চাকরি প্রস্তুতি
                            </NuxtLink>
                        </li>
                        <li>
                            <NuxtLink
                                class="font-sans text-sm font-medium normal-case transition rounded-md btn btn-sm btn-ghost hover:bg-red-500 px-4 hover:text-white"
                                to="/">
                                বুক স্টোর
                            </NuxtLink>
                        </li>
                    </ul>
                </nav>

                <div class="flex items-center gap-4">
                    <div class="sm:gap-4 sm:flex">
                        <button class="dropdown dropdown-mobile dropdown-hover">
                            <label tabindex="0"
                                class="font-sans text-sm btn btn-ghost hover:bg-transparent hover:text-red-600">বাংলা
                                <svg class="ml-2 w-2.5 h-2.5 text-gray-600" width="16" height="16" viewBox="0 0 16 16"
                                    fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5"
                                        stroke="currentColor" stroke-width="2" stroke-linecap="round"></path>
                                </svg>
                            </label>
                            <ul tabindex="0" class="w-32 p-1 shadow dropdown-content menu bg-base-100">
                                <li><a>English</a></li>
                                <li><a>বাংলা</a></li>
                            </ul>
                        </button>

                        <NuxtLink
                            class="inline-flex items-center xl:my-1 px-3 py-1 text-white transition duration-300 bg-gray-700 border border-gray-700 rounded sm:px-3 sm:py-1 md:px-3 md:py-1 lg:px-3 lg:py-1 xl:px-3 hover:bg-transparent hover:text-gray-700"
                            to="/">
                            <svg class="w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                            <span class="font-sans text-base font-medium ">
                                লগ-ইন
                            </span>
                        </NuxtLink>
                    </div>
                    <button
                        class="block p-2.5 text-gray-600 transition bg-gray-100 rounded lg:hidden md:block hover:text-gray-600/75">
                        <span class="sr-only">Toggle menu</span>
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24"
                            stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    </header>
</template>

<script>
export default {};
</script>

<style scoped>
</style>
