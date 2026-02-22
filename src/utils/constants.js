export const userIcon =
  "https://occ-0-2040-2164.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABTtzfQn_TnlmI0dXn5jkfRFxmK1cjkW0zvz_qkvE4MT05lZLOhPuyHXGLF4EaOKu7aYlkrYf3X_a_af3ubt2_hek8y0rYcVBbw.png?r=181";

export const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: "Bearer " + process.env.REACT_APP_TMDB_API_KEY,
  },
};

export const Image_base_url = "https://image.tmdb.org/t/p/w400";

export const SUPPORTED_LANGUAGES = [
  { code: "en", name: "English" },
  { code: "es", name: "Spanish" },
];

export const GPT_API_KEY = process.env.REACT_APP_GPT_API_KEY;
