export type AuthStackParamList = {
  RegisterByEmail: undefined;
  RegisterByPhone: undefined;
  OTP: undefined;
  RegisterSuccess: undefined;
  LoginByEmail: undefined;
  LoginByPhone: undefined;
  NotActivated: undefined;
};

export type AuthScreenParamList =
  | 'RegisterByEmail'
  | 'RegisterByPhone'
  | 'OTP'
  | 'RegisterSuccess'
  | 'LoginByEmail'
  | 'LoginByPhone'
  | 'NotActivated';
