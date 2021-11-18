setInputFilter($("#zoom"), function(value) {
    return /^\d*$/.test(value) && (value === "" || parseInt(value) <= 500); });