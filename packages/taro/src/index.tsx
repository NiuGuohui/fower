import Taro from '@tarojs/components'
import { styli } from '@styli/core'
import presetDefault from '@styli/preset-default'
import { styled } from '@styli/styled'
import { theme } from './theme'

styli.configure(() => ({
  ...presetDefault,
  unit: 'rpx',
  inline: true,
  theme,
}))

export * from '@styli/theming'
export * from '@styli/core'
export * from '@styli/styled'

export const View = styled(Taro.View)
export const MovableView = styled(Taro.MovableView)
export const ScrollView = styled(Taro.ScrollView)
export const Swiper = styled(Taro.Swiper)
export const SwiperItem = styled(Taro.SwiperItem)
export const Block = styled(Taro.Block)
export const MovableArea = styled(Taro.MovableArea)
export const CoverView = styled(Taro.CoverView)
export const CoverImage = styled(Taro.CoverImage)
export const Icon = styled(Taro.Icon)
export const Text = styled(Taro.Text)
export const RichText = styled(Taro.RichText)
export const Progress = styled(Taro.Progress)
export const Button = styled(Taro.Button)
export const Checkbox = styled(Taro.Checkbox)
export const CheckboxGroup = styled(Taro.CheckboxGroup)
export const Editor = styled(Taro.Editor)
export const Form = styled(Taro.Form)
export const Input = styled(Taro.Input)
export const Label = styled(Taro.Label)
export const Picker = styled(Taro.Picker)
export const PickerView = styled(Taro.PickerView)
export const PickerViewColumn = styled(Taro.PickerViewColumn)
export const Radio = styled(Taro.Radio)
export const RadioGroup = styled(Taro.RadioGroup)
export const Slider = styled(Taro.Slider)
export const Switch = styled(Taro.Switch)
export const Textarea = styled(Taro.Textarea)
export const Image = styled(Taro.Image)
export const Navigator = styled(Taro.Navigator)
export const Camera = styled(Taro.Camera)
export const Canvas = styled(Taro.Canvas)
export const OpenData = styled(Taro.OpenData)
export const Ad = styled(Taro.Ad)
export const Video = styled(Taro.Video)
export const Audio = styled(Taro.Audio)
export const FunctionalPageNavigator = styled(Taro.FunctionalPageNavigator)
export const LivePlayer = styled(Taro.LivePlayer)
export const LivePusher = styled(Taro.LivePusher)
export const Map = styled(Taro.Map)
export const WebView = styled(Taro.WebView)
export const OfficialAccount = styled(Taro.OfficialAccount)
export const NavigationBar = styled(Taro.NavigationBar)
export const PageMeta = styled(Taro.PageMeta)
