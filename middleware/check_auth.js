export default function(context) {
  context.store.dispatch('init_auth', context.req)
}