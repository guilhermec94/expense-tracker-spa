import { PaginatedData } from "../common/types";
import {
  CategoryDTO,
  CreateCategoryDTO,
  UpdateCategoryDTO,
} from "../generated";
import client from "../api/configs";

export const GetAll = async (
  offset?: number,
  limit?: number
): Promise<PaginatedData<CategoryDTO>> => {
  const res = await client.getAllCategories({ offset, limit });
  return {
    data: res.data ?? [],
    pagination: {
      totalRecords: res.pagination.total_records,
      page: res.pagination.page,
      perPage: res.pagination.per_page,
    },
  };
};

export const GetById = async (id: string): Promise<CategoryDTO> => {
  const data = await client.getCategory({ id });
  return data;
};

export const Create = async (request: CreateCategoryDTO): Promise<void> => {
  await client.addCategory({ requestBody: request });
};

export const Update = async (
  id: string,
  request: UpdateCategoryDTO
): Promise<void> => {
  await client.updateCategory({ id, requestBody: request });
};

export const Delete = async (id: string): Promise<void> => {
  const data = await client.deleteCategory({ id });
  return data;
};
