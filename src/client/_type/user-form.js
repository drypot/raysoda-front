export function newUserRegisterForm(form) {
    var _a, _b, _c;
    return {
        name: (_a = form.name) !== null && _a !== void 0 ? _a : '',
        email: (_b = form.email) !== null && _b !== void 0 ? _b : '',
        password: (_c = form.password) !== null && _c !== void 0 ? _c : '',
    };
}
export function newUserUpdateForm(user) {
    var _a, _b, _c, _d, _e;
    return {
        name: (_a = user.name) !== null && _a !== void 0 ? _a : '',
        home: (_b = user.home) !== null && _b !== void 0 ? _b : '',
        email: (_c = user.email) !== null && _c !== void 0 ? _c : '',
        password: (_d = user.password) !== null && _d !== void 0 ? _d : '',
        profile: (_e = user.profile) !== null && _e !== void 0 ? _e : '',
    };
}
//# sourceMappingURL=user-form.js.map