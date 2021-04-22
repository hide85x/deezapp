import { reactive, ref, readonly, computed } from 'vue'


import {SingleALbum} from '../interfaces/interface';
import axios, { AxiosResponse } from 'axios';

const state = reactive({
  results: new Array<SingleALbum>(),
  favorites: new Array<SingleALbum>()
})
const methods = {
//  addToFavs(item:SingleALbum): void {

//     const isThere =state.favorites.find((el:SingleALbum) => el.id === item.id)
//     isThere ? alert(`Come on! ${item.title} is already there!`): state.favorites.push(item)
//   },
  // deleteFromFavs(itemId:string): void {
  //   const newFavsList = state.favorites.filter(el => itemId !== el.id)
  //   state.favorites = newFavsList
  // }
};
const getters = {
  getResults: computed(() => state.results),
  getFavorites: computed(() => state.favorites)
};

const getData= async() => {
 const results:AxiosResponse<SingleALbum>= await axios('https://api.deezer.com/album/302127')
 console.log(results.data)
 return state.results.push(results.data)
}
getData()

export default {
  state: readonly(state),
  methods,
  getters

}