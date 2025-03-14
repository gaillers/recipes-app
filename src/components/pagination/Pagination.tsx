import { PaginationProps } from '@/types';
import { usePagination } from '@/hooks';

export const Pagination: React.FC<PaginationProps> = ({ totalPages, currentPage, onPageChange }) => {
    const {
        displayedPages,
        goToPreviousPage,
        goToNextPage
    } = usePagination({
        totalPages,
        currentPage,
        onPageChange,
    });

    return (
        <nav aria-label="Page navigation example">
            <ul className="flex items-center -space-x-px h-10 text-base">
                <li>
                    <button
                        onClick={goToPreviousPage}
                        disabled={currentPage === 1 || totalPages === 0}
                        className={`flex items-center justify-center cursor-pointer px-4 h-10 ml-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg transition-colors hover:bg-gray-100 hover:text-gray-700 disabled:opacity-50`}
                    >
                        <span className="sr-only">Previous</span>
                        <svg
                            className="w-3 h-3 rtl:rotate-180"
                            aria-hidden="true"
                            fill="none"
                            viewBox="0 0 6 10"
                        >
                            <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M5 1L1 5l4 4"
                            />
                        </svg>
                    </button>
                </li>

                {displayedPages.map((page, index) =>
                    typeof page === "number" ? (
                        <li key={index}>
                            <button
                                onClick={() => onPageChange(page)}
                                className={`flex items-center justify-center px-4 h-10 leading-tight border border-gray-300 transition-colors 
                                ${currentPage === page
                                    ? "z-10 text-blue-600 border-blue-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 "
                                    : "text-gray-500 bg-white hover:bg-gray-100 hover:text-gray-700 cursor-pointer"
                                    }`}
                            >
                                {page}
                            </button>
                        </li>
                    ) : (
                        <li key={index}>
                            <span className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300">
                                {page}
                            </span>
                        </li>
                    )
                )}

                <li>
                    <button
                        onClick={goToNextPage}
                        disabled={currentPage === totalPages || totalPages === 0}
                        className={`flex items-center justify-center cursor-pointer px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg transition-colors hover:bg-gray-100 hover:text-gray-700 disabled:opacity-50`}
                    >
                        <span className="sr-only">Next</span>
                        <svg
                            className="w-3 h-3 rtl:rotate-180"
                            aria-hidden="true"
                            fill="none"
                            viewBox="0 0 6 10"
                        >
                            <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="m1 9 4-4-4-4"
                            />
                        </svg>
                    </button>
                </li>
            </ul>
        </nav>
    );
};

