import { useEffect, useState } from 'react'

export const tablePagination = <TDataArray extends object[]>(dataOriginal: TDataArray, paginatable?: boolean) => {
  const [ onePageCount, setOnePageCount ] = useState( 15 )
  const [ currentPage, setCurrentPage ] = useState( 0 )

  const elementsCount = dataOriginal.length
  const lastPage = Math.ceil( elementsCount / onePageCount ) - 1

  const [ {
    canNextPage,
    canPreviousPage,
  }, setCans ] = useState( {
    canPreviousPage: false,
    canNextPage    : lastPage > 0,
  } )

  const dataPaginated = !paginatable ? dataOriginal :
    dataOriginal.slice(
      currentPage * onePageCount,
      (currentPage + 1) * onePageCount
    ) as TDataArray

  useEffect( () => {
    setCans( {
      canPreviousPage: currentPage > 0,
      canNextPage    : currentPage < lastPage,
    } )
    if (currentPage > lastPage)
      setCurrentPage( lastPage )
    if (elementsCount && currentPage < 0)
      setCurrentPage( 0 )
  }, [ elementsCount, currentPage, onePageCount, lastPage ] )

  return ({
    onePageCount,
    setOnePageCount,

    currentPage   : currentPage + 1,
    setCurrentPage: (value: number) => setCurrentPage( value - 1 ),

    canNextPage,
    canPreviousPage,

    lastPage: lastPage + 1,

    dataPaginated,
  })
}
