/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { CategoryDTO } from './CategoryDTO';
import type { Id } from './Id';

export type ExpenseDTO = {
    id?: Id;
    title?: string;
    description?: string;
    date?: string;
    category?: CategoryDTO;
};
