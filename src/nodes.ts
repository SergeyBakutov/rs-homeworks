import { IButtons, IIcons } from './declarations/nodes'

export const app = document.querySelector('.app') as HTMLDivElement
export const title = document.querySelector('.app__title') as HTMLHeadingElement

export const buttons: IButtons = {
  summer: document.querySelector('.app__button_summer')!,
  rain: document.querySelector('.app__button_rainy')!,
  winter: document.querySelector('.app__button_winter')!,
}

export const icons: IIcons = {
  sun: document.querySelector('.app__button-icon_sun')!,
  rain: document.querySelector('.app__button-icon_rain')!,
  snow: document.querySelector('.app__button-icon_snow')!,
}

export const volumeControl = document.querySelector('.app__volume') as HTMLInputElement
