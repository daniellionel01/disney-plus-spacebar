import type { PlasmoCSConfig } from "plasmo"

export {}

export const config: PlasmoCSConfig = {
  matches: ["https://www.disneyplus.com/play/*"],
  all_frames: true
}

window.addEventListener("keydown", (evt: KeyboardEvent) => {
  evt.preventDefault()

  const activeElement = document.activeElement as HTMLElement | null
  if (activeElement) {
    activeElement.blur()
  }

  const button = document.querySelector(
    "button.play-button"
  ) as HTMLButtonElement | null

  if (button) {
    setTimeout(() => button.click(), 0)
  }
})
