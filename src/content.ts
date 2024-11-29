export {}

window.addEventListener("keydown", (evt: KeyboardEvent) => {
  evt.preventDefault()

  const playButton = document.querySelector(
    "button.play-button"
  ) as HTMLButtonElement | null
  if (playButton === null) return

  if (evt.code === "Space") {
    playButton.focus()
    playButton.click()
  }
})
