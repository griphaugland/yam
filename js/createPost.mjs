import 'dotenv/config';
async function createPost(inputTitle, inputBody, inputMedia, inputTags) {
    const newPost = {
        title: inputTitle,
        body: inputBody,
        media: inputMedia,
        tags: inputTags.split(" "),
      };
    const url = 'https://api.noroff.dev/api/v1/social/posts/';
    const res = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${process.env.TOKEN}`,
        },
        body: JSON.stringify(newPost)
    })
    const data = await res.json()
    console.log(data)
    return data
}
createPost("testing", "testing", "https://hips.hearstapps.com/hmg-prod/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=0.752xw:1.00xh;0.175xw,0&resize=1200:*", "testing")