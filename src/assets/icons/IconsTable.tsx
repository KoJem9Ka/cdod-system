export {}
// /* eslint-disable react/jsx-wrap-multilines,react/jsx-max-props-per-line */
// import React, {
//   FC,
//   SVGAttributes
// } from 'react'
//
//
//
// type TIconsTable = 'column_hider'
// | 'column_fixer'
// | 'paging_page_size'
// | 'paging_begin'
// | 'paging_prev'
// | 'paging_next'
// | 'paging_end'
//
// const IconsTable: FC<SVGAttributes<SVGSVGElement> & { icon: TIconsTable }> = ( { icon, ...props } ) => {
//   switch ( icon ) {
//   case 'column_fixer':
//     return <svg { ...props } height='16' viewBox='0 0 18 16' width='18' xmlns='http://www.w3.org/2000/svg'>
//       <path
//         d='M4.17934 3.5556V0H2.9624C1.48602 0 0.285156 1.0969 0.285156 2.4444V3.5556H4.17934ZM5.63965 4.8889V16H15.1317C16.6081 16 17.809 14.9031 17.809 13.5556V4.8889H5.63965ZM5.63965 3.5556H17.809V2.4444C17.809 1.0969 16.6081 0 15.1317 0H5.63965V3.5556ZM4.17934 4.8889H0.285156V13.5556C0.285156 14.9031 1.48602 16 2.9624 16H4.17934V4.8889Z'
//       />
//     </svg>
//   case 'column_hider':
//     return <svg { ...props } height='16' viewBox='0 0 19 16' width='19' xmlns='http://www.w3.org/2000/svg'>
//       <path
//         d='M5.02857 16H2.05714C0.922972 16 0 15.0499 0 13.8824V2.11765C0 0.95012 0.922972 0 2.05714 0H5.02857V16ZM6.4 16H11.8857V0H6.4V16ZM16.2286 16H13.2571V0H16.2286C17.3627 0 18.2857 0.95012 18.2857 2.11765V13.8824C18.2857 15.0499 17.3627 16 16.2286 16Z'
//       />
//     </svg>
//   case 'paging_page_size':
//     return <svg height='16' viewBox='0 0 17 16' width='17' xmlns='http://www.w3.org/2000/svg'>
//       <path
//         d='M0.238281 10.2222H17.0002V5.77778H0.238281V10.2222ZM17.0002 11.5556V13.5556C17.0002 14.9031 15.8515 16 14.4394 16H2.79913C1.38694 16 0.238281 14.9031 0.238281 13.5556V11.5556H17.0002ZM0.238281 4.44444V2.44444C0.238281 1.09689 1.38694 0 2.79913 0H14.4394C15.8515 0 17.0002 1.09689 17.0002 2.44444V4.44444H0.238281Z'
//       />
//     </svg>
//   case 'paging_begin':
//     return <svg { ...props } height='16' viewBox='0 0 21 16' width='21' xmlns='http://www.w3.org/2000/svg'>
//       <path
//         d='M18.8772 15.9983C18.4831 16.0157 18.0811 15.9035 17.7442 15.6293L11.2387 10.3313V14.3593C11.2387 15.3808 10.2552 16.0781 9.30846 15.9927C8.9929 15.9642 8.68094 15.8487 8.41145 15.6293L0.603169 9.27076L0.60221 9.26983C-0.201113 8.61478 -0.200679 7.38445 0.603169 6.72978L8.41145 0.370361C9.4894 -0.507123 11.2387 0.278308 11.2387 1.64039V5.66833L17.7442 0.370361C18.8221 -0.507123 20.5714 0.278308 20.5714 1.64039V14.3593C20.5714 15.2957 19.7443 15.9599 18.8772 15.9983Z'
//       />
//     </svg>
//   case 'paging_prev':
//     return <svg { ...props } height='16' viewBox='0 0 12 16' width='12' xmlns='http://www.w3.org/2000/svg'>
//       <path
//         d='M11.2389 1.64042V14.3595C11.2389 15.3811 10.3054 16.0783 9.40693 15.9929C9.10743 15.9645 8.81136 15.8489 8.55558 15.6295L1.14473 9.27095L1.14382 9.27002C0.381389 8.61495 0.381801 7.3846 1.14473 6.72991L8.55558 0.370368C9.57867 -0.507133 11.2389 0.278315 11.2389 1.64042Z'
//       />
//     </svg>
//   case 'paging_next':
//     return <svg { ...props } height='16' viewBox='0 0 12 16' width='12' xmlns='http://www.w3.org/2000/svg'>
//       <path
//         d='M0.238282 14.3596L0.238281 1.64052C0.238281 0.61894 1.23845 -0.0783232 2.20114 0.00706288C2.52204 0.0355249 2.83926 0.15109 3.1133 0.370464L11.0535 6.72908L11.0545 6.73001C11.8713 7.38508 11.8709 8.61543 11.0535 9.27011L3.1133 15.6296C2.01714 16.5071 0.238283 15.7217 0.238282 14.3596Z'
//       />
//     </svg>
//   case 'paging_end':
//     return <svg { ...props } height='16' viewBox='0 0 22 16' width='22' xmlns='http://www.w3.org/2000/svg'>
//       <path
//         d='M2.36026 0.00174729C2.75437 -0.0156767 3.15642 0.0964914 3.49327 0.370706L9.99874 5.6687V1.64074C9.99874 0.619169 10.9823 -0.0780768 11.929 0.0073083C12.2445 0.0357703 12.5565 0.151334 12.826 0.370705L20.6343 6.72922L20.6352 6.73015C21.4385 7.38521 21.4381 8.61554 20.6343 9.27021L12.826 15.6296C11.7481 16.5071 9.99874 15.7217 9.99874 14.3596V10.3317L3.49327 15.6296C2.41532 16.5071 0.666017 15.7217 0.666017 14.3596L0.666016 1.64074C0.666016 0.704309 1.49321 0.0400804 2.36026 0.00174729Z'
//       />
//     </svg>
//   }
// }
//
// export default IconsTable