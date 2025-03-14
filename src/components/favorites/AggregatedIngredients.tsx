import { AggregatedIngredientsProps } from "@/types";

export const AggregatedIngredients: React.FC<AggregatedIngredientsProps> = ({
  ingredients,
}) => {
  if (!ingredients.length) return null;

  return (
    <div className="mt-6">
      <h2 className="text-2xl font-bold mb-3 text-center">Aggregated Ingredients</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full table-auto border-collapse border border-gray-300">
          <thead className="bg-gray-100">
            <tr>
              <th className="border p-3 text-left text-sm font-medium text-gray-700">
                Ingredient
              </th>
              <th className="border p-3 text-left text-sm font-medium text-gray-700">
                Quantity
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {ingredients.map((item, idx) => (
              <tr key={idx} className="hover:bg-gray-50">
                <td className="border p-3 text-sm text-gray-800">{item.ingredient}</td>
                <td className="border p-3 text-sm text-gray-800">{item.measure}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
