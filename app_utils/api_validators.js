function pinValidator(pin) {
    if (pin.length == 4) {
        return true;
    } else {
        throw Error("Invalid pin. Please enter 4 digits.")
    }
}

function BFIDValidator(bfid) {
    if (bfid.match(/^[A-Za-z0-9]{16}/)) {
        return true
    } else {
        throw Error("Invalid BFID. Please enter your 16-character unique ID.")
    }
}

function mobileEntryValidator(mobile) {
    if (mobile.match(/^(0)([0-9]){10}/)) {
        return true
    } else {
        throw Error("Invalid mobile number. Mobile must 11 digits starting with 0.");
    }
}

function emailEntryValidator(email) {
    // General Email Regex (RFC 5322 Official Standard)
    if (email.match(/(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/)) {
        return true
    } else {
        throw Error("Invalid email address.");
    }
}

module.exports = {
    pinValidator,
    BFIDValidator,
    mobileEntryValidator,
    emailEntryValidator,
}