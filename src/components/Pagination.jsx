// import React from "react";
// import {
//   LuChevronLeft,
//   LuChevronRight,
//   LuChevronsLeft,
//   LuChevronsRight,
// } from "react-icons/lu";
// import { useSearchParams } from "react-router-dom";

// const Pagination = ({
//   links: { prev, next, first, last } = {
//     prev: null,
//     next: null,
//     first: null,
//     last: null,
//   },
//   meta: { total, to, from, links, per_page, current_page, last_page, path } = {
//     total: 0,
//     to: 0,
//     from: 0,
//     per_page: 0,
//     current_page: 0,
//     last_page: 0,
//     links: [],
//     path: "",
//   },
//   updateFetchUrl,
// }) => {
//   const [params, setParams] = useSearchParams();
//   const currentLimit = params.get("limit") ?? 5;
//   const pageLimits = [5, 10, 20, 50, 100];

//   const handleRowLimitSelect = (e) => {
//     setParams({ page: 1, limit: e.target.value });
//     updateFetchUrl(`${path}?page=1&limit=${e.target.value}`);
//     // mutate(import.meta.env.VITE_API_URL + `/products`);
//     console.log(e.target.value);
//   };
//   console.log("prev", prev);
//   console.log("next", next);
//   console.log("first", first);
//   console.log("last", last);
//   return (
//     <div className="flex justify-between items-center ">
//       <span className="text-sm text-gray-700 dark:text-gray-400">
//         Showing <b>{from ?? 0}</b> to <b>{to ?? 0}</b> of <b>{total ?? 0}</b>{" "}
//         Entries
//       </span>

//       <div className=" flex gap-3 items-center">
//         <div className=" flex items-center gap-2">
//           <label
//             htmlFor="countries"
//             className="block text-gray-700 text-sm text-nowrap dark:text-white"
//           >
//             Rows per page
//           </label>
//           <select
//             onChange={handleRowLimitSelect}
//             className="flex items-center justify-center h-10 text-sm font-medium border-y border rounded-lg border-gray-200  dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white disabled:opacity-50 disabled:pointer-events-none"
//             value={currentLimit}
//           >
//             {pageLimits.map((limit, index) => (
//               <option key={index} value={limit}>
//                 {limit}
//               </option>
//             ))}
//           </select>
//         </div>

//         <span className="text-sm text-gray-700 dark:text-gray-400">
//           Page <b>{current_page ?? 0}</b> of <b>{last_page ?? 0}</b>
//         </span>
//         <div className="inline-flex">
//           <button
//             disabled={!prev}
//             onClick={() => updateFetchUrl(prev)}
//             className={`
//               flex items-center cursor-pointer justify-center size-10 text-sm font-medium border-y first:border-l last:border-r border-gray-200 first:rounded-l-lg last:rounded-r-lg dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white disabled:opacity-50 disabled:pointer-events-none`}
//           >
//             <LuChevronLeft />
//           </button>
//           <button
//             disabled={!first}
//             onClick={() => updateFetchUrl(first)}
//             className={`
//               flex items-center cursor-pointer justify-center size-10 text-sm font-medium border-y first:border-l last:border-r border-gray-200 first:rounded-l-lg last:rounded-r-lg dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white disabled:opacity-50 disabled:pointer-events-none`}
//           >
//             <LuChevronsLeft />
//           </button>
//           <button
//             disabled={!last}
//             onClick={() => updateFetchUrl(last)}
//             className={`
//               flex items-center cursor-pointer justify-center size-10 text-sm font-medium border-y first:border-l last:border-r border-gray-200 first:rounded-l-lg last:rounded-r-lg dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white disabled:opacity-50 disabled:pointer-events-none`}
//           >
//             <LuChevronsRight />
//           </button>
//           <button
//             disabled={!next}
//             onClick={() => updateFetchUrl(next)}
//             className={`
//               flex items-center cursor-pointer justify-center size-10 text-sm font-medium border-y first:border-l last:border-r border-gray-200 first:rounded-l-lg last:rounded-r-lg dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white disabled:opacity-50 disabled:pointer-events-none`}
//           >
//             <LuChevronRight />
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Pagination;
// ===========================

import React from "react";
import {
  LuChevronLeft,
  LuChevronRight,
  LuChevronsLeft,
  LuChevronsRight,
} from "react-icons/lu";
import { useSearchParams } from "react-router-dom";

const Pagination = ({
  links: { prev, next, first, last } = {
    prev: null,
    next: null,
    first: null,
    last: null,
  },

  meta: { from, to, total, path, current_page, last_page } = {
    from: 0,
    to: 0,
    total: 0,
    path: 0,
  },
  updateFetchUrl,
}) => {
  const pageLimits = [5, 10, 20, 50, 100];
  const [params, setParams] = useSearchParams();
  const currentLimit = params.get("limit") ?? 5;
  const handleRowLimitSelect = (e) => {
    // setParams({ page: 1, limit: e.target.value });
    updateFetchUrl(`${path}?page=1&limit=${e.target.value}`);
  };
  // console.log(prev, next, first, last);
  return (
    <div className=" flex justify-between items-center mt-3">
      <div className="flex items-center gap-2">
        <p className="text-md text-gray-700 dark:text-gray-400 flex gap-1  items-center">
          Showing <b>{from}</b>to <b>{to}</b>of <b>{total}</b> Entries
        </p>
      </div>
      <div className="flex gap-2 items-center">
        <div className="max-w-sm mx-auto flex items-center justify-center gap-3">
          <label
            htmlFor="countries"
            className="block  text-sm font-medium text-gray-900 dark:text-white"
          >
            Rows per page
          </label>
          <select
            id="countries"
            onChange={handleRowLimitSelect}
            className="  flex items-center h-10 cursor-pointer  bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            value={currentLimit}
          >
            {pageLimits.map((limit, index) => (
              <option key={index} value={limit}>
                {limit}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="">
        <span className="text-sm text-gray-700 dark:text-gray-400">
          Page <b>{current_page ?? 0}</b> of <b>{last_page ?? 0}</b>
        </span>
        <div className="inline-flex">
          <button
            disabled={!prev}
            onClick={() => updateFetchUrl(prev)}
            className={`
              flex items-center cursor-pointer justify-center size-10 text-sm font-medium border-y first:border-l last:border-r border-gray-200 first:rounded-l-lg last:rounded-r-lg dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white disabled:opacity-50 disabled:pointer-events-none`}
          >
            <LuChevronLeft />
          </button>
          <button
            disabled={!first}
            onClick={() => updateFetchUrl(first)}
            className={`
              flex items-center cursor-pointer justify-center size-10 text-sm font-medium border-y first:border-l last:border-r border-gray-200 first:rounded-l-lg last:rounded-r-lg dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white disabled:opacity-50 disabled:pointer-events-none`}
          >
            <LuChevronsLeft />
          </button>
          <button
            disabled={!last}
            onClick={() => updateFetchUrl(last)}
            className={`
              flex items-center cursor-pointer justify-center size-10 text-sm font-medium border-y first:border-l last:border-r border-gray-200 first:rounded-l-lg last:rounded-r-lg dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white disabled:opacity-50 disabled:pointer-events-none`}
          >
            <LuChevronsRight />
          </button>
          <button
            disabled={!next}
            onClick={() => updateFetchUrl(next)}
            className={`
              flex items-center cursor-pointer justify-center size-10 text-sm font-medium border-y first:border-l last:border-r border-gray-200 first:rounded-l-lg last:rounded-r-lg dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white disabled:opacity-50 disabled:pointer-events-none`}
          >
            <LuChevronRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Pagination;
