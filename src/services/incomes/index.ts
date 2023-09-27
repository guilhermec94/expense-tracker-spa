import { PaginatedData } from "../common/types";
import {
  IncomeDTO,
  CreateIncomeDTO,
  UpdateIncomeDTO,
} from "../generated";
import client from "../api/configs";

export const GetAll = async (
  offset?: number,
  limit?: number
): Promise<PaginatedData<IncomeDTO>> => {
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

export const GetById = async (id: string): Promise<IncomeDTO> => {
  const data = await client.getIncome({ id });
  return data;
};

export const Create = async (request: CreateIncomeDTO): Promise<void> => {
  await client.addIncome({ requestBody: request });
};

export const Update = async (
  id: string,
  request: UpdateIncomeDTO
): Promise<void> => {
  await client.updateIncome({ id, requestBody: request });
};

export const Delete = async (id: string): Promise<void> => {
  const data = await client.deleteIncome({ id });
  return data;
};
