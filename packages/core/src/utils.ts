import { isNumber, isPercentNumber } from '@styli/utils'
import { ModifierType, Props } from '@styli/types'
import { styli } from './styli'

export function getValue(value: string | number, modifierType?: ModifierType | ({} & string)) {
  if (isNumber(value)) {
    const numValue = Number(value)

    // TODO: convert when need it
    if (numValue < 1 && numValue > 0) {
      return (numValue * 100).toFixed(6) + '%'
    }

    const { transformUnit } = styli.getConfig()
    return transformUnit(numValue, modifierType)
  }
  return isPercentNumber(value) ? ('' + value).replace('p', '%') : value
}

/**
 * modifierToProps
 * @param modifier
 * @example const props = modifierToProps('px-10 m-20')
 */
export function modifierToProps(modifier: string): Props {
  return modifier
    .split(/[\s\t\n]+/)
    .reduce((result, cur) => ({ ...result, [cur]: true }), {} as Props)
}
