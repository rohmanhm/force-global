export function ForceGlobal (moduleName: string, action: any): boolean | never {
  if (typeof window === 'object') {
    return (window as any)[moduleName] = action
  } else if (typeof global === 'object') {
    return (global as any)[moduleName] = action
  } else if (typeof self === 'object') {
    return (self as any)[moduleName] = action
  } else {
    throw new Error(`[FORCE-GLOBAL]: Cannot set ${ moduleName } to global object`)
  }
}

export default ForceGlobal
