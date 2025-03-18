import { useMemo } from "react";

import { PaginationProps } from '@/types';
import { useQueryParams } from "@/hooks";
import { usePagination } from '@/hooks';

export const Pagination: React.FC<PaginationProps> = ({ totalPages, onPageChange }) => {
    const { searchParams, setQueryParam } = useQueryParams();

    const currentPage = useMemo(() => {
        return Number(searchParams?.get("page")) || 1;
    }, [searchParams]);

    const { displayedPages, goToPreviousPage, goToNextPage } = usePagination({
        totalPages,
        currentPage,
        onPageChange: (page) => {
            if (page === 1) {
                setQueryParam("page", "");
            } else {
                setQueryParam("page", String(page));
            }
        },
    });

    return (
        <nav aria-label="Page navigation">
            <ul className="flex items-center -space-x-px h-10 text-base">
                <li>
                    <button
                        onClick={goToPreviousPage}
                        disabled={currentPage === 1 || totalPages === 0}
                        className="flex items-center justify-center cursor-pointer px-4 h-10 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-s-lg transition-colors hover:bg-gray-100 hover:text-gray-700 disabled:opacity-50"
                    >
                        <span className="sr-only">Previous</span>
                        <svg className="w-3 h-3 rtl:rotate-180" aria-hidden="true" fill="none" viewBox="0 0 6 10">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1L1 5l4 4" />
                        </svg>
                    </button>
                </li>

                {displayedPages.map((page, index) =>
                    typeof page === 'number' ? (
                        <li key={index} className="hidden sm:block">
                            <button
                                onClick={() => onPageChange(page)}
                                className={`flex items-center justify-center px-4 h-10 leading-tight border border-gray-300 transition-colors 
                                    ${currentPage === page ? 'z-10 text-blue-600 border-blue-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700' : 'text-gray-500 bg-white hover:bg-gray-100 hover:text-gray-700 cursor-pointer'
                                    }`}
                            >
                                {page}
                            </button>
                        </li>
                    ) : (
                        <li key={index} className="hidden sm:block">
                            <span className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300">
                                {page}
                            </span>
                        </li>
                    )
                )}

                <li className="block sm:hidden">
                    <span className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300">
                        {currentPage} / {totalPages}
                    </span>
                </li>

                <li>
                    <button
                        onClick={goToNextPage}
                        disabled={currentPage === totalPages || totalPages === 0}
                        className="flex items-center justify-center cursor-pointer px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg transition-colors hover:bg-gray-100 hover:text-gray-700 disabled:opacity-50"
                    >
                        <span className="sr-only">Next</span>
                        <svg className="w-3 h-3 rtl:rotate-180" aria-hidden="true" fill="none" viewBox="0 0 6 10">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
                        </svg>
                    </button>
                </li>
            </ul>
        </nav>
    );
};

