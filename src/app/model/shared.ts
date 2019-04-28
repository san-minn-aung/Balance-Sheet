export enum accountCategory {
    FIXED_ASSET = 'Fixed Asset',
    CURRENT_ASSET = 'Current Asset',
    CAPITAL = 'Capital',
    LIABILITIES = 'Liabilities'
}

export var ACCOUNT_CATEGORY_NAMES: string[] = [
    accountCategory.FIXED_ASSET,
    accountCategory.CURRENT_ASSET,
    accountCategory.CAPITAL,
    accountCategory.LIABILITIES];