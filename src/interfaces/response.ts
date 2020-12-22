export default interface IResponse<T> {
  data: T;
  meta: {
    msg: string;
    status: number;
    response_id: string;
  };
  pagination: {
    offset: string;
    total_count: string;
    count: string;
  };
}
