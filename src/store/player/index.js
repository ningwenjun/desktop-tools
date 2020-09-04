const MODE = {
  '1': 'circle',
  '2': 'random',
  '3': 'retweet'
}
const state = {
  playList: JSON.parse(localStorage.getItem('currentMusicList')) || [],
  currentIndex: 0,
  audioBuffered: 0,
  mode: localStorage.getItem('playmode') || 'retweet',
  playProgress: 0,
  customPlayTime: 0
}

const mutations = {
  ADD_PLAY_LIST({}, {}) {},
  SET_PLAY_PROGESS(state, progress) {
    state.playProgress = progress
  },
  SET_PLAY_LIAT(state, list) {
    state.playList = list
    localStorage.setItem('currentMusicList', JSON.stringify(list))
  },
  SET_CUSTOM_PLAY_TIME(state, percent) {
    state.customPlayTime = percent
  },
  SET_CURRENT_INDEX(state, index) {
    state.currentIndex = index
  },
  ADD_CURRENT_INDEX(state) {
    let index = state.currentIndex + 1
    if (index === state.playList.length) {
      state.currentIndex = 0
    } else {
      state.currentIndex = index
    }
  },
  SET_AUDIO_BUFFERED(state, val) {
    state.audioBuffered = val
  },
  SET_MODE(state, val) {
    if (Object.values(MODE).includes(val)) {
      state.mode = val
      localStorage.setItem('playmode', val)
    }
  }
}
const actions = {}
export default {
  state,
  mutations,
  actions
}
