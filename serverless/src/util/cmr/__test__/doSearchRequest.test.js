import jwt from 'jsonwebtoken'
import request from 'request-promise'
import { doSearchRequest } from '../doSearchRequest'
import * as getEarthdataConfig from '../../../../../sharedUtils/config'

describe('util#doSearchRequest', () => {
  test('correctly returns the search response', async () => {
    const body = { success: true }
    const headers = {
      'access-control-expose-headers': 'jwt-token',
      'jwt-token': '123.456.789'
    }
    const statusCode = 200
    const expectedResponse = {
      body,
      headers,
      statusCode
    }

    jest.spyOn(request, 'get').mockImplementation(() => ({
      body,
      headers: {},
      statusCode
    }))

    const token = {
      token: {
        access_token: '123'
      }
    }

    jest.spyOn(jwt, 'verify').mockImplementation(() => token)
    jest.spyOn(getEarthdataConfig, 'getSecretEarthdataConfig').mockImplementation(() => ({ clientId: 'clientId' }))

    const jwtToken = '123.456.789'
    const url = 'http://example.com/search/path?param1=123&param2=abc&param3%5B%5D=987'

    await expect(doSearchRequest(jwtToken, url)).resolves.toEqual(expectedResponse)
  })
})