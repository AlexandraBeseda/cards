import React from 'react';
import Slider from "rc-slider";


type SuperRangePropsType = {
    onChangeRange?: (value: number) => void,
    setValue1: (value: number) => void,
    value: number,
    max: string,
    min: string,
    step: string,
};

const SuperRange: React.FC<SuperRangePropsType> = (
    {

        onChangeRange,
        max, min, step,
        ...restProps
    }
) => {

    const onChangeCallBack = (v: number) => {
        restProps.setValue1(v);
        onChangeRange && onChangeRange(v);
    }


    return (
        <>
            <Slider
                min={Number(min)}
                max={Number(max)}
                step={Number(step)}
                defaultValue={restProps.value}
                value={restProps.value}
                onChange={onChangeCallBack}
            />
        </>
    )
}

export default SuperRange
