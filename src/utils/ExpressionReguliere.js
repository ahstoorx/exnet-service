export const MailRegex =/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/; 
export const passRegex =/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])?[\w~@#$%^&çà'è)(°\/*-+.*+=`|{}:;!.?\"()\[\]-]{8,}$/
export const PhoneRegex = /^(\+\d{1,3})?[- .]?\(?(\d{3})\)?[- .]?(\d{3})[- .]?(\d{4})$/


//funtion to verify mail ? 
export const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};



