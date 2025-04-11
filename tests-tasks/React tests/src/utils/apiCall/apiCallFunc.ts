
export default async function apiCallFunc(apiLink: string) {
    console.log(`API Call to: ${apiLink}`)  
    
    await fetch(apiLink)
        .then((response) => {
            return response.json();
        })
        .catch((error) => {
            console.error('Error:', error);
        }
        )
        .then((data) => {
            console.log('Success:', data);
        }
        );
}



