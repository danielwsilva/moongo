import { QueryKey } from '@tanstack/react-query';

export const createMe = (): QueryKey => [`useMe`];
export const createStock = (): QueryKey => [`useStock`];
export const createSupplyPending = (): QueryKey => [`useSupplyPending`];
