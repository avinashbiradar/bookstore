import {
    emailPattern,
    isStringValid,
    isAuthorValid,
    isDiscountedPriceValid,
    isPriceValid,
    isQuantityValid,
    isNameValid,
    isDescriptionValid,
    isemailValid
} from "../validations/validations";

//   describe('named exports - automatically mocked file with no return values', () => {
//     it('returns the correct value for Method 1', () => {
//       expect(isNameValid()).not.toBe('You have called Method 1')
//       expect(isNameValid()).toBe(undefined)
//     })
// })

// jest.mock('../validations/validations', () => jest.fn().mockImplementation(() => 'You have called a mocked method 1!'))
// describe('default export - module factory with mock implementation mocked file', () => {
//   it('returns the correct value for Method 1', () => {
//     expect(isStringValid()).toBe('You have called a mocked method 1!')
//     expect(isStringValid()).toHaveBeenCalledTimes(1)
//   })
// })

// describe('RegExp: URI', function(){
//     it('should match the expected URI', function(){
//       // include all the various cases to test the regexp against here
//       // example:
//       const emailPatternTest = /[a-zA-Z0-9._]+[@]{1}[a-zA-Z120-9]*[.]{1}[a-zA-Z]*$/;
//       expect(isemailValid(emailPatternTest).test()).toBe(true);
//     });
//   });



describe('stringMatching in arrayContaining', () => {
    const expectedemail = [
        expect.stringMatching(/[a-zA-Z0-9._]+[@]{1}[a-zA-Z120-9]*[.]{1}[a-zA-Z]*$/),
    ];
    const expectedname = [
        expect.stringMatching(/^[A-Z]{1}[a-z ]{3,}$/)
    ];
    const expectedmobile = [
        expect.stringMatching(/^[6-9]{1}[0-9]{9}$/)
    ];
    it('matches even if received contains additional elements', () => {
        expect(['biradaravinash123@gmail.com']).toEqual(
            expect.arrayContaining(expectedemail),
        );
    });
    it('does not match if received does not contain expected elements', () => {
        expect(['biradaravinash123gmail.com']).not.toEqual(
            expect.arrayContaining(expectedemail),
        );
    });
    it('matches even if received contains additional elements', () => {
        expect(['Avinash']).toEqual(
            expect.arrayContaining(expectedname),
        );
    });
    it('does not match if received does not contain expected elements', () => {
        expect(['biradar']).not.toEqual(
            expect.arrayContaining(expectedname),
        );
    });

    it('matches URI', () => {
        const mobileRegEx = /^[6-9]{1}[0-9]{9}$/;
        const mobilenumber = '9923886906'; 
        expect(mobilenumber).toMatch(mobileRegEx);
      });


    it('does not match if received does not contain expected elements', () => {
        expect([1000000]).not.toEqual(
            expect.arrayContaining(expectedmobile),
        );
    });
  

});
