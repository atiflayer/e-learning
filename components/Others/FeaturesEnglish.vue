<template>
    <section class="m-32 md:m-12 lg:m-32 bg-white text-gray-900">
        <div class="container mx-auto p-2 my-6 space-y-1 text-center">
            <h2 class="text-5xl lg:text-4xl font-bold font-sans xl:px-72 xl:mx-auto">We have everything you
                <br> need
                to
                learn
                anything
            </h2>
            <p class="text-gray-500 lg:text-xl py-2">Choose your topic from our vast library to get started</p>
        </div>
        <div class="grid grid-cols-1 gap-8 mt-8 md:grid-cols-2 lg:grid-cols-4 p-3 m-4 bg-gray-100">
            <NuxtLink
                class="flex items-center justify-center p-2 transition bg-white border border-transparent rounded-xl group hover:border-green-600 hover:scale-100"
                to="/">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-10 h-10 text-pink-500" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path d="M12 14l9-5-9-5-9 5 9 5z" />
                    <path
                        d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                </svg>
                <h3 class="ml-4 text-xl font-bold text-black items-center group-hover:text-green-600">Class 1-12</h3>
            </NuxtLink>
            <NuxtLink
                class="flex items-center justify-center p-4 transition bg-white border border-transparent rounded-xl group hover:border-green-600 hover:scale-100"
                to="/">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-10 h-10 text-pink-500" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path d="M12 14l9-5-9-5-9 5 9 5z" />
                    <path
                        d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                </svg>
                <h3 class="ml-4 text-xl font-bold text-black items-center group-hover:text-green-600">Admission</h3>
            </NuxtLink>
            <NuxtLink
                class="flex items-center justify-center p-4 transition bg-white border border-transparent rounded-xl group hover:border-green-600 hover:scale-100"
                to="/">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-10 h-10 text-pink-500" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path d="M12 14l9-5-9-5-9 5 9 5z" />
                    <path
                        d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                </svg>
                <h3 class="ml-4 text-xl font-bold text-black items-center group-hover:text-green-600">Job Exam
                    Preparation</h3>
            </NuxtLink>
            <NuxtLink
                class="flex items-center justify-center p-4 transition bg-white border border-transparent rounded-xl group hover:border-green-600 hover:scale-100"
                to="/">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-10 h-10 text-pink-500" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path d="M12 14l9-5-9-5-9 5 9 5z" />
                    <path
                        d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                </svg>
                <h3 class="ml-4 text-xl font-bold text-black items-center group-hover:text-green-600">Courses</h3>
            </NuxtLink>
        </div>
        <div class="container mx-auto grid justify-center gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <div class="flex flex-col items-center p-4">
                <img src="https://cdn.10minuteschool.com/images/Landing_page/Video%20lecture.svg" alt="">
                <h3 class="my-3 text-2xl font-semibold">Watch video lectures</h3>
                <div class="space-y-1 leading-tight text-lg font-normal px-16 text-center text-gray-600">
                    <p>Learn at your own pace from our 20,000+ videos</p>
                </div>
            </div>
            <div class="flex flex-col items-center p-4">
                <img src="https://cdn.10minuteschool.com/images/Landing_page/Exercise.svg" alt="">
                <h3 class="my-3 text-2xl font-semibold">Practice anytime</h3>
                <div class="space-y-1 leading-tight text-lg font-normal px-16 text-center text-gray-600">
                    <p>Instant scores, explanations and leaderboards!</p>
                </div>
            </div>
            <div class="flex flex-col items-center p-4">
                <img src="https://cdn.10minuteschool.com/images/Landing_page/LIve%20Class.svg" alt="">
                <h3 class="my-3 text-2xl font-semibold">Attend live classes</h3>
                <div class="space-y-1 leading-tight text-lg font-normal px-16 text-center text-gray-600">
                    <p>Daily live classes help you maintain your routine</p>
                </div>
            </div>
            <div class="flex flex-col items-center p-4">
                <img src="https://cdn.10minuteschool.com/images/Landing_page/Lecture%20sheet.svg" alt="">
                <h3 class="my-3 text-2xl font-semibold">Every note you will ever need</h3>
                <div class="space-y-1 leading-tight text-lg font-normal px-16 text-center text-gray-600">
                    <p>Access our lecture sheets and interactive books</p>
                </div>
            </div>
            <div class="flex flex-col items-center p-4">
                <img src="https://cdn.10minuteschool.com/images/Landing_page/Daily%20result%20and%20leaderboard.svg"
                    alt="">
                <h3 class="my-3 text-2xl font-semibold">Daily results and leaderboards</h3>
                <div class="space-y-1 leading-tight text-lg font-normal px-16 text-center text-gray-600">
                    <p>See where you stand among your friends</p>
                </div>
            </div>
            <div class="flex flex-col items-center p-4">
                <img src="https://cdn.10minuteschool.com/images/Landing_page/ask%20question.svg" alt="">
                <h3 class="my-3 text-2xl font-semibold">Ask your teacher</h3>
                <div class="space-y-1 leading-tight text-lg font-normal px-16 text-center text-gray-600">
                    <p>Get your doubts solved within our platform</p>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
</style>