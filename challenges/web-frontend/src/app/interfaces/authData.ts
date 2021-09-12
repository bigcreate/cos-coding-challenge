interface AuthData {
  authenticated: boolean;
  // internalUserId: number;
  // internalUserUUID: string;
  // privileges: string;
  token: string;
  type: UserType;
  userId: string;
}

interface BuyerAuthData extends AuthData {
  type: UserType.Buyer;
}

interface SellerAuthData extends AuthData {
  type: UserType.Seller;
}

export type Auth = BuyerAuthData | SellerAuthData;

enum UserType {
  Seller,
  Buyer,
}

export function isBuyer(user: Auth): user is BuyerAuthData {
  return user.type === UserType.Buyer;
}

interface ErrorResponse {
  message: string;
  msgKey: string;
  // params?: object;
}

export function isCustomError<T>(response: ErrorResponse | T): response is ErrorResponse {
  return (response as ErrorResponse).msgKey !== undefined;
}
