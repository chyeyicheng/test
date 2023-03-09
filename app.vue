<template>
  <div class="bg-bg">
    <div class="py-[23px] px-[19px] sm:max-w-[1100px] my-0 mx-auto">
      <div
        class="text-word text-[30px] font-RobotoBold mb-[23px] sm:text-[40px]"
      >
        TOP RATED MOVIES
      </div>
      <div>
        <ul
          class="grid grid-cols-2 gap-[30px] sm:grid-cols-3 sm:gap-[40px] lg:grid-cols-5"
        >
          <li
            v-for="movie in paginatedMovies"
            :key="movie.id"
            class="flex flex-col"
          >
            <img
              :src="movie.poster_path"
              alt="movie poster"
              class="w-[275px] drop-shadow-[0_0px_5px_rgba(0,0,0,0.75)] sm:w-[200px] sm:h-[300px]"
            />
            <div
              class="text-black font-medium text-[18px] font-RobotoMedium pt-[31px] leading-7"
            >
              {{ movie.title }}
            </div>
            <div
              class="text-word font-bold text-[16px] font-RobotoBold leading-7"
            >
              {{ movie.release_date.slice(0, 4) }}
            </div>
          </li>
        </ul>

        <div
          class="flex felx-col text-word text-[16px] font-RobotoBold mt-[46px] justify-end sm:text-[30px]"
        >
          <div class="mx-2">Page</div>
          <button
            v-for="page in pageCount"
            :key="page"
            @click="currentPage = page"
            class="mx-2"
            :class="{
              'text-black': currentPage === page,
              'text-word': currentPage !== page,
            }"
          >
            {{ page }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import movies from "assets/data/movies.json";

export default {
  data() {
    return {
      movies,
      currentPage: 1,
      pageSize: 10,
    };
  },
  computed: {
    paginatedMovies() {
      const startIndex = (this.currentPage - 1) * this.pageSize;
      const endIndex = startIndex + this.pageSize;
      return this.movies.slice(startIndex, endIndex);
    },
    pageCount() {
      return Math.ceil(this.movies.length / this.pageSize);
    },
  },
};
</script>