/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CategoryDTO } from '../models/CategoryDTO';
import type { CreateCategoryDTO } from '../models/CreateCategoryDTO';
import type { CreateExpenseDTO } from '../models/CreateExpenseDTO';
import type { CreateIncomeDTO } from '../models/CreateIncomeDTO';
import type { ExpenseDTO } from '../models/ExpenseDTO';
import type { Id } from '../models/Id';
import type { IncomeDTO } from '../models/IncomeDTO';
import type { PaginationDTO } from '../models/PaginationDTO';
import type { UpdateCategoryDTO } from '../models/UpdateCategoryDTO';
import type { UpdateExpenseDTO } from '../models/UpdateExpenseDTO';
import type { UpdateIncomeDTO } from '../models/UpdateIncomeDTO';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class DefaultService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Fetch a list of categories
     * @returns any A list of categories
     * @throws ApiError
     */
    public getAllCategories({
offset,
limit,
}: {
/**
 * The number of items to skip before starting to collect the result set
 */
offset?: number,
/**
 * The numbers of items to return
 */
limit?: number,
}): CancelablePromise<{
data: Array<CategoryDTO>;
pagination: PaginationDTO;
}> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/categories',
            query: {
                'offset': offset,
                'limit': limit,
            },
            errors: {
                500: `Unexpected error`,
            },
        });
    }

    /**
     * Create a new category entry
     * @returns CategoryDTO The newly created category
     * @throws ApiError
     */
    public addCategory({
requestBody,
}: {
/**
 * Category payload
 */
requestBody?: CreateCategoryDTO,
}): CancelablePromise<CategoryDTO> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/categories',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                500: `Unexpected error`,
            },
        });
    }

    /**
     * Fetch a category
     * @returns CategoryDTO A category
     * @throws ApiError
     */
    public getCategory({
id,
}: {
/**
 * The unique identifier
 */
id: Id,
}): CancelablePromise<CategoryDTO> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/categories/{id}',
            path: {
                'id': id,
            },
            errors: {
                404: `No category found for the provided \`Id\``,
                500: `Unexpected error`,
            },
        });
    }

    /**
     * Update an existing category entry
     * @returns void 
     * @throws ApiError
     */
    public updateCategory({
id,
requestBody,
}: {
/**
 * The unique identifier
 */
id: Id,
/**
 * Category payload
 */
requestBody?: UpdateCategoryDTO,
}): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/categories/{id}',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                500: `Unexpected error`,
            },
        });
    }

    /**
     * Delete an category
     * @returns any A category deleted
     * @throws ApiError
     */
    public deleteCategory({
id,
}: {
/**
 * The unique identifier
 */
id: Id,
}): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/categories/{id}',
            path: {
                'id': id,
            },
            errors: {
                404: `No category found for the provided \`Id\``,
                500: `Unexpected error`,
            },
        });
    }

    /**
     * Fetch a list of expenses
     * @returns any A list of expenses
     * @throws ApiError
     */
    public getAllExpenses({
offset,
limit,
}: {
/**
 * The number of items to skip before starting to collect the result set
 */
offset?: number,
/**
 * The numbers of items to return
 */
limit?: number,
}): CancelablePromise<{
data: Array<ExpenseDTO>;
pagination: PaginationDTO;
}> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/expenses',
            query: {
                'offset': offset,
                'limit': limit,
            },
            errors: {
                500: `Unexpected error`,
            },
        });
    }

    /**
     * Create a new expense entry
     * @returns ExpenseDTO The newly created expense
     * @throws ApiError
     */
    public addExpense({
requestBody,
}: {
/**
 * Expense payload
 */
requestBody?: CreateExpenseDTO,
}): CancelablePromise<ExpenseDTO> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/expenses',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                500: `Unexpected error`,
            },
        });
    }

    /**
     * Fetch a expense
     * @returns ExpenseDTO A expense
     * @throws ApiError
     */
    public getExpense({
id,
}: {
/**
 * The unique identifier
 */
id: Id,
}): CancelablePromise<ExpenseDTO> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/expenses/{id}',
            path: {
                'id': id,
            },
            errors: {
                404: `No expense found for the provided \`Id\``,
                500: `Unexpected error`,
            },
        });
    }

    /**
     * Update an existing expense entry
     * @returns void 
     * @throws ApiError
     */
    public updateExpense({
id,
requestBody,
}: {
/**
 * The unique identifier
 */
id: Id,
/**
 * Expense payload
 */
requestBody?: UpdateExpenseDTO,
}): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/expenses/{id}',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                500: `Unexpected error`,
            },
        });
    }

    /**
     * Delete an expense
     * @returns any A expense deleted
     * @throws ApiError
     */
    public deleteExpense({
id,
}: {
/**
 * The unique identifier
 */
id: Id,
}): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/expenses/{id}',
            path: {
                'id': id,
            },
            errors: {
                404: `No expense found for the provided \`Id\``,
                500: `Unexpected error`,
            },
        });
    }

    /**
     * Fetch a list of incomes
     * @returns any A list of incomes
     * @throws ApiError
     */
    public getAllIncomes({
offset,
limit,
}: {
/**
 * The number of items to skip before starting to collect the result set
 */
offset?: number,
/**
 * The numbers of items to return
 */
limit?: number,
}): CancelablePromise<{
data: Array<IncomeDTO>;
pagination: PaginationDTO;
}> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/incomes',
            query: {
                'offset': offset,
                'limit': limit,
            },
            errors: {
                500: `Unexpected error`,
            },
        });
    }

    /**
     * Create a new income entry
     * @returns IncomeDTO The newly created incomes
     * @throws ApiError
     */
    public addIncome({
requestBody,
}: {
/**
 * Income payload
 */
requestBody?: CreateIncomeDTO,
}): CancelablePromise<IncomeDTO> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/incomes',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                500: `Unexpected error`,
            },
        });
    }

    /**
     * Fetch a income
     * @returns IncomeDTO A income
     * @throws ApiError
     */
    public getIncome({
id,
}: {
/**
 * The unique identifier
 */
id: Id,
}): CancelablePromise<IncomeDTO> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/incomes/{id}',
            path: {
                'id': id,
            },
            errors: {
                404: `No income found for the provided \`Id\``,
                500: `Unexpected error`,
            },
        });
    }

    /**
     * Update an existing income entry
     * @returns void 
     * @throws ApiError
     */
    public updateIncome({
id,
requestBody,
}: {
/**
 * The unique identifier
 */
id: Id,
/**
 * Income payload
 */
requestBody?: UpdateIncomeDTO,
}): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/incomes/{id}',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                500: `Unexpected error`,
            },
        });
    }

    /**
     * Delete an income
     * @returns any A income deleted
     * @throws ApiError
     */
    public deleteIncome({
id,
}: {
/**
 * The unique identifier
 */
id: Id,
}): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/incomes/{id}',
            path: {
                'id': id,
            },
            errors: {
                404: `No income found for the provided \`Id\``,
                500: `Unexpected error`,
            },
        });
    }

}
