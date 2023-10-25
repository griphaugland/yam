async function login() {
    const email = process.env.EMAIL
    const password =  process.env.PASSWORD
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
    console.log(data)
    localStorage.setItem('token', data.accessToken)
}
login()