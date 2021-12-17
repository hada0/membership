const chai = require('chai')
const assert = chai.assert
const expect = chai.expect
const apiValidator = require('../app_utils/api_validators');

describe('apiValidator pinValidator()', () => {

    it('should allow 4-digits', function() {
        expect(apiValidator.pinValidator("1234", true)).to.be.true
    })

    it('should disallow < 4 characters', function() {
        assert.throws(() => { apiValidator.pinValidator("123") }, Error, "Invalid pin. Please enter 4 digits.")
    }) 

})

describe('apiValidator BFIDValidator()', () => {

    it('should allow 16 numeric characters', function() {
        expect(apiValidator.BFIDValidator("1234567890123456", true)).to.be.true
    })

    it('should allow 16 alpha characters', function() {
        expect(apiValidator.BFIDValidator("aaAAbbBBccCCddDD", true)).to.be.true
    })

    it('should disallow < 16 characters', function() {
        assert.throws(() => { apiValidator.BFIDValidator("123") }, Error, "Invalid BFID. Please enter your 16-character unique ID.")
    }) 

    it('should disallow > 16 characters.', function() {
        assert.throws(() => { apiValidator.BFIDValidator("!aaAAbbBBccCCddDDee") }, Error, "Invalid BFID. Please enter your 16-character unique ID.")
    })

    it('should disallow special characters.', function() {
        assert.throws(() => { apiValidator.BFIDValidator("!abscdefghijklmn") }, Error, "Invalid BFID. Please enter your 16-character unique ID.")
    })

})

describe('apiValidator mobileEntryValidator()', () => {

    it('should allow 11 numeric characters', function() {
        expect(apiValidator.mobileEntryValidator("01234567890", true)).to.be.true
    })

    it('should disallow entries that do not lead with 0', function() {
        assert.throws(() => { apiValidator.mobileEntryValidator("12345678901") }, Error, "Invalid mobile number. Mobile must 11 digits starting with 0.")
    }) 

    it('should disallow < 11 digits.', function() {
        assert.throws(() => { apiValidator.mobileEntryValidator("1234567") }, Error, "Invalid mobile number. Mobile must 11 digits starting with 0.")
    })

    it('should disallow > 11 digits.', function() {
        assert.throws(() => { apiValidator.mobileEntryValidator("1234567890123") }, Error, "Invalid mobile number. Mobile must 11 digits starting with 0.")
    })

    it('should disallow numeric characters.', function() {
        assert.throws(() => { apiValidator.mobileEntryValidator("12345abc901") }, Error, "Invalid mobile number. Mobile must 11 digits starting with 0.")
    })

})

describe('apiValidator emailEntryValidator()', () => {
    //TODO: Add more test coverage in this validator.

    it('should allow a valid email address format', function() {
        expect(apiValidator.emailEntryValidator("abc@123.com", true)).to.be.true
    })

    it('should disallow email without the @ symbol', function() {
        assert.throws(() => { apiValidator.emailEntryValidator("123.com") }, Error, "Invalid email address.")
    })

})
