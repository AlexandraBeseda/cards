import React from 'react'


import Slider, {createSliderWithTooltip} from 'rc-slider';
import './SuperDoubleRange.css';

const Range = createSliderWithTooltip(Slider.Range);
type SuperDoubleRangePropsType = {
    onChangeRange?: (value: [number, number]) => void,
    value?: [number, number],
    setValue1: (value: number) => void,
    setValue2: (value: number) => void,
    max: string,
    min: string,
    step: string,

}

const SuperDoubleRange: React.FC<SuperDoubleRangePropsType> = (
    {
        value, setValue1, setValue2, max, min, step
        //disable, ...
    }
) => {
    const onChangeCallBack = (v: number[]) => {
        setValue1(v[0]);
        setValue2(v[1]);
    }

    return (
        <div>
            <Range
                min={Number(min)}
                max={Number(max)}
                step={Number(step)}
                value={value ? value : [0, 100]}
                defaultValue={(value) ? value : [0, 100]}
                onChange={onChangeCallBack}
            />
        </div>
    )
}

export default SuperDoubleRange
