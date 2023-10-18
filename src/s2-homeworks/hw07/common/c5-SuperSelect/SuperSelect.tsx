import React , {
    SelectHTMLAttributes ,
    DetailedHTMLProps ,
    ChangeEvent  ,
} from 'react'
import s from './SuperSelect.module.css'
import {ThemesType} from "../../../hw12/HW12";

type DefaultSelectPropsType = DetailedHTMLProps<
    SelectHTMLAttributes<HTMLSelectElement>,
    HTMLSelectElement
>

type SuperSelectPropsType = DefaultSelectPropsType & {
    options?: ThemesType[]
    onChangeOption?: (option: number) => void
}

const SuperSelect: React.FC<SuperSelectPropsType> = ({
    options,
    className,
    onChange,
    onChangeOption,
    ...restProps
}) => {
    const mappedOptions: JSX.Element[]  = options
        ? options.map((o) => (
              <option
                  id={'hw7-option-' + o.id}
                  className={s.option + o.id}
                  key={o.id}
                  value={o.id}

              >
                  {o.value}
              </option>
          ))
        : [] // map options with key

    const onChangeCallback = (e: ChangeEvent<HTMLSelectElement>) => {
        // делают студенты

        onChangeOption?.(+e.currentTarget.value)
    }

    // const finalSelectClassName = s.select + (className ? ' ' + className : '')
    const finalSelectClassName = s.select + (className ? ' ' + className : '')

    return (
        <select
            className={finalSelectClassName}
            onChange={onChangeCallback}
            {...restProps}
        >
            {mappedOptions}
        </select>
    )
}

export default SuperSelect
