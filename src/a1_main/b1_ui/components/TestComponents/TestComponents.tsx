import React from "react";
import SuperInputText from "../../common/c1-SuperInputText/SuperInputText";
import SuperButton from "../../common/c2-SuperButton/SuperButton";
import SuperCheckbox from "../../common/c3-SuperCheckbox/SuperCheckbox";
import SuperEditableSpan from "../../common/c4-SuperEditableSpan/SuperEditableSpan";
import SuperSelect from "../../common/c5-SuperSelect/SuperSelect";
import SuperRadio from "../../common/c6-SuperRadio/SuperRadio";
import SuperRange from "../../common/c7-SuperRange/SuperRange";
import SuperDoubleRange from "../../common/c8-SuperDoubleRange/SuperDoubleRange";

export const TestComponents:React.FC=()=>{
    return(
        <div>
            <SuperInputText/>
            <SuperButton/>
            <SuperCheckbox/>
            <SuperEditableSpan/>
            <SuperSelect/>
            <SuperRadio/>
            {/*yarn add rc-slider*/}
            {/*<SuperRange setValue1={} value={} max={} min={} step={}/>
            <SuperDoubleRange setValue1={} setValue2={} max={} min={} step={}/>*/}

        </div>
    )
}