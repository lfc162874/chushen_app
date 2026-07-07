export interface CreateRecipeDTO {
  title: string;
  cover?: string;
  description?: string;
  difficulty?: string;
  cookMinutes?: number;
  authorId: string;
  categoryId?: string;
}

export interface UpdateRecipeDTO {
  title?: string;
  cover?: string;
  description?: string;
  difficulty?: string;
  cookMinutes?: number;
}
