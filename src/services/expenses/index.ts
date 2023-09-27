import { PaginatedData } from "../common/types";
import {
  ExpenseDTO,
  CreateExpenseDTO,
  UpdateExpenseDTO,
} from "../generated";
import client from "../api/configs";

export const GetAll = async (
  offset?: number,
  limit?: number
): Promise<PaginatedData<ExpenseDTO>> => {
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

export const GetById = async (id: string): Promise<ExpenseDTO> => {
  const data = await client.getExpense({ id });
  return data;
};

export const Create = async (request: CreateExpenseDTO): Promise<void> => {
  await client.addExpense({ requestBody: request });
};

export const Update = async (
  id: string,
  request: UpdateExpenseDTO
): Promise<void> => {
  await client.updateExpense({ id, requestBody: request });
};

export const Delete = async (id: string): Promise<void> => {
  const data = await client.deleteExpense({ id });
  return data;
};
