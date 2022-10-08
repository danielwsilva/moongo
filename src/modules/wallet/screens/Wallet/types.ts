import { ExtractResponse } from 'services/api/wallet/types';

export type Extract = {
  [key: string]: {
    type: string;
    sub_type: string;
    value: number;
    created_at: string;
  }[];
};

export type SectionListType = {
  section: {
    title: string;
  };
};

export type SectionDataType = {
  title: string;
  data: ExtractResponse[];
};

export const FILTERS = [
  {
    id: 1,
    day: '7 dias'
  },
  {
    id: 2,
    day: '15 dias'
  },
  {
    id: 3,
    day: '30 dias'
  }
];
