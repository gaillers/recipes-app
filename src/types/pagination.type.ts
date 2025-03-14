export interface PaginationProps {
    totalPages: number;
    currentPage: number;
    onPageChange: (page: number) => void;
}
export interface PaginationUseResult {
    displayedPages: (number | string)[];
    goToPreviousPage: () => void;
    goToNextPage: () => void;
}