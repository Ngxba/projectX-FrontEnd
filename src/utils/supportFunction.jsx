/* eslint-disable  no-restricted-syntax */
export const isLengthEqualZero = (object) =>
{
  for (const property in object)
  {
    if (
      typeof object[property] === 'string'
      && object[property].replace(/\s/g, '').length === 0
    )
    {
      return true;
    }
  }
  return false;
};

export const makeKey = (length) =>
{
  let result = '';
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const charactersLength = characters.length;
  for (let i = 0; i < length; i += 1)
  {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
};

export function validateEmail(email)
{
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}
