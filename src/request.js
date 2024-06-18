const API_KEY = "cf6d6478580c9f3df2e40c0cc87db506";

const requests = [
  {
    title: "Netflix Originals",
    url: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
  },
  {
    title: "Trending Now",
    url: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  },
  {
    title: "Top Rated",
    url: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  },
  {
    title: "Action Movies",
    url: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  },
  {
    title: "Comedy Movies",
    url: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  },
  {
    title: "Horror Movies",
    url: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
  },
  {
    title: "Romance Movies",
    url: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  },
  {
    title: "Documentaries",
    url: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
  },
];

export default requests;
