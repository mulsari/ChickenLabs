export interface NutritionData {
    calories: number;
    protein: number;
    fat: number;
    carbohydrate: number;
    sugars: number;
    sodium: number;
    cholesterol: number;
    saturated_fat: number;
    weight: number;
}

export interface BrandAverages {
    [brand: string]: NutritionData;
}