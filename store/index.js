export const state = () => ({
  all_courses: [],
  all_lessons: [],
  course: {},
  lessons: [],
  lesson: {},
  progress: 0,
  token: null,
  user: {},
  user_profile: {}
});

export const mutations = {
  set_all_courses(state, data) {
    state.all_courses = data
  },
  set_all_lessons(state, data) {
    state.all_lessons = data
  },
  set_course(state, data) {
    state.course = data
  },
  set_lessons(state, data) {
    state.lessons = data
  },
  set_lesson(state, data) {
    state.lesson = data
  },
  set_progress(state, data) {
    state.progress = data
  },
  set_token(state, data) {
    state.token = data
  },
  clear_token(state, data) {
    state.token = null
  },
  set_user(state, data) {
    state.user = data
  },
  set_user_profile(state, data) {
    state.user_profile = data
  }
}

export const actions = {
  nuxtServerInit(vuexContext, context) {
    async function getData() {

      const coursesArray = []
      const lessonsArray = []

      const courses = await context.$axios.get('/courses.json')
      const lessons = await context.$axios.get('/lessons.json')
      const progress = await context.$axios.get('/progress.json')

      for (const key in courses.data) {
        coursesArray.push(courses.data[key])
      }

      for (const key in lessons.data) {
        lessonsArray.push(lessons.data[key])
      }

      vuexContext.commit('set_all_courses', coursesArray)
      vuexContext.commit('set_all_lessons', lessonsArray)
      vuexContext.commit('set_progress', progress.data)
    };

    return getData()

  },
  authenticate_user(vuexContext, route) {
    this.$axios.post('https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=' + process.env.fbAPIKey, {
      email: 'will.miller@otahq.com',
      password: 'password',
      returnSecureToken: true
    }).then(result => {
      vuexContext.commit('set_token', result.data.idToken)
      this.$cookies.set('jwt', result.data.idToken)
      this.$cookies.set('expiration_date', new Date().getTime() + +result.data.expiresIn * 1000)
      localStorage.setItem('token', result.data.idToken)
      localStorage.setItem('token_expiration', new Date().getTime() + +result.data.expiresIn * 1000)
      this.$router.push('/');
    }).catch(e => console.log(e))

  },
  init_auth(vuexContext, req) {
    let token;
    let expiration_date;
    if (req) {
      if (!req.headers.cookie) {
        return
      }
      const jwtCookie = req.headers.cookie.split(';').find(c => c.trim().startsWith('jwt='))
      if (!jwtCookie) {
        return
      }
      token = jwtCookie.split('=')[1]
      expiration_date = req.headers.cookie.split(';').find(c => c.trim().startsWith('expiration_date=')).split('=')[1]

    } else if (process.client) {
      token = localStorage.getItem('token');
      expiration_date = localStorage.getItem('token_expiration')
    }

    if (new Date().getTime() > +expiration_date || !token) {
      vuexContext.dispatch('logout')
      return;
    }

    vuexContext.commit('set_token', token)
  },
  logout(vuexContext) {
    vuexContext.commit('clear_token')
    this.$cookies.remove('jwt')
    this.$cookies.remove('expiration_date')
    if (process.client) {
      localStorage.removeItem('token')
      localStorage.removeItem('token_expiration')
    }
  }
}

export const getters = {
  is_authenticated(state) {
    return state.token !== null
  }
}