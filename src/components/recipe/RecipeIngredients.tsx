import { RecipeIngredientsProps } from "@/types";

export const RecipeIngredients: React.FC<RecipeIngredientsProps> = ({ ingredients }) => {
    if (!ingredients.length) return null;

    return (
        <div className="mt-6">
            <h2 className="text-2xl font-bold mb-2">Ingredients</h2>
            <div className="overflow-x-auto">
                <table className="w-full table-auto border border-gray-300">
                    <thead className="bg-gray-100">
                        <tr>
                            <th className="border p-3 text-left">Ingredient</th>
                            <th className="border p-3 text-left">Measure</th>
                        </tr>
                    </thead>
                    <tbody>
                        {ingredients.map((item, idx) => (
                            <tr key={idx} className="hover:bg-gray-50">
                                <td className="border p-3">{item.ingredient}</td>
                                <td className="border p-3">{item.measure}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};
