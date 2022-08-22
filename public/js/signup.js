const signupForm = document.querySelector('.signup-form');

const getResponse = async () => {
    const data = JSON.stringify({
        query: `{
            hello
        }`
    });

    const response = await fetch(
        'http://localhost:3033/graphql',
        {
            method: 'POST',
            body: data,
            headers: {
                'Content-Type': 'application/json'
            },
        }
    );

    const json = await response.json();
    console.log(json);
};

signupForm.addEventListener('submit', e => {
    e.preventDefault();
    const email = document.querySelector('.email-input').value;
    const password = document.querySelector('.password-input').value;
    getResponse();
});