import 'dotenv/config';
export default async function login(email, password) {
/*     const email = process.env.EMAIL */
/*     const password =  process.env.PASSWORD */
    const url = 'https://api.noroff.dev/api/v1/social/auth/login';
    const res = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }
        ),
    })
    const data = await res.json()
    return data
}
login()