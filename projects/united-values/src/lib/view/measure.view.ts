import { Unit } from '../_core/units'
import { uFatQuestion, uWarn, PresentationParams, formatCustom, uQuestion } from './params'
import { Quantified } from '../_core/quantified'

export class MeasureView {

    constructor(private _locale?: string) {
    }

    transform(uval: Quantified<Unit>, params: PresentationParams): string {
        if (!uval)
            return null

        // if (!weigher)
        //     return `${uval.value}${uFatQuestion}`

        // if (params.ConvertApplies) {
        //     const toUnit = weigher.parseUnit(params.ConvertTo);
        //     if (!toUnit)
        //         return `${uval.unit}->${uFatQuestion} ${params.ConvertTo}`

        //     const initLabel = weigher.label(uval.unit) ?? weigher.rawLabel(uval.unit)
        //     uval = weigher.convert(uval, toUnit);
        //     if (!uval || !uval.value)
        //         return `${uWarn} ${initLabel} -> ${params.ConvertTo}`
        // }

        // const fVal = params.DecimalFormatApplies || params.CultureApplies
        //     ? formatCustom(uval.value, params, this._locale)
        //     : uval.value.toLocaleString()

        // const label = weigher.label(uval.unit, params.UnitDisplay) ?? `${uQuestion}${weigher.rawLabel(uval.unit)}${uQuestion}`
        // return `${fVal} ${label}`
    }
}