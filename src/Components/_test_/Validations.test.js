
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
    const expectedPassword = [
        expect.stringMatching(/^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9]).*$/)
    ];
    const expectedBookDescription = [
        expect.stringMatching( /^[A-Z a-z ]{3,}$/)
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
 
    it('matches mobile number', () => {
        const mobileRegEx = /^[6-9]{1}[0-9]{9}$/;
        const mobilenumber = '9923886906'; 
        expect(mobilenumber).toMatch(mobileRegEx);
      });


    it('does not match if received does not contain expected elements', () => {
        expect([1000000]).not.toEqual(
            expect.arrayContaining(expectedmobile),
        );
    });
  
    it('matches even if received contains additional elements', () => {
        expect(['Avinash123@']).toEqual(
            expect.arrayContaining(expectedPassword),
        );
    });

    it('does not match if received does not contain expected elements', () => {
        expect(['avinash']).not.toEqual(
            expect.arrayContaining(expectedPassword),
        );
    });

    it('matches even if received contains additional elements', () => {
        expect(['This book is great']).toEqual(
            expect.arrayContaining(expectedBookDescription),
        );
    });

    it('does not match if received does not contain expected elements', () => {
        expect(['av']).not.toEqual(
            expect.arrayContaining(expectedBookDescription),
        );
    });

    it('matches discounted price', () => {
        const dpriceRegex = /^[0-9]{2}$/;
        const correctdprice = '99'; 
        const dprice = '999'; 
        expect(dprice).not.toMatch(dpriceRegex);
        expect(correctdprice).toMatch(dpriceRegex);
      });


});
