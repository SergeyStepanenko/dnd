export enum EFields {
  FullName = 'fullName',
  Subject = 'subject',
  Phone = 'phone',
  Email = 'email',
  Message = 'message',
  TypeOfWork = 'type_of_work',
}

export enum ERadioFields {
  WebDesign = 'Web Design',
  WebDevelopment = 'Web Development',
  'UI/UX' = 'UI/UX',
  Logo = 'Logo',
  Other = 'Other',
  OtherValue = 'OtherValue',
}

export const FORM_RADIO_VALUES_INITIAL = {
  [ERadioFields.WebDesign]: false,
  [ERadioFields.WebDevelopment]: false,
  [ERadioFields['UI/UX']]: false,
  [ERadioFields.Logo]: false,
  [ERadioFields.Other]: false,
  [ERadioFields.OtherValue]: undefined,
};

export const FORM_VALUES_INITIAL = {
  [EFields.FullName]: '',
  [EFields.Subject]: '',
  [EFields.Phone]: '',
  [EFields.Email]: '',
  [EFields.Message]: '',
  [EFields.TypeOfWork]: FORM_RADIO_VALUES_INITIAL,
};

export const FORM_ERRORS_INITIAL = {
  [EFields.FullName]: undefined,
  [EFields.Subject]: undefined,
  [EFields.Phone]: undefined,
  [EFields.Email]: undefined,
  [EFields.Message]: undefined,
  [EFields.TypeOfWork]: undefined,
};
