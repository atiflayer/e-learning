<template>
    <!-- Hyper UI -->
    <header class="sticky inset-x-0 top-0 z-50 bg-white shadow-md">
        <div class="flex items-center h-16 max-w-screen-xl gap-5 px-4 mx-auto sm:px-4 lg:px-14 xl:px-14">
            <a class="block text-teal-600" href="/">
                <span class="sr-only">Home</span>
                <!-- <svg class="h-8" viewBox="0 0 28 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M0.41 10.3847C1.14777 7.4194 2.85643 4.7861 5.2639 2.90424C7.6714 1.02234 10.6393 0 13.695 0C16.7507 0 19.7186 1.02234 22.1261 2.90424C24.5336 4.7861 26.2422 7.4194 26.98 10.3847H25.78C23.7557 10.3549 21.7729 10.9599 20.11 12.1147C20.014 12.1842 19.9138 12.2477 19.81 12.3047H19.67C19.5662 12.2477 19.466 12.1842 19.37 12.1147C17.6924 10.9866 15.7166 10.3841 13.695 10.3841C11.6734 10.3841 9.6976 10.9866 8.02 12.1147C7.924 12.1842 7.8238 12.2477 7.72 12.3047H7.58C7.4762 12.2477 7.376 12.1842 7.28 12.1147C5.6171 10.9599 3.6343 10.3549 1.61 10.3847H0.41ZM23.62 16.6547C24.236 16.175 24.9995 15.924 25.78 15.9447H27.39V12.7347H25.78C24.4052 12.7181 23.0619 13.146 21.95 13.9547C21.3243 14.416 20.5674 14.6649 19.79 14.6649C19.0126 14.6649 18.2557 14.416 17.63 13.9547C16.4899 13.1611 15.1341 12.7356 13.745 12.7356C12.3559 12.7356 11.0001 13.1611 9.86 13.9547C9.2343 14.416 8.4774 14.6649 7.7 14.6649C6.9226 14.6649 6.1657 14.416 5.54 13.9547C4.4144 13.1356 3.0518 12.7072 1.66 12.7347H0V15.9447H1.61C2.39051 15.924 3.154 16.175 3.77 16.6547C4.908 17.4489 6.2623 17.8747 7.65 17.8747C9.0377 17.8747 10.392 17.4489 11.53 16.6547C12.1468 16.1765 12.9097 15.9257 13.69 15.9447C14.4708 15.9223 15.2348 16.1735 15.85 16.6547C16.9901 17.4484 18.3459 17.8738 19.735 17.8738C21.1241 17.8738 22.4799 17.4484 23.62 16.6547ZM23.62 22.3947C24.236 21.915 24.9995 21.664 25.78 21.6847H27.39V18.4747H25.78C24.4052 18.4581 23.0619 18.886 21.95 19.6947C21.3243 20.156 20.5674 20.4049 19.79 20.4049C19.0126 20.4049 18.2557 20.156 17.63 19.6947C16.4899 18.9011 15.1341 18.4757 13.745 18.4757C12.3559 18.4757 11.0001 18.9011 9.86 19.6947C9.2343 20.156 8.4774 20.4049 7.7 20.4049C6.9226 20.4049 6.1657 20.156 5.54 19.6947C4.4144 18.8757 3.0518 18.4472 1.66 18.4747H0V21.6847H1.61C2.39051 21.664 3.154 21.915 3.77 22.3947C4.908 23.1889 6.2623 23.6147 7.65 23.6147C9.0377 23.6147 10.392 23.1889 11.53 22.3947C12.1468 21.9165 12.9097 21.6657 13.69 21.6847C14.4708 21.6623 15.2348 21.9135 15.85 22.3947C16.9901 23.1884 18.3459 23.6138 19.735 23.6138C21.1241 23.6138 22.4799 23.1884 23.62 22.3947Z"
                        fill="currentColor" />
                </svg> -->
                <img class="h-10 py-1"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/10_Minute_School_Logo.svg/1200px-10_Minute_School_Logo.svg.png"
                    alt="">
            </a>

            <div class="flex items-center justify-end flex-1 md:flex-1 lg:justify-between md:justify-end">
                <nav class="hidden sm:hidden md:hidden lg:inline-block xl:block" aria-labelledby="header-navigation">
                    <h2 class="sr-only" id="header-navigation">Header navigation</h2>
                    <ul class="flex items-center gap-1 text-lg font-light">
                        <li>
                            <NuxtLink
                                class="font-sans text-base font-medium text-gray-500 normal-case transition rounded-md btn btn-ghost hover:btn-error hover:text-white"
                                to="/">
                                Class 1-12
                            </NuxtLink>
                        </li>
                        <li>
                            <NuxtLink
                                class="font-sans text-base font-medium text-gray-500 normal-case transition rounded-md btn btn-ghost hover:btn-error hover:text-white"
                                to="/">
                                Courses
                            </NuxtLink>
                        </li>
                        <li>
                            <NuxtLink
                                class="font-sans text-base font-medium text-gray-500 normal-case transition rounded-md btn btn-ghost hover:btn-error hover:text-white"
                                to="/">
                                Admission
                            </NuxtLink>
                        </li>
                        <li>
                            <NuxtLink
                                class="font-sans text-base font-medium text-gray-500 normal-case transition rounded-md btn btn-ghost hover:btn-error hover:text-white"
                                to="/">
                                Get Job-Ready
                            </NuxtLink>
                        </li>
                        <li>
                            <NuxtLink
                                class="font-sans text-base font-medium text-gray-500 normal-case transition rounded-md btn btn-ghost hover:btn-error hover:text-white"
                                to="/">
                                Book Store
                            </NuxtLink>
                        </li>
                    </ul>
                </nav>

                <div class="flex items-center gap-4">
                    <div class="sm:gap-4 sm:flex">
                        <button class="dropdown dropdown-mobile dropdown-hover">
                            <label tabindex="0"
                                class="font-sans text-base normal-case btn btn-ghost hover:bg-transparent hover:text-error">English
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
                            class="inline-flex items-center px-3 py-1 text-white transition duration-300 bg-gray-600 border border-gray-600 rounded sm:px-3 sm:py-1 md:px-3 md:py-1 lg:px-3 lg:py-1 xl:px-3 xl:py-1 active:text-white hover:bg-transparent hover:text-gray-600 focus:outline-none focus:ring"
                            to="/">
                            <svg class="w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                            <span class="font-sans text-lg font-medium ">
                                Log in
                            </span>
                        </NuxtLink>
                        <!-- <a class="inline-flex items-center px-8 py-3 text-indigo-600 border border-indigo-600 rounded hover:bg-indigo-600 hover:text-white active:bg-indigo-500 focus:outline-none focus:ring"
                            href="/download">
                            <span class="text-sm font-medium">
                                Download
                            </span>

                            <svg class="w-5 h-5 ml-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </a> -->
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
    <!-- Preline -->
    <!-- <header class="z-50 flex flex-wrap w-full py-4 text-sm bg-white sm:justify-start sm:flex-nowrap dark:bg-gray-800">
        <nav class="max-w-[85rem] w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between" aria-label="Global">
            <div class="flex items-center justify-between">
                <a class="flex-none text-xl font-semibold dark:text-white" href="#">Brand</a>
                <div class="sm:hidden">
                    <button type="button"
                        class="inline-flex items-center justify-center gap-2 p-2 text-sm font-medium text-gray-700 align-middle transition-all bg-white border rounded-md shadow-sm hs-collapse-toggle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 dark:bg-gray-800 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800"
                        data-hs-collapse="#navbar-alignment" aria-controls="navbar-alignment"
                        aria-label="Toggle navigation">
                        <svg class="w-4 h-4 hs-collapse-open:hidden" width="16" height="16" fill="currentColor"
                            viewBox="0 0 16 16">
                            <path fill-rule="evenodd"
                                d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
                        </svg>
                        <svg class="hidden w-4 h-4 hs-collapse-open:block" width="16" height="16" fill="currentColor"
                            viewBox="0 0 16 16">
                            <path
                                d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                        </svg>
                    </button>
                </div>
            </div>
            <div id="navbar-alignment"
                class="hidden overflow-hidden transition-all duration-300 hs-collapse basis-full grow sm:block">
                <div class="flex flex-col gap-5 mt-5 sm:flex-row sm:items-center sm:mt-0 sm:pl-5">
                    <a class="font-medium text-blue-500" href="#" aria-current="page">Landing</a>
                    <a class="font-medium text-gray-600 hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-500"
                        href="#">Account</a>
                    <a class="font-medium text-gray-600 hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-500"
                        href="#">Work</a>
                    <a class="font-medium text-gray-600 hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-500"
                        href="#">Blog</a>
                </div>
            </div>
        </nav>
    </header> -->
</template>

<script>
export default {};
</script>

<style scoped>
.cls-1 {
    fill: #231f20;
}

.cls-2 {
    fill: #eb2026;
}

/* .btn {
    padding-top: 20px;
} */
</style>
