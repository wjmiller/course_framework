export const state = () => ({
  course: {},
  lesson: {},
  lessons: []
})

export const mutations = {
  set_course(state, data) {
    state.course = data
  },
  set_lesson(state, data) {
    state.lesson = data
  },
  set_lessons(state, data) {
    state.lessons = data
  }
}