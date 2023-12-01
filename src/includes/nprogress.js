import nProgress from "nprogress";

export default (router) => {
    router.beforeEach((to, from, next) => {
        nProgress.start()
        next()
    })
    router.afterEach(nProgress.done)
}