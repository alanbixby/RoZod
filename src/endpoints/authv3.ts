import { z } from 'zod';
import { endpoint } from '..';

const Roblox_Authentication_Api_TwoStepVerificationLoginRequest = z
  .object({
    challengeId: z.string(),
    verificationToken: z.string(),
    rememberDevice: z.boolean(),
    accountBlob: z.string(),
  })
  .passthrough();
const Roblox_Authentication_Api_Models_TwoStepVerificationV3LoginResponse = z
  .object({
    identityVerificationLoginTicket: z.string(),
    accountBlob: z.string(),
  })
  .passthrough();

const schemas = {
  Roblox_Authentication_Api_TwoStepVerificationLoginRequest,
  Roblox_Authentication_Api_Models_TwoStepVerificationV3LoginResponse,
};

/**
 * @api POST https://auth.roblox.com/v3/users/:userId/two-step-verification/login
 * @summary Authenticates as a user given a two step verification verification token.
 * @param body The Roblox.Authentication.Api.TwoStepVerificationLoginRequest.
 * @param userId The user ID to authenticate as.
 */
export const postUsersUseridTwoStepVerificationLogin = endpoint({
  method: 'post' as const,
  path: '/v3/users/:userId/two-step-verification/login',
  baseUrl: 'https://auth.roblox.com',
  requestFormat: 'json' as const,
  serializationMethod: {
    body: {},
    userId: {
      style: 'simple',
    },
  },
  parameters: {
    userId: z.number().int(),
  },
  body: Roblox_Authentication_Api_TwoStepVerificationLoginRequest,
  response: Roblox_Authentication_Api_Models_TwoStepVerificationV3LoginResponse,
  errors: [
    {
      status: 400,
      description: `1: User is invalid.
5: Invalid two step verification ticket.
10: Invalid verification token.`,
    },
    {
      status: 403,
      description: `0: Token Validation Failed`,
    },
  ],
});
