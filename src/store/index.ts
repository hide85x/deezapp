import { reactive, ref, readonly, computed } from 'vue'


import { SingleALbum, Tracks, User } from '../interfaces/interface';
import axios, { AxiosResponse } from 'axios';

const state = reactive<{
  loggedUser: User | null,
  results: SingleALbum[],
  favorites: SingleALbum[],
  tracks: Tracks[]
}>({
  loggedUser: null,
  results: [],
  favorites: [],
  tracks: []
})
import firebase from 'firebase'
const methods = {
  logNewUser: async (payload: User) => state.loggedUser = payload,
  logout: async () => {
    firebase
      .auth()
      .signOut()
      .then((res: any) => state.loggedUser = null)
      .catch((err) => console.log(err));
  },
  getTracklist: async (tracklistUrl: string): Promise<any> => {
    try {
      const results: AxiosResponse<any> = await axios(tracklistUrl)
      console.log(results.data.data)
      state.tracks = results.data.data

    }
    catch (err) { console.log(err) }
  },
  getDataByQuery: async (query: String) => {
    if (query.length === 0) {
      alert('type something!')
    }
    try {
      const results: AxiosResponse<any> = await axios
        .get(
          `http://localhost:8080/search?q=${query}`, {

        });
      if (results.data.data === undefined) {
        alert('no tunes for Ya!')
      }
      console.log(results.data.data)
      state.results = results.data.data

    }
    catch (err) { console.log(err) } {
    }
  }
};
const getters = {
  getUser: computed((): User | null => state.loggedUser),
  getResults: computed((): SingleALbum[] => state.results),
  getFavorites: computed((): SingleALbum[] => state.favorites),
  getTracks: computed(() => state.tracks)
};


export default {
  state: readonly(state),
  methods,
  getters

}