import React , {ChangeEvent , SyntheticEvent} from 'react'
import SuperSelect from '../../../hw07/common/c5-SuperSelect/SuperSelect'
import Pagination from '@mui/material/Pagination'
import s from './SuperPagination.module.css'

export type SuperPaginationPropsType = {
    id?: string
    page: number
    itemsCountForPage: number
    totalCount: number
    onChange: (page: number, count: number) => void
}

const SuperPagination: React.FC<SuperPaginationPropsType> = (
    {
        page, itemsCountForPage, totalCount, onChange, id = 'hw15',
    }
) => {
    const lastPage = Math.floor(totalCount/itemsCountForPage ) // пишет студент // вычислить количество страниц
  console.log (itemsCountForPage)
    const onChangeCallback = (event:any, page: number) => {
      // onChangeSelect(page)
      // onChangeSelect(page)

onChange(page,itemsCountForPage)
      // onChange(page)
        // пишет студент
      console.log (page)
      // onChange(e, page)
      // onChange(pages,event.target.innerText)

      // console.log (event.target.innerText)
    }

    const onChangeSelect = (event: number) => {
      onChange(page,event)
      console.log (event)
        // пишет студентChangeEventHandler
      // console.log (event)
      // onChange(totalCount, page)
      // onChangeCallback(page,pagesElement)

      // console.log (page,event)
      // onChange(page,event)
    }

    return (
        <div className={s.pagination}>
            <Pagination
                id={id + '-pagination'}
                sx={{
                    // стили для Pagination // пишет студент
                }}
                variant="outlined" shape="rounded"
                page={page}
                count={lastPage}
                onChange={onChangeCallback}
                hideNextButton
                hidePrevButton
            />

            <span className={s.text1}>
                показать
            </span>

            <SuperSelect
                id={id + '-pagination-select'}
                value={itemsCountForPage}
                options={[
                    {id: 4, value: 4},
                    {id: 7, value: 7},
                    {id: 10, value: 10},
                ]}
                onChangeOption={onChangeSelect}
            />

            <span className={s.text2}>
                строк в таблице
            </span>
        </div>
    )
}

export default SuperPagination
