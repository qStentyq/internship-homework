export default async function messageWithTimeout(message: string) {
    let rtrnMes = ''
     await new Promise((resolve) => {
        setTimeout(() => {
            rtrnMes = message
            resolve(message)
           
        }, 2000)
    })
 
    return rtrnMes
   
}
