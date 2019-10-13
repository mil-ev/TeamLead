<template>
  <div class="container">
    <div class="select-block">
      <select class="select-movie" v-model="selected" @change="getData">
        <option class="select-movie__item" disabled value="">Выберите жанр</option>
        <option class="select-movie__item" :value="genre.id" v-for="genre in genres">{{genre.name}}</option>
      </select>
    </div>
    <section class="cards">
      <card :movie='movie' :genres='genres' v-for="movie in movies" :key="movie.id"></card>
    </section>
  </div>
</template>

<script>
  import Card from './Card'
  import axios from 'axios'

  export default {
    data() {
      return {
        selected: '',
        movies: [],
        genres: [],
        url: {
          start: 'https://api.themoviedb.org/3/discover/movie?api_key=4d9c9de3bdf0d3b6837c49c086e3b190&language=ru-RU&with_genres=',
          genre: 'https://api.themoviedb.org/3/genre/movie/list?language=en-US&api_key=4d9c9de3bdf0d3b6837c49c086e3b190&language=ru-RU'
        }
      }
    },
    methods: {
      getData() {
        axios.get(this.url.start + this.selected)
          .then((response) => {
            this.movies = response.data.results;
          })
          .catch(error => {
            alert(error)
          });
      },
      getGenres() {
        axios.get(this.url.genre)
          .then((response) => {
            this.genres = response.data.genres;
          })
          .catch(error => {
            alert(error)
          });
      }
    },
    components: {
      Card
    },
    created() {
      this.getData();
      this.getGenres();
    }
  }

</script>

<style lang="scss" scoped>
  .container {
    margin: auto;
    padding: 10px;
  }

  .select-block {
    margin-bottom: 50px;
    display: flex;
    justify-content: flex-end;
  }

  .select-movie {
    min-width: 250px;
    max-width: 100%;
    padding: 15px;
    font-size: 20px;
    border-radius: 5px;
    border: 2px solid #999;
    cursor: pointer;
    outline: none;

    &__item {
      text-transform: uppercase;
      font-size: 14px;
    }
  }

  .cards {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }

</style>
