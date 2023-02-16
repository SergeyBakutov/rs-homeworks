import replaceClasses from './helpers/replaceClasses'

import { audios } from './audios'
import { app, title, buttons, icons, volumeControl } from './nodes'

import './index.scss'

audios.summer.volume = Number(volumeControl.value)
audios.rain.volume = Number(volumeControl.value)
audios.winter.volume = Number(volumeControl.value)

function returnInitIcons() {
  replaceClasses(icons.sun, ['app__button-icon_pause'], ['app__button-icon_sun'])
  replaceClasses(icons.rain, ['app__button-icon_pause'], ['app__button-icon_rain'])
  replaceClasses(icons.snow, ['app__button-icon_pause'], ['app__button-icon_snow'])
}

buttons.summer.onclick = function () {
  replaceClasses(app, ['app_rain-bg', 'app_winter-bg'], ['app_summer-bg'])
  replaceClasses(title, ['app__title_white', 'app__title_black'], ['app__title_orange'])

  if (audios.summer.paused) {
    audios.summer.play()
    audios.rain.pause()
    audios.winter.pause()
    returnInitIcons()
  } else {
    audios.summer.pause()
    replaceClasses(icons.sun, ['app__button-icon_sun'], ['app__button-icon_pause'])
  }
}

buttons.rain.onclick = function () {
  replaceClasses(app, ['app_summer-bg', 'app_winter-bg'], ['app_rain-bg'])
  replaceClasses(title, ['app__title_orange', 'app__title_black'], ['app__title_white'])

  if (audios.rain.paused) {
    audios.rain.play()
    audios.summer.pause()
    audios.winter.pause()
    returnInitIcons()
  } else {
    audios.rain.pause()
    replaceClasses(icons.rain, ['app__button-icon_rain'], ['app__button-icon_pause'])
  }
}

buttons.winter.onclick = function () {
  replaceClasses(app, ['app_summer-bg', 'app_rain-bg'], ['app_winter-bg'])
  replaceClasses(title, ['app__title_orange', 'app__title_white'], ['app__title_black'])

  if (audios.winter.paused) {
    audios.winter.play()
    audios.summer.pause()
    audios.rain.pause()
    returnInitIcons()
  } else {
    audios.winter.pause()
    replaceClasses(icons.snow, ['app__button-icon_snow'], ['app__button-icon_pause'])
  }
}

volumeControl.onchange = function (event: Event) {
  const currentVolume = Number((event.target as HTMLInputElement).value)
  audios.summer.volume = currentVolume
  audios.rain.volume = currentVolume
  audios.winter.volume = currentVolume
}
