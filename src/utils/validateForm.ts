export const validateIsNumber = (data: string): boolean => {
    return !Number.isNaN(Number(data)); 
}