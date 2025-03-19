
import Link from "next/link";
import { useSelectedRecipes } from "@/hooks";

export const CounterFavorites: React.FC = () => {
    const { selectedRecipesCount } = useSelectedRecipes();

    return (
        <Link
            href="/favorites"
            className="relative inline-flex items-center px-2 py-2 font-markRegular hover:text-cyan-500 transition-colors gap-2"
        >
            Favorites

            <span
                id="nav-favorites-count"
                className="absolute -top-0 -right-3 font-markRegular bg-gray-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center"
            >
                {selectedRecipesCount}
            </span>
        </Link>
    )
}

