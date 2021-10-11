import { dateNull } from '../_util/date2.ts'

export function newUser(user) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
    return {
        id: (_a = user.id) !== null && _a !== void 0 ? _a : 0,
        name: (_b = user.name) !== null && _b !== void 0 ? _b : '',
        home: (_c = user.home) !== null && _c !== void 0 ? _c : '',
        email: (_d = user.email) !== null && _d !== void 0 ? _d : '',
        hash: (_e = user.hash) !== null && _e !== void 0 ? _e : '',
        status: (_f = user.status) !== null && _f !== void 0 ? _f : 'v',
        admin: (_g = user.admin) !== null && _g !== void 0 ? _g : false,
        profile: (_h = user.profile) !== null && _h !== void 0 ? _h : '',
        cdate: (_j = user.cdate) !== null && _j !== void 0 ? _j : dateNull,
        adate: (_k = user.adate) !== null && _k !== void 0 ? _k : dateNull,
        pdate: (_l = user.pdate) !== null && _l !== void 0 ? _l : dateNull,
    };
}
export function userIsUser(user) {
    return user.id !== -1;
}
export function userIsAdmin(user) {
    return user.admin;
}
export const GUEST = newUser({
    id: -1, name: '', home: '', email: '', hash: '',
    cdate: new Date(2003, 0, 17), adate: new Date(2003, 0, 17), pdate: new Date(2003, 0, 17)
});
export function newUserIdCard(user) {
    return {
        id: user.id,
        name: user.name,
        home: user.home,
        admin: user.admin
    };
}
export const GUEST_ID_CARD = newUserIdCard(GUEST);
//# sourceMappingURL=user.js.map
