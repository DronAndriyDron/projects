import { createHash } from 'crypto';

export const md5Hash = (text: string) => {
  return createHash('md5').update(text).digest('hex');
};

export const sanitizeWithRelations = (
  allowed: string[],
  withRelations: string,
) => {
  if (withRelations == 'all') return allowed;

  const withRelationsArray = withRelations.split(',');
  const result = [];
  for (const item of withRelationsArray) {
    if (allowed.indexOf(item) > -1) {
      result.push(item);
    }
  }
  return result;
};


/// ColumnNumericTransformer
export class ColumnNumericTransformer {
  to(data: number): number {
    return data;
  }
  from(data: string): number {
    return parseFloat(data);
  }
}
