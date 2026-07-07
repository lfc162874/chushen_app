export interface PageQuery {
  page?: number;
  pageSize?: number;
}

export function buildPagination(query: PageQuery) {
  const page = Math.max(query.page ?? 1, 1);
  const pageSize = Math.min(query.pageSize ?? 20, 100);

  return {
    skip: (page - 1) * pageSize,
    take: pageSize,
    page,
    pageSize
  };
}
