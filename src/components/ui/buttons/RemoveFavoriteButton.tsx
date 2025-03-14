interface RemoveFavoriteButtonProps {
    onRemove: () => void;
}

export const RemoveFavoriteButton: React.FC<RemoveFavoriteButtonProps> = ({
    onRemove,
}) => {
    return (
        <button
            onClick={(e) => {
                e.stopPropagation();
                onRemove();
            }}
            className="absolute right-8 top-8 p-2 bg-white radius rounded transition-transform duration-300 ease-in-out hover:scale-105 cursor-pointer"
            aria-label="Remove from favorites"
        >
            <svg
                className="w-5 h-5"
                viewBox="0 0 512 512"
                fill="#ff4e4e"
                stroke="#ff4e4e"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <path d="M0 190.9V185.1C0 115.2 50.52 55.58 119.4 44.1C164.1 36.51 211.4 51.37 244 84.02L256 96L267.1 84.02C300.6 51.37 347 36.51 392.6 44.1C461.5 55.58 512 115.2 512 185.1V190.9C512 232.4 494.8 272.1 464.4 300.4L283.7 469.1C276.2 476.1 266.3 480 256 480C245.7 480 235.8 476.1 228.3 469.1L47.59 300.4C17.23 272.1 0 232.4 0 190.9z" />
                <line
                    x1="50"
                    y1="50"
                    x2="462"
                    y2="462"
                    stroke="white"
                    strokeWidth="6"
                    strokeLinecap="round"
                />
            </svg>
        </button>
    );
};
