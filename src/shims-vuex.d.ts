/* eslint-disable @typescript-eslint/no-explicit-any */
export {}

declare module 'vue' {
  interface ComponentCustomProperties {
    $store: any
  }
}
