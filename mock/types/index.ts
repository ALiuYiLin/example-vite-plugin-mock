export interface ResponseData<T = any>{
  code: number,
  data: T,
  message: string
}

export interface MockRequestParams{
  url: string
  query: Record<string,any>
  body: any
  headers: Record<string, string>
}
