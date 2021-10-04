export const PAGINATION_CONFIG = {
  showSizeChanger: true,
  size: "small",
  showTotal: (total, range) => `${range[1] - range[0] + 1} de ${total}`,
  pageSizeOptions: ["5", "10", "15", "20"],
};