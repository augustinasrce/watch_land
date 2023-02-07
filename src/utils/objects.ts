/**
 * 
 * @param message 
 * @param isLink 
 * @param link 
 * @returns 
 */
export const tableCellObject = (message:string, isLink:boolean, link:string) => {
    return {
        "message":message,
        "isLink":isLink,
        "link":link
    }
}