export const defaultIfNaN = (value: any, defaultValue: any): any => {
    if (value === null) {
        return defaultValue
    }

    const _value = Number(value)

    return isNaN(_value) ? defaultValue : _value
}
