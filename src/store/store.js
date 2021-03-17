import { createStore } from 'vuex';
import * as getters from './getters';
import * as actions from './actions';
import mutations from './mutations';

const state = {
  userName: '',
  userId: '',
  load: false,
};

export default createStore({
  state,
  mutations,
  getters,
  actions,
})
