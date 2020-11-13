export const path = {
    get LOGIN() {
        return '/login'
    },

    get PASSWORD_RECOVERY() {
        return '/passwordRecovery'
    },

    get PROFILE() {
        return "/profile"
    },

    get PROFILE_PERSONAL_DATA() {
        return this.PROFILE + "/personalData"
    },

    get PROFILE_GARAGE() {
        return this.PROFILE + "/garage"
    },

    get PROFILE_BASKET() {
        return this.PROFILE + "/basket"
    },

    get PROFILE_ORDERS() {
        return this.PROFILE + "/orders" 
    }
}