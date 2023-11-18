import React from 'react'
import SuperSelect from '../../../hw07/common/c5-SuperSelect/SuperSelect'
import Pagination from '@mui/material/Pagination'
import s from './SuperPagination.module.css'
import {createTheme} from '@mui/material/styles';
import {ThemeProvider} from "@mui/material";


export type SuperPaginationPropsType = {
    id?: string
    page: number
    itemsCountForPage: number
    totalCount: number
    onChange: (page: number, count: number) => void;
}


const SuperPagination: React.FC<SuperPaginationPropsType> = (
    {
        page, itemsCountForPage, totalCount, onChange, id = 'hw15',
    }
) => {
    const lastPage = Math.floor(totalCount/itemsCountForPage ) // пишет студент // вычислить количество страниц
    const onChangeCallback = (event:any, page: number) => {
    onChange(page,itemsCountForPage)
    }

    const onChangeSelect = (event: number) => {
      onChange(page,event)
    }
  const theme = createTheme({
    components: {
      MuiPaginationItem:{
        styleOverrides: {
          root: ({ ownerState }) => ({
            ...(
              ownerState.page === page && {
                ":nth-of-type(1)":{
                              backgroundColor:"#0066CC",
                               color:'white',
                            },
                ":nth-of-type(1):hover":{
                              backgroundColor:"#0066CC",
                               color:'white',
                            },
              }),
          }),
        },
      }
    },
  });


    return (
      <ThemeProvider theme={theme}>
        <div className={s.pagination}>

            <Pagination
                id={id + '-pagination'}
                sx={{}}
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
               className={s.select}
            />

            <span className={s.text2}>
                строк в таблице
            </span>
        </div>


      </ThemeProvider>
    )
}

export default SuperPagination




// function ColorShowcase({ color }: {  color: string }) {
//   return (
//     <Stack gap={1} alignItems="center">
//           <Pagination sx={{ bgcolor: `${color}.light` }} variant="outlined" shape="rounded"
//                        />
//           <Pagination sx={{ bgcolor: `${color}.main`}} variant="outlined" shape="rounded"
//                      />
//           <Pagination sx={{ bgcolor: `${color}.dark` }} variant="outlined" shape="rounded"
//                        />
//     </Stack>
//   );
// }
//
// export default function TonalOffset() {
//   return (
//       <ThemeProvider theme={defaultTonalOffsetTheme}>
//         <ColorShowcase color="primary" />
//       </ThemeProvider>
//   );
// }