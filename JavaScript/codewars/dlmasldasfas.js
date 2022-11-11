function removeExclamationMarks(s) {
    let reg = /\!/g;
    return s.replace(reg, "");
}