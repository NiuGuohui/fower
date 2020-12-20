import { Theme } from '@styli/types'
import presetDefault from '@styli/preset-default'

export const theme: Theme = {
  breakpoints: ['640rpx', '768rpx', '1024rpx', '1280rpx'],
  colors: presetDefault.theme?.colors || ({} as any),
  spacing: ['0', '4rpx', '8rpx', '12rpx', '16rpx', '20rpx', '24rpx', '28rpx', '32rpx', '36rpx'],
  sizes: ['0', '4rpx', '8rpx', '12rpx', '16rpx', '20rpx', '24rpx', '28rpx', '32rpx', '36rpx'],
  fontSizes: ['12rpx', '14rpx', '16rpx', '20rpx', '24rpx', '32rpx', '48rpx', '64rpx'],
  headings: ['48rpx', '32rpx', '24rpx', , '20rpx', '16rpx', '14rpx'] as string[] | number[],
  iconSizes: ['16rpx', '24rpx', '32rpx'],
  lineHeight: {
    none: 1,
    tight: 1.25,
    snug: 1.375,
    normal: 1.5,
    relaxed: 1.625,
    loose: 2,
  },
  borderColors: ['#dddddd', '#f0f0f0'],
  borderWidths: [0, 1, 2, 4],
  borderRadius: {
    none: '0',
    sm: '2rpx',
    default: '4rpx',
    md: '6rpx',
    lg: '8rpx',
    full: '9999rpx',
  },
  shadow: {
    xs: '0 1rpx 1rpx rgba(0, 0, 0, 0.12), 0 0 1rpx rgba(0,0,0,0.01)',
    sm: '0 1rpx 3rpx rgba(0, 0, 0, 0.12), 0 0 1rpx rgba(0,0,0,0.01)',
    base: '0 2rpx 4rpx rgba(0, 0, 0, 0.12), 0 0 2rpx rgba(0,0,0,0.02)',
    md: '0 4rpx 8rpx rgba(0, 0, 0, 0.12), 0 0 2rpx rgba(0,0,0,0.02)',
    lg: '0 8rpx 16rpx rgba(0, 0, 0, 0.12), 0 0 2rpx rgba(0,0,0,0.02)',
    xl: '0 14rpx 24rpx rgba(0, 0, 0, 0.16), 0 0 2rpx rgba(0,0,0,0.02)',
    xxl: '0 24rpx 48rpx rgba(0, 0, 0, 0.2), 0 0 2rpx rgba(0,0,0,0.02)',
    inner: 'inset 0 2rpx 4rpx 0 rgba(0, 0, 0, 0.06)',
    outline: '0 0 0 3rpx rgba(66, 153, 225, 0.5)',
    none: 'none',
  },
  fontWeights: {
    hairline: 100,
    thin: 200,
    light: 300,
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 'bold',
    extrabold: 800,
    black: 900,
  },
}
