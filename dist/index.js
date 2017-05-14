"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function ForceGlobal(moduleName, action) {
    if (typeof window === 'object') {
        return window[moduleName] = action;
    }
    else if (typeof global === 'object') {
        return global[moduleName] = action;
    }
    else if (typeof self === 'object') {
        return self[moduleName] = action;
    }
    else {
        throw new Error("[FORCE-GLOBAL]: Cannot set " + moduleName + " to global object");
    }
}
exports.ForceGlobal = ForceGlobal;
exports.default = ForceGlobal;
