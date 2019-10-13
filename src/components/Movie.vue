<template>
  <div class="container">
    <img class="poster" :src="'https://image.tmdb.org/t/p/original' + movie.poster_path" alt="">
    <p>Рейтинг {{movie.vote_average}}</p>
    <p>{{getString(movie.genres)}}</p>
    <h1>{{movie.title}}</h1>
    <p>{{movie.overview}}</p>
    <p>Бюджет {{movie.budget}}</p>
    <p>Киностудии {{getString(movie.production_companies)}}</p>
    <p>Страны {{getString(movie.production_countries)}}</p>
    <p>Продолжительность {{movie.runtime}}</p>
    <p>Релиз {{movie.release_date}}</p>
  </div>
</template>

<script>
  import axios from 'axios'
  export default {
    data() {
      return {
        url: 'https://api.themoviedb.org/3/movie/' + this.$route.params.id + '?api_key=4d9c9de3bdf0d3b6837c49c086e3b190&language=ru-RU',
        movie: {}
      }
    },
    methods: {
      getFullData() {
        axios.get(this.url)
          .then((response) => {
            this.movie = response.data;
          })
          .catch(error => {
            alert(error)
          });
      },
      getString(arr) {
        let name = [];
        if (arr) {
          for (let item of arr) {
            name.push(item.name)
          }
          return name.join(', ');
        }
      }
    },
    created() {
      this.getFullData()
    }
  }

</script>

<style lang="scss" scoped>
  .container {
    padding: 15px;
  }

  .poster {
    max-width: 100%;
    max-height: 300px;
  }

</style>
