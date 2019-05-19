import { buildURL, doSearchRequest } from './util'

export default async function cmrGranuleSearch(event) {
  const { body, requestContext } = event
  const { jwtToken } = requestContext.authorizer

  // Whitelist parameters supplied by the request
  const permittedCmrKeys = [
    'echo_collection_id',
    'format',
    'page_num',
    'page_size',
    'sort_key'
  ]

  return doSearchRequest(jwtToken, buildURL({
    body,
    path: '/search/granules.json',
    permittedCmrKeys
  }))
}