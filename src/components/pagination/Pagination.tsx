import React from 'react';

import { PaginationProps } from '@/types';
import { usePagination } from '@/hooks';

export const Pagination: React.FC<PaginationProps> = ({
    totalPages,
    currentPage,
    onPageChange,
}) => {
    const { displayedPages, goToPreviousPage, goToNextPage } = usePagination({
        totalPages,
        currentPage,
        onPageChange,
    });

    return (
        <nav className="flex items-center justify-center my-3">

            <button
                onClick={goToPreviousPage}
                disabled={currentPage === 1 || totalPages === 0}
                className="px-3 py-1 border cursor-pointer border-orange-300 rounded-l disabled:opacity-50
                   hover:bg-orange-100 transition-colors text-orange-600"
            >
                &laquo;
            </button>

            {displayedPages.map((page, index) =>
                typeof page === 'number' ? (
                    <button
                        key={index}
                        onClick={() => onPageChange(page)}
                        className={`px-3 py-1 border-t border-b border-orange-300 cursor-pointer
                        ${currentPage === page
                                ? 'bg-orange-500 text-white'
                                : 'bg-white text-orange-600 hover:bg-orange-100'
                            }`}
                    >
                        {page}
                    </button>
                ) : (
                    <span
                        key={index}
                        className="px-3 py-1 border-t border-b border-orange-300 text-orange-600"
                    >
                        {page}
                    </span>
                )
            )}

            <button
                onClick={goToNextPage}
                disabled={currentPage === totalPages || totalPages === 0}
                className="px-3 py-1 border border-orange-300 rounded-r disabled:opacity-50 cursor-pointer
                   hover:bg-orange-100 transition-colors text-orange-600"
            >
                &raquo;
            </button>
        </nav>
    );
};
