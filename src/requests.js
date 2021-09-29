const API_KEY = "f17131439e567dc87764bfc8daab7621";

const requests = {
  fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  fetchPopular: `/movie/popular?api_key=${API_KEY}&language=en-US`,
  fetchLatest: `/movie/upcoming?api_key=${API_KEY}&language=en-US`,
};

export default requests;
