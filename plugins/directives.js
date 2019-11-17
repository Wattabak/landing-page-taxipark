import Vue from 'vue'

// Vue.use((Vue) => {
//   // Assign a unique id to each component
//   let uuid = 0
//   Vue.mixin({
//     beforeCreate() {
//       this.uuid = uuid.toString()
//       uuid += 1
//     }
//   })

//   // Generate a component-scoped id
//   Vue.prototype.$id = function(id) {
//     return 'uid-' + this.uuid + '-' + id
//   }
// })

Vue.directive('click-outside', {
  bind(el, binding, vnode) {
    el.clickOutsideEvent = function(event) {
      // here I check that click was outside the el and his childrens
      if (!(el === event.target || el.contains(event.target))) {
        // and if it did, call method provided in attribute value
        vnode.context[binding.expression](event)
      }
    }
    document.body.addEventListener('click', el.clickOutsideEvent)
  },
  unbind(el) {
    document.body.removeEventListener('click', el.clickOutsideEvent)
  }
})
