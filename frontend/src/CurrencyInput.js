import React, { forwardRef } from 'react'
import styled from 'styled-components'
import useSelectAllOnFocus from './useSelectAllOnFocus';

const StyledInput = styled.input`
color: ${props => props.theme.variable};
background-color: ${props => props.theme.variableBg};
border:none;
text-align:right;
margin-left: 10px;
&:focus {
    color: ${props => props.theme.active};
    background-color: ${props => props.theme.activeBg};
    border:none;
}`

function CurrencyInput(props, ref) {
    const inputRef = useSelectAllOnFocus(ref, props.value)

    const onChange = ({ target }) => {
        const v = target.value.replace(',', '.')
        if (!isNaN(v))
            props.setValue(target.value)
    }
    return <StyledInput ref={inputRef} {...props} onChange={onChange} />;
}
export default forwardRef(CurrencyInput);