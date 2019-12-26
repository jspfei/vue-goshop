export default {
  addAction(context) {
    context.commit('add', 10)
    setTimeout(() => {
      context.commit('reduce');
    }, 3000);
    console.log("我比reduce提前执行");
  },
  reduceAction({ commit }) {
    commit('reduce')
  }
}