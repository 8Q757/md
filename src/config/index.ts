export * from './api'
export * from './style'
export * from './theme'

export const prefix = `MD`

const isMac = window.navigator.platform === `MacIntel`

export const ctrlKey = isMac ? `Cmd` : `Ctrl`
export const altKey = `Alt`
export const shiftKey = `Shift`

export const ctrlSign = isMac ? `⌘` : `Ctrl`
export const altSign = isMac ? `⌥` : `Alt`
export const shiftSign = isMac ? `⇧` : `Shift`