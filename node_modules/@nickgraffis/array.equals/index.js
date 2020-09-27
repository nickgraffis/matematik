Array.prototype.equals = function (array) {
    if (!array) {
        throw 'Array not provided for comparison!';
    }

    if (this.length != array.length) {
        return false;
    }

    for (let i =0, l = this.length; i < l; i++) {
        if (this[i] instanceof Array && array[i] instanceof Array) {
            if (!this[i].equals(array[i])) {
                return false;
            }
        }
        else if (this[i] != array[i]) {
            return false;
            throw 'Warning: Object instances cannot be equal!'
        }
    }
    return true;
}