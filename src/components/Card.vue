<template>
  <router-link class="card" :to="{name: 'movie', params: {id: movie.id}}" tag="div">
    <img :src="'https://image.tmdb.org/t/p/w500' + movie.backdrop_path" alt="poster" class="card__poster">
    <h2 class="card__title">{{movie.title}}</h2>
    <div class="card__genre" v-if='genres.length'>{{convertGenres(movie.genre_ids)}}</div>
    <p class="card__description">{{movie.overview}}</p>
  </router-link>
</template>

<script>
  export default {
    props: {
      movie: {},
      genres: {}
    },
    methods: {
      convertGenres(genre_ids) {
        let that = this;
        let genres_name = [];
        for (let id of genre_ids) {
          for (let item of that.genres) {
            if (item.id === id) {
              genres_name.push(item.name)
            }
          }
        }
        return genres_name.join(', ');
      }
    }
  }

</script>

<style lang="scss" scoped>
  .card {
    width: 290px;
    margin: 20px;
    border: 1px solid #999;
    cursor: pointer;
    border-radius: 5px;

    &__poster {
      width: 100%;
    }

    &__title {
      margin: 10px auto;
      padding: 0 10px;
    }

    &__genre {
      padding: 0 10px;
    }

    &__description {
      font-size: 14px;
      padding: 0 10px;
    }
  }

</style>
