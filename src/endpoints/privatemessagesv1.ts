import { z } from 'zod';
import { endpoint } from '..';

const Roblox_PrivateMessages_Api_Models_VerifiedSkinnyUserResponse = z.object({
  hasVerifiedBadge: z.boolean(),
  id: z.number().int(),
  name: z.string(),
  displayName: z.string(),
});
const Roblox_PrivateMessages_Api_Models_AnnouncementsDetailsResponse = z.object({
  id: z.number().int(),
  sender: Roblox_PrivateMessages_Api_Models_VerifiedSkinnyUserResponse,
  subject: z.string(),
  body: z.string(),
  created: z.string().datetime({ offset: true }),
  updated: z.string().datetime({ offset: true }),
});
const Roblox_PrivateMessages_Api_Models_GetAnnouncementsResponse = z.object({
  collection: z.array(Roblox_PrivateMessages_Api_Models_AnnouncementsDetailsResponse),
  totalCollectionSize: z.number().int(),
});
const Roblox_PrivateMessages_Api_Models_AnnouncementsMetadataResponse = z.object({
  numOfAnnouncements: z.number().int(),
});
const Roblox_PrivateMessages_Api_Models_MessageDetailsResponse = z.object({
  id: z.number().int(),
  sender: Roblox_PrivateMessages_Api_Models_VerifiedSkinnyUserResponse,
  recipient: Roblox_PrivateMessages_Api_Models_VerifiedSkinnyUserResponse,
  subject: z.string(),
  body: z.string(),
  created: z.string().datetime({ offset: true }),
  updated: z.string().datetime({ offset: true }),
  isRead: z.boolean(),
  isSystemMessage: z.boolean(),
  isReportAbuseDisplayed: z.boolean(),
});
const Roblox_PrivateMessages_Api_Models_GetMessagesResponse = z.object({
  collection: z.array(Roblox_PrivateMessages_Api_Models_MessageDetailsResponse),
  totalCollectionSize: z.number().int(),
  totalPages: z.number().int(),
  pageNumber: z.number().int(),
});
const Roblox_PrivateMessages_Api_Models_Messages_Response_CanMessageResponse = z.object({ canMessage: z.boolean() });
const Roblox_PrivateMessages_Api_Models_UnreadMessagesCountResponse = z.object({
  count: z.number().int(),
});
const Roblox_PrivateMessages_Api_Models_BatchMessagesRequest = z.object({
  messageIds: z.array(z.number()),
});
const Roblox_PrivateMessages_Api_Models_FailedMessageResponse = z.object({
  messageId: z.number().int(),
  errorMessage: z.string(),
});
const Roblox_PrivateMessages_Api_Models_BatchMessagesResponse = z.object({
  failedMessages: z.array(Roblox_PrivateMessages_Api_Models_FailedMessageResponse),
});
const Roblox_PrivateMessages_Api_Models_SendMessageRequest = z.object({
  userId: z.number().int(),
  subject: z.string(),
  body: z.string(),
  recipientId: z.number().int(),
  replyMessageId: z.number().int(),
  includePreviousMessage: z.boolean(),
});
const Roblox_PrivateMessages_Api_Models_SendMessageResponse = z.object({
  success: z.boolean(),
  shortMessage: z.string(),
  message: z.string(),
});

/**
 * @api GET https://privatemessages.roblox.com/v1/announcements
 * @summary Migrate from RobloxWebsite project, return news notification for Private Message page
 */
export const getAnnouncements = endpoint({
  method: 'GET',
  path: '/v1/announcements',
  baseUrl: 'https://privatemessages.roblox.com',
  requestFormat: 'json',
  response: Roblox_PrivateMessages_Api_Models_GetAnnouncementsResponse,
  errors: [
    {
      status: 400,
      description: `2: Message does not exist or the current user is not authorized to view it.`,
    },
    {
      status: 401,
      description: `0: Authorization has been denied for this request.`,
    },
  ],
});
/**
 * @api GET https://privatemessages.roblox.com/v1/announcements/metadata
 */
export const getAnnouncementsMetadata = endpoint({
  method: 'GET',
  path: '/v1/announcements/metadata',
  baseUrl: 'https://privatemessages.roblox.com',
  requestFormat: 'json',
  response: z.object({ numOfAnnouncements: z.number().int() }),
  errors: [
    {
      status: 401,
      description: `0: Authorization has been denied for this request.`,
    },
  ],
});
/**
 * @api GET https://privatemessages.roblox.com/v1/messages
 * @summary Gets a user's messages.
 * @param pageNumber
 * @param pageSize
 * @param messageTab
 */
export const getMessages = endpoint({
  method: 'GET',
  path: '/v1/messages',
  baseUrl: 'https://privatemessages.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    pageNumber: {
      style: 'form',
      explode: true,
    },
    pageSize: {
      style: 'form',
      explode: true,
    },
    messageTab: {
      style: 'form',
      explode: true,
    },
  },
  parameters: {
    pageNumber: z.number().int().optional(),
    pageSize: z.number().int().optional().default(20),
    messageTab: z.enum(['Inbox', 'Sent', 'Archive']).optional().default('Inbox'),
  },
  response: Roblox_PrivateMessages_Api_Models_GetMessagesResponse,
  errors: [
    {
      status: 401,
      description: `0: Authorization has been denied for this request.`,
    },
  ],
});
/**
 * @api GET https://privatemessages.roblox.com/v1/messages/:messageId
 * @summary Gets a message's details.
 * @param messageId
 */
export const getMessagesMessageid = endpoint({
  method: 'GET',
  path: '/v1/messages/:messageId',
  baseUrl: 'https://privatemessages.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    messageId: {
      style: 'simple',
    },
  },
  parameters: {
    messageId: z.number().int(),
  },
  response: Roblox_PrivateMessages_Api_Models_MessageDetailsResponse,
  errors: [
    {
      status: 400,
      description: `2: Message does not exist or the current user is not authorized to view it.`,
    },
    {
      status: 401,
      description: `0: Authorization has been denied for this request.`,
    },
  ],
});
/**
 * @api GET https://privatemessages.roblox.com/v1/messages/:userId/can-message
 * @summary Gets whether the sender can send a message to the specified user.
 * @param userId
 */
export const getMessagesUseridCanMessage = endpoint({
  method: 'GET',
  path: '/v1/messages/:userId/can-message',
  baseUrl: 'https://privatemessages.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    userId: {
      style: 'simple',
    },
  },
  parameters: {
    userId: z.number().int(),
  },
  response: z.object({ canMessage: z.boolean() }),
  errors: [
    {
      status: 400,
      description: `8: Invalid user ID.`,
    },
    {
      status: 401,
      description: `0: Authorization has been denied for this request.`,
    },
  ],
});
/**
 * @api POST https://privatemessages.roblox.com/v1/messages/archive
 * @summary Archives a batch of messages.
 * @param body
 */
export const postMessagesArchive = endpoint({
  method: 'POST',
  path: '/v1/messages/archive',
  baseUrl: 'https://privatemessages.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    body: {},
  },
  parameters: {},
  body: Roblox_PrivateMessages_Api_Models_BatchMessagesRequest,
  response: Roblox_PrivateMessages_Api_Models_BatchMessagesResponse,
  errors: [
    {
      status: 400,
      description: `5: Too many ids in a batch request.`,
    },
    {
      status: 401,
      description: `0: Authorization has been denied for this request.`,
    },
    {
      status: 403,
      description: `0: Token Validation Failed`,
    },
  ],
});
/**
 * @api POST https://privatemessages.roblox.com/v1/messages/mark-read
 * @summary Marks a batch of messages as read.
 * @param body
 */
export const postMessagesMarkRead = endpoint({
  method: 'POST',
  path: '/v1/messages/mark-read',
  baseUrl: 'https://privatemessages.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    body: {},
  },
  parameters: {},
  body: Roblox_PrivateMessages_Api_Models_BatchMessagesRequest,
  response: Roblox_PrivateMessages_Api_Models_BatchMessagesResponse,
  errors: [
    {
      status: 400,
      description: `5: Too many ids in a batch request.`,
    },
    {
      status: 401,
      description: `0: Authorization has been denied for this request.`,
    },
    {
      status: 403,
      description: `0: Token Validation Failed`,
    },
  ],
});
/**
 * @api POST https://privatemessages.roblox.com/v1/messages/mark-unread
 * @summary Marks a batch of messages as unread.
 * @param body
 */
export const postMessagesMarkUnread = endpoint({
  method: 'POST',
  path: '/v1/messages/mark-unread',
  baseUrl: 'https://privatemessages.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    body: {},
  },
  parameters: {},
  body: Roblox_PrivateMessages_Api_Models_BatchMessagesRequest,
  response: Roblox_PrivateMessages_Api_Models_BatchMessagesResponse,
  errors: [
    {
      status: 400,
      description: `5: Too many ids in a batch request.`,
    },
    {
      status: 401,
      description: `0: Authorization has been denied for this request.`,
    },
    {
      status: 403,
      description: `0: Token Validation Failed`,
    },
  ],
});
/**
 * @api POST https://privatemessages.roblox.com/v1/messages/send
 * @summary Sends a message to a specified user.
 * @param body
 */
export const postMessagesSend = endpoint({
  method: 'POST',
  path: '/v1/messages/send',
  baseUrl: 'https://privatemessages.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    body: {},
  },
  parameters: {},
  body: Roblox_PrivateMessages_Api_Models_SendMessageRequest,
  response: Roblox_PrivateMessages_Api_Models_SendMessageResponse,
  errors: [
    {
      status: 401,
      description: `0: Authorization has been denied for this request.`,
    },
    {
      status: 403,
      description: `0: Token Validation Failed`,
    },
  ],
});
/**
 * @api POST https://privatemessages.roblox.com/v1/messages/unarchive
 * @summary Unarchives a batch of messages.
 * @param body
 */
export const postMessagesUnarchive = endpoint({
  method: 'POST',
  path: '/v1/messages/unarchive',
  baseUrl: 'https://privatemessages.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    body: {},
  },
  parameters: {},
  body: Roblox_PrivateMessages_Api_Models_BatchMessagesRequest,
  response: Roblox_PrivateMessages_Api_Models_BatchMessagesResponse,
  errors: [
    {
      status: 400,
      description: `5: Too many ids in a batch request.`,
    },
    {
      status: 401,
      description: `0: Authorization has been denied for this request.`,
    },
    {
      status: 403,
      description: `0: Token Validation Failed`,
    },
  ],
});
/**
 * @api GET https://privatemessages.roblox.com/v1/messages/unread/count
 * @summary Gets unread messages for the authenticated user.
 */
export const getMessagesUnreadCount = endpoint({
  method: 'GET',
  path: '/v1/messages/unread/count',
  baseUrl: 'https://privatemessages.roblox.com',
  requestFormat: 'json',
  response: z.object({ count: z.number().int() }),
  errors: [
    {
      status: 401,
      description: `0: Authorization has been denied for this request.`,
    },
  ],
});
