import request from './request';

export interface HttpResponse {
  status: number
  success?: boolean
  traceId?: string
  data: any
}

export const login = async (data = {}): Promise<HttpResponse> => request('/接口', {
  method: 'post',
  data,
});
