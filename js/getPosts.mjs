import 'dotenv/config';
async function getPosts() {
    const url = 'https://api.noroff.dev/api/v1/social/posts?_author=true&_reactions=true&_comments=true';
    const res = await fetch(url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${process.env.TOKEN}`,
        },
    })
    const data = await res.json()
    console.log(data)
    return data
}
getPosts()