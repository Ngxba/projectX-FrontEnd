/* eslint-disable  no-restricted-syntax */
/* eslint-disable  no-useless-escape */
export const isLengthEqualZero = (object) =>
{
  for (const property in object)
  {
    if (
      typeof object[property] === "string"
      && object[property].replace(/\s/g, "").length === 0
    )
    {
      return true;
    }
  }
  return false;
};

export const makeKey = (length) =>
{
  let result = "";
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
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

export function getParameterByName(name, url = window.location.href)
{
  const newName = name.replace(/[\[\]]/g, "\\$&");
  const regex = new RegExp(`[?&]${newName}(=([^&#]*)|&|#|$)`);
  const results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return "";
  return decodeURIComponent(results[2].replace(/\+/g, " "));
}

export function objectToQueryString(obj)
{
  const str = [];
  for (const p in obj)
  {
    if (Object.prototype.hasOwnProperty.call(obj, p) && obj[p] !== undefined)
    {
      if (Array.isArray(obj[p]))
      {
        if (obj[p].length > 0)
        {
          const queryValue = obj[p].reduce((result, cur, index) =>
          {
            if (index > 0) return `${result},${encodeURIComponent(cur)}`;
            return `${encodeURIComponent(cur)}`;
          }, "");
          str.push(`${encodeURIComponent(p)}=${queryValue}`);
        }
      }
      else
      {
        str.push(`${encodeURIComponent(p)}=${encodeURIComponent(obj[p])}`);
      }
    }
  }
  return str.join("&");
}
