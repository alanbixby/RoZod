import { z } from 'zod';
import { endpoint } from '..';

const Roblox_AccountInformation_Api_Models_BirthdateResponse = z
  .object({
    birthMonth: z.number().int(),
    birthDay: z.number().int(),
    birthYear: z.number().int(),
  })
  .passthrough();
const Roblox_AccountInformation_Api_Models_BirthdateRequest = z
  .object({
    birthMonth: z.number().int(),
    birthDay: z.number().int(),
    birthYear: z.number().int(),
    password: z.string(),
  })
  .passthrough();
const Roblox_Web_WebAPI_ApiEmptyResponseModel = z.object({}).passthrough();
const Roblox_AccountInformation_Api_Models_DescriptionResponse = z.object({ description: z.string() }).passthrough();
const Roblox_AccountInformation_Api_Models_DescriptionRequest = z.object({ description: z.string() }).passthrough();
const Roblox_AccountInformation_Api_Models_GenderResponse = z.object({ gender: z.number().int() }).passthrough();
const Roblox_AccountInformation_Api_Models_GenderRequest = z.object({ gender: z.string() }).passthrough();
const Roblox_AccountInformation_Api_Models_MetadataResponse = z
  .object({
    isAllowedNotificationsEndpointDisabled: z.boolean(),
    isAccountSettingsPolicyEnabled: z.boolean(),
    isPhoneNumberEnabled: z.boolean(),
    MaxUserDescriptionLength: z.number().int(),
    isUserDescriptionEnabled: z.boolean(),
    isUserBlockEndpointsUpdated: z.boolean(),
    isPasswordRequiredForAgingDown: z.boolean(),
    shouldUsePersonaForIdVerification: z.boolean(),
    shouldDisplaySessionManagement: z.boolean(),
    shouldUseSecurityReactUI: z.boolean(),
  })
  .passthrough();
const Roblox_AccountInformation_Api_Models_PhoneResponse = z
  .object({
    countryCode: z.string(),
    prefix: z.string(),
    phone: z.string(),
    isVerified: z.boolean(),
    verificationCodeLength: z.number().int(),
    canBypassPasswordForPhoneUpdate: z.boolean(),
  })
  .passthrough();
const Roblox_AccountInformation_Api_Models_PhoneRequest = z
  .object({
    countryCode: z.string(),
    prefix: z.string(),
    phone: z.string(),
    password: z.string(),
    verificationChannel: z.string(),
  })
  .passthrough();
const Roblox_Platform_UserPhoneNumberVerification_Models_PendingVerificationResponse = z
  .object({ verificationChannel: z.string(), data: z.string() })
  .passthrough();
const Roblox_AccountInformation_Api_Models_PromotionChannelsResponse = z
  .object({
    promotionChannelsVisibilityPrivacy: z.string(),
    facebook: z.string(),
    twitter: z.string(),
    youtube: z.string(),
    twitch: z.string(),
    guilded: z.string(),
  })
  .passthrough();
const Roblox_AccountInformation_Api_Models_PromotionChannelsRequest = z
  .object({
    facebook: z.string(),
    twitter: z.string(),
    youtube: z.string(),
    twitch: z.string(),
    guilded: z.string(),
    promotionChannelsVisibilityPrivacy: z.string(),
  })
  .passthrough();
const Roblox_AccountInformation_Api_Models_StarCodeAffiliateResponse = z
  .object({ userId: z.number().int(), name: z.string(), code: z.string() })
  .passthrough();
const Roblox_AccountInformation_Api_Models_StarCodeAffiliateRequest = z.object({ code: z.string() }).passthrough();
const Roblox_AccountInformation_Api_Models_PromotionChannelsByUserIdResponse = z
  .object({
    facebook: z.string(),
    twitter: z.string(),
    youtube: z.string(),
    twitch: z.string(),
    guilded: z.string(),
  })
  .passthrough();
const Roblox_AccountInformation_Api_RobloxBadgeResponse = z
  .object({
    id: z.number().int(),
    name: z.string(),
    description: z.string(),
    imageUrl: z.string(),
  })
  .passthrough();
const Roblox_AccountInformation_Api_Models_ConsecutiveLoginDaysResponse = z
  .object({ count: z.number().int() })
  .passthrough();
const Roblox_AccountInformation_Api_Models_VerifyEmailRequest = z.object({ ticket: z.string() }).passthrough();
const Roblox_AccountInformation_Api_Models_VerifyEmailResponse = z
  .object({ verifiedUserHatAssetId: z.number().int() })
  .passthrough();
const Roblox_AccountInformation_Api_Models_EmptyRequest = z.object({}).passthrough();
const Roblox_AccountInformation_Api_Models_VerifyPhoneRequest = z.object({ code: z.string() }).passthrough();

const schemas = {
  Roblox_AccountInformation_Api_Models_BirthdateResponse,
  Roblox_AccountInformation_Api_Models_BirthdateRequest,
  Roblox_Web_WebAPI_ApiEmptyResponseModel,
  Roblox_AccountInformation_Api_Models_DescriptionResponse,
  Roblox_AccountInformation_Api_Models_DescriptionRequest,
  Roblox_AccountInformation_Api_Models_GenderResponse,
  Roblox_AccountInformation_Api_Models_GenderRequest,
  Roblox_AccountInformation_Api_Models_MetadataResponse,
  Roblox_AccountInformation_Api_Models_PhoneResponse,
  Roblox_AccountInformation_Api_Models_PhoneRequest,
  Roblox_Platform_UserPhoneNumberVerification_Models_PendingVerificationResponse,
  Roblox_AccountInformation_Api_Models_PromotionChannelsResponse,
  Roblox_AccountInformation_Api_Models_PromotionChannelsRequest,
  Roblox_AccountInformation_Api_Models_StarCodeAffiliateResponse,
  Roblox_AccountInformation_Api_Models_StarCodeAffiliateRequest,
  Roblox_AccountInformation_Api_Models_PromotionChannelsByUserIdResponse,
  Roblox_AccountInformation_Api_RobloxBadgeResponse,
  Roblox_AccountInformation_Api_Models_ConsecutiveLoginDaysResponse,
  Roblox_AccountInformation_Api_Models_VerifyEmailRequest,
  Roblox_AccountInformation_Api_Models_VerifyEmailResponse,
  Roblox_AccountInformation_Api_Models_EmptyRequest,
  Roblox_AccountInformation_Api_Models_VerifyPhoneRequest,
};

/**
 * @api GET https://accountinformation.roblox.com/v1/birthdate
 * @summary Get the user's birthdate
 */
export const getBirthdate = endpoint({
  method: 'get' as const,
  path: '/v1/birthdate',
  baseUrl: 'https://accountinformation.roblox.com',
  requestFormat: 'json' as const,
  response: Roblox_AccountInformation_Api_Models_BirthdateResponse,
  errors: [
    {
      status: 400,
      description: `1: User not found.`,
    },
    {
      status: 401,
      description: `0: Authorization has been denied for this request.`,
    },
  ],
});
/**
 * @api POST https://accountinformation.roblox.com/v1/birthdate
 * @summary Update the user's birthdate
 * @param body The Roblox.AccountInformation.Api.Models.BirthdateRequest
 */
export const postBirthdate = endpoint({
  method: 'post' as const,
  path: '/v1/birthdate',
  baseUrl: 'https://accountinformation.roblox.com',
  requestFormat: 'json' as const,
  serializationMethod: {
    body: {},
  },
  parameters: {},
  body: Roblox_AccountInformation_Api_Models_BirthdateRequest,
  response: z.object({}).passthrough(),
  errors: [
    {
      status: 400,
      description: `1: User not found.
4: The birthdate provided is invalid.
8: Password is incorrect.`,
    },
    {
      status: 401,
      description: `0: Authorization has been denied for this request.`,
    },
    {
      status: 403,
      description: `0: Token Validation Failed
2: PIN is locked.
5: Invalid birthdate change.`,
    },
    {
      status: 500,
      description: `0: An unknown error occured.
5: Invalid birthdate change.`,
    },
  ],
});
/**
 * @api GET https://accountinformation.roblox.com/v1/description
 * @summary Get the user's description
 */
export const getDescription = endpoint({
  method: 'get' as const,
  path: '/v1/description',
  baseUrl: 'https://accountinformation.roblox.com',
  requestFormat: 'json' as const,
  response: z.object({ description: z.string() }).passthrough(),
  errors: [
    {
      status: 400,
      description: `1: User not found.`,
    },
    {
      status: 401,
      description: `0: Authorization has been denied for this request.`,
    },
  ],
});
/**
 * @api POST https://accountinformation.roblox.com/v1/description
 * @summary Update the user's description
 * @param body The Roblox.AccountInformation.Api.Models.DescriptionRequest
 */
export const postDescription = endpoint({
  method: 'post' as const,
  path: '/v1/description',
  baseUrl: 'https://accountinformation.roblox.com',
  requestFormat: 'json' as const,
  serializationMethod: {
    body: {},
  },
  parameters: {},
  body: z.object({ description: z.string() }).passthrough(),
  response: z.object({ description: z.string() }).passthrough(),
  errors: [
    {
      status: 400,
      description: `1: User not found.`,
    },
    {
      status: 401,
      description: `0: Authorization has been denied for this request.`,
    },
    {
      status: 403,
      description: `0: Token Validation Failed
2: PIN is locked.`,
    },
    {
      status: 500,
      description: `0: An unknown error occured.`,
    },
    {
      status: 503,
      description: `3: This feature is currently disabled. Please try again later.`,
    },
  ],
});
/**
 * @api POST https://accountinformation.roblox.com/v1/email/verify
 * @summary Verify the user's email address from token
 * @param body Roblox.AccountInformation.Api.Models.VerifyEmailRequest
 */
export const postEmailVerify = endpoint({
  method: 'post' as const,
  path: '/v1/email/verify',
  baseUrl: 'https://accountinformation.roblox.com',
  requestFormat: 'json' as const,
  serializationMethod: {
    body: {},
  },
  parameters: {},
  body: z.object({ ticket: z.string() }).passthrough(),
  response: z.object({ verifiedUserHatAssetId: z.number().int() }).passthrough(),
  errors: [
    {
      status: 403,
      description: `0: Token Validation Failed`,
    },
  ],
});
/**
 * @api GET https://accountinformation.roblox.com/v1/gender
 * @summary Get the user's gender
 */
export const getGender = endpoint({
  method: 'get' as const,
  path: '/v1/gender',
  baseUrl: 'https://accountinformation.roblox.com',
  requestFormat: 'json' as const,
  response: z.object({ gender: z.number().int() }).passthrough(),
  errors: [
    {
      status: 400,
      description: `1: User not found.`,
    },
    {
      status: 401,
      description: `0: Authorization has been denied for this request.`,
    },
  ],
});
/**
 * @api POST https://accountinformation.roblox.com/v1/gender
 * @summary Update the user's gender
 * @param body The Roblox.AccountInformation.Api.Models.GenderRequest
 */
export const postGender = endpoint({
  method: 'post' as const,
  path: '/v1/gender',
  baseUrl: 'https://accountinformation.roblox.com',
  requestFormat: 'json' as const,
  serializationMethod: {
    body: {},
  },
  parameters: {},
  body: z.object({ gender: z.string() }).passthrough(),
  response: z.object({}).passthrough(),
  errors: [
    {
      status: 400,
      description: `1: User not found.
6: The gender provided is invalid.`,
    },
    {
      status: 401,
      description: `0: Authorization has been denied for this request.`,
    },
    {
      status: 403,
      description: `0: Token Validation Failed
2: PIN is locked.`,
    },
    {
      status: 500,
      description: `0: An unknown error occured.`,
    },
  ],
});
/**
 * @api GET https://accountinformation.roblox.com/v1/metadata
 * @summary Get the metadata
 */
export const getMetadata = endpoint({
  method: 'get' as const,
  path: '/v1/metadata',
  baseUrl: 'https://accountinformation.roblox.com',
  requestFormat: 'json' as const,
  response: Roblox_AccountInformation_Api_Models_MetadataResponse,
  errors: [],
});
/**
 * @api GET https://accountinformation.roblox.com/v1/phone
 * @summary Get Verified Phone Number
 */
export const getPhone = endpoint({
  method: 'get' as const,
  path: '/v1/phone',
  baseUrl: 'https://accountinformation.roblox.com',
  requestFormat: 'json' as const,
  response: Roblox_AccountInformation_Api_Models_PhoneResponse,
  errors: [
    {
      status: 401,
      description: `0: Authorization has been denied for this request.`,
    },
    {
      status: 500,
      description: `0: An unknown error occured.`,
    },
  ],
});
/**
 * @api POST https://accountinformation.roblox.com/v1/phone
 * @summary Set Phone Number
 * @param body Roblox.AccountInformation.Api.Models.PhoneRequest
 */
export const postPhone = endpoint({
  method: 'post' as const,
  path: '/v1/phone',
  baseUrl: 'https://accountinformation.roblox.com',
  requestFormat: 'json' as const,
  serializationMethod: {
    body: {},
  },
  parameters: {},
  body: Roblox_AccountInformation_Api_Models_PhoneRequest,
  response: Roblox_Platform_UserPhoneNumberVerification_Models_PendingVerificationResponse,
  errors: [
    {
      status: 400,
      description: `2: Invalid Phone Number
3: Phone Number Already Associated
8: Invalid Phone Number Type`,
    },
    {
      status: 401,
      description: `0: Authorization has been denied for this request.`,
    },
    {
      status: 403,
      description: `0: Token Validation Failed
4: Account Pin Locked
5: Incorrect Password
10: `,
    },
    {
      status: 429,
      description: `6: Flooded`,
    },
    {
      status: 500,
      description: `0: An unknown error occured.`,
    },
    {
      status: 503,
      description: `1: This feature is currently disabled. Please try again later.`,
    },
  ],
});
/**
 * @api POST https://accountinformation.roblox.com/v1/phone/delete
 * @summary Delete Phone
 * @param body Roblox.AccountInformation.Api.Models.PhoneRequest
 */
export const postPhoneDelete = endpoint({
  method: 'post' as const,
  path: '/v1/phone/delete',
  baseUrl: 'https://accountinformation.roblox.com',
  requestFormat: 'json' as const,
  serializationMethod: {
    body: {},
  },
  parameters: {},
  body: Roblox_AccountInformation_Api_Models_PhoneRequest,
  response: z.object({}).passthrough(),
  errors: [
    {
      status: 401,
      description: `0: Authorization has been denied for this request.`,
    },
    {
      status: 403,
      description: `0: Token Validation Failed
4: Account Pin Locked
5: Incorrect Password`,
    },
    {
      status: 429,
      description: `6: Flooded`,
    },
    {
      status: 500,
      description: `0: An unknown error occured.`,
    },
    {
      status: 503,
      description: `1: This feature is currently disabled. Please try again later.`,
    },
  ],
});
/**
 * @api POST https://accountinformation.roblox.com/v1/phone/resend
 * @summary Resend Phone code
 * @param body Roblox.AccountInformation.Api.Models.PhoneRequest
 */
export const postPhoneResend = endpoint({
  method: 'post' as const,
  path: '/v1/phone/resend',
  baseUrl: 'https://accountinformation.roblox.com',
  requestFormat: 'json' as const,
  serializationMethod: {
    body: {},
  },
  parameters: {},
  body: z.object({}).passthrough().optional(),
  response: z.object({}).passthrough(),
  errors: [
    {
      status: 401,
      description: `0: Authorization has been denied for this request.`,
    },
    {
      status: 403,
      description: `0: Token Validation Failed`,
    },
    {
      status: 429,
      description: `6: Flooded`,
    },
    {
      status: 500,
      description: `0: An unknown error occured.`,
    },
    {
      status: 503,
      description: `1: This feature is currently disabled. Please try again later.`,
    },
  ],
});
/**
 * @api POST https://accountinformation.roblox.com/v1/phone/verify
 * @summary Verify Phone
 * @param body Roblox.AccountInformation.Api.Models.VerifyPhoneRequest
 */
export const postPhoneVerify = endpoint({
  method: 'post' as const,
  path: '/v1/phone/verify',
  baseUrl: 'https://accountinformation.roblox.com',
  requestFormat: 'json' as const,
  serializationMethod: {
    body: {},
  },
  parameters: {},
  body: z.object({ code: z.string() }).passthrough(),
  response: z.object({}).passthrough(),
  errors: [
    {
      status: 400,
      description: `2: Invalid Phone Number
3: Phone Number Already Associated
7: Invalid Code`,
    },
    {
      status: 401,
      description: `0: Authorization has been denied for this request.`,
    },
    {
      status: 403,
      description: `0: Token Validation Failed`,
    },
    {
      status: 429,
      description: `6: Flooded`,
    },
    {
      status: 500,
      description: `0: An unknown error occured.`,
    },
    {
      status: 503,
      description: `1: This feature is currently disabled. Please try again later.`,
    },
  ],
});
/**
 * @api GET https://accountinformation.roblox.com/v1/promotion-channels
 * @summary Get the user's promotion channels
 */
export const getPromotionChannels = endpoint({
  method: 'get' as const,
  path: '/v1/promotion-channels',
  baseUrl: 'https://accountinformation.roblox.com',
  requestFormat: 'json' as const,
  response: Roblox_AccountInformation_Api_Models_PromotionChannelsResponse,
  errors: [
    {
      status: 400,
      description: `1: User not found.`,
    },
    {
      status: 401,
      description: `0: Authorization has been denied for this request.`,
    },
  ],
});
/**
 * @api POST https://accountinformation.roblox.com/v1/promotion-channels
 * @summary Update the user's promotion channels
 * @param body The Roblox.AccountInformation.Api.Models.PromotionChannelsRequest
 */
export const postPromotionChannels = endpoint({
  method: 'post' as const,
  path: '/v1/promotion-channels',
  baseUrl: 'https://accountinformation.roblox.com',
  requestFormat: 'json' as const,
  serializationMethod: {
    body: {},
  },
  parameters: {},
  body: Roblox_AccountInformation_Api_Models_PromotionChannelsRequest,
  response: z.object({}).passthrough(),
  errors: [
    {
      status: 400,
      description: `2: The request was empty.
11: The Facebook profile url is invalid.
12: The Twitter handle is invalid.
13: The YouTube url is invalid.
14: The Twitch profile url is invalid.
15: The Guilded profile url is invalid.`,
    },
    {
      status: 401,
      description: `0: Authorization has been denied for this request.`,
    },
    {
      status: 403,
      description: `0: Token Validation Failed
3: PIN is locked.
4: Only users who are over twelve years of age may edit social network channels.`,
    },
  ],
});
/**
 * @api GET https://accountinformation.roblox.com/v1/star-code-affiliates
 * @summary Gets a star code affiliate supporter for the authenticated user
 */
export const getStarCodeAffiliates = endpoint({
  method: 'get' as const,
  path: '/v1/star-code-affiliates',
  baseUrl: 'https://accountinformation.roblox.com',
  requestFormat: 'json' as const,
  response: Roblox_AccountInformation_Api_Models_StarCodeAffiliateResponse,
  errors: [
    {
      status: 401,
      description: `0: Authorization has been denied for this request.`,
    },
    {
      status: 500,
      description: `0: An unknown error occured.`,
    },
  ],
});
/**
 * @api POST https://accountinformation.roblox.com/v1/star-code-affiliates
 * @summary Adds a star code affiliate supporter for the authenticated user
 * @param body Roblox.AccountInformation.Api.Models.StarCodeAffiliateRequest
 */
export const postStarCodeAffiliates = endpoint({
  method: 'post' as const,
  path: '/v1/star-code-affiliates',
  baseUrl: 'https://accountinformation.roblox.com',
  requestFormat: 'json' as const,
  serializationMethod: {
    body: {},
  },
  parameters: {},
  body: z.object({ code: z.string() }).passthrough(),
  response: Roblox_AccountInformation_Api_Models_StarCodeAffiliateResponse,
  errors: [
    {
      status: 400,
      description: `1: The code was invalid.`,
    },
    {
      status: 401,
      description: `0: Authorization has been denied for this request.`,
    },
    {
      status: 403,
      description: `0: Token Validation Failed`,
    },
    {
      status: 500,
      description: `0: An unknown error occured.`,
    },
  ],
});
/**
 * @api DELETE https://accountinformation.roblox.com/v1/star-code-affiliates
 * @summary Removes the star code affiliate supporter for the authenticated user
 */
export const deleteStarCodeAffiliates = endpoint({
  method: 'delete' as const,
  path: '/v1/star-code-affiliates',
  baseUrl: 'https://accountinformation.roblox.com',
  requestFormat: 'json' as const,
  response: z.object({}).passthrough(),
  errors: [
    {
      status: 401,
      description: `0: Authorization has been denied for this request.`,
    },
    {
      status: 403,
      description: `0: Token Validation Failed`,
    },
    {
      status: 500,
      description: `0: An unknown error occured.`,
    },
  ],
});
/**
 * @api GET https://accountinformation.roblox.com/v1/users/:userId/promotion-channels
 * @summary Get promotion channels for a given user ID
 * @param userId
 */
export const getUsersUseridPromotionChannels = endpoint({
  method: 'get' as const,
  path: '/v1/users/:userId/promotion-channels',
  baseUrl: 'https://accountinformation.roblox.com',
  requestFormat: 'json' as const,
  serializationMethod: {
    userId: {
      style: 'simple',
    },
  },
  parameters: {
    userId: z.number().int(),
  },
  response: Roblox_AccountInformation_Api_Models_PromotionChannelsByUserIdResponse,
  errors: [
    {
      status: 400,
      description: `1: User not found.`,
    },
  ],
});
/**
 * @api GET https://accountinformation.roblox.com/v1/users/:userId/roblox-badges
 * @summary Returns a list of Roblox badges belonging to a user.
 * @param userId
 */
export const getUsersUseridRobloxBadges = endpoint({
  method: 'get' as const,
  path: '/v1/users/:userId/roblox-badges',
  baseUrl: 'https://accountinformation.roblox.com',
  requestFormat: 'json' as const,
  serializationMethod: {
    userId: {
      style: 'simple',
    },
  },
  parameters: {
    userId: z.number().int(),
  },
  response: z.array(Roblox_AccountInformation_Api_RobloxBadgeResponse),
  errors: [],
});
/**
 * @api GET https://accountinformation.roblox.com/v1/xbox-live/consecutive-login-days
 * @summary Returns number of consecutive login days for xbox users
 */
export const getXboxLiveConsecutiveLoginDays = endpoint({
  method: 'get' as const,
  path: '/v1/xbox-live/consecutive-login-days',
  baseUrl: 'https://accountinformation.roblox.com',
  requestFormat: 'json' as const,
  response: z.object({ count: z.number().int() }).passthrough(),
  errors: [
    {
      status: 401,
      description: `0: Authorization has been denied for this request.
7: The account is not connected to an Xbox Live account`,
    },
  ],
});
