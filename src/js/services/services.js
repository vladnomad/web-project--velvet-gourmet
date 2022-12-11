const postData = async (url, json) => {
    
    let res = await fetch(url, {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: json
    });

    return await res.json();
};

async function getResource(url) {
    let res = await (fetch(url));

    if (!res.ok) {
        throw new Error(`Could not fetch ${url}, status: ${res.status}`);
    }

    return await res.json();
}

export {postData, getResource};