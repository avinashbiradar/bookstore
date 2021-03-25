const emailPattern = /[a-zA-Z0-9._]+[@]{1}[a-zA-Z120-9]*[.]{1}[a-zA-Z]*$/;
const passwordPattern = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9]).*$/;
const BooknamePattern = /^[A-Z]{1}[a-z ]{3,}$/;
const DescriptionPattern = /^[A-Z a-z ]{3,}$/;
const DiscountedPrice = /^[0-9]{2}$/;
module.exports = {

  isStringValid(bookName) {
    if (bookName.trim().length === 0) {
      return false;
    }
    let regex = new RegExp(BooknamePattern);
    return regex.test(bookName);
  },

  isAuthorValid(author) {
    if (author.trim().length === 0) {
      return false;
    }
    let regex = new RegExp(BooknamePattern);
    return regex.test(author);
  },

  isDescriptionValid(description) {
    if (description.trim().length === 0) {
      return false;
    }
    let regex = new RegExp(DescriptionPattern);
    return regex.test(description);
  },
   
  isPriceValid(price) {
    if (price.trim().length === 0) {
      return false;
    }
    let regex = new RegExp(DiscountedPrice);
    return regex.test(price);
  },

  isQuantityValid(quantity) {
    if (quantity.trim().length === 0) {
      return false;
    }
    let regex = new RegExp(DiscountedPrice);
    return regex.test(quantity);
  },

  isDiscountedPriceValid(discountPrice) {
    if (discountPrice.trim().length === 0) {
      return false;
    }
    let regex = new RegExp(DiscountedPrice);
    return regex.test(discountPrice);
  },

  isemailValid(email) {
    if (email.trim().length === 0) {
      return false;
    }
    let regex = new RegExp(emailPattern);
    return regex.test(email);
  },

  ispasswordValid(password) {
    if (password.trim().length === 0) {
      return false;
    }
    let regex = new RegExp(passwordPattern);
    return regex.test(password);
  },
};
