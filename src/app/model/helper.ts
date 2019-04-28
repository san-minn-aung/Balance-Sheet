import { accountCategory } from './shared';

export const isAsset = (item) => item.type === accountCategory.FIXED_ASSET || item.type === accountCategory.CURRENT_ASSET;
export const isCapital = (item) => item.type === accountCategory.CAPITAL;
export const isLiabilities = (item) => item.type === accountCategory.LIABILITIES;
export const sumCost = (sum, item) => sum + Number(item.cost);