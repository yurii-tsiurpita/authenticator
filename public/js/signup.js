const signupForm = document.querySelector('.signup-form');
const getUserForm = document.querySelector('.get-user-form');
const signupButton = document.querySelector('.signup-form__button');
const getUserButton = document.querySelector('.get-user-form__button');
const getUsersButton = document.querySelector('.get-users-button');

const query = async (data) => {
    const response = await fetch('http://localhost:3033/graphql', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: data
    });

    const responseData = await response.json();
    console.log(responseData);
};

signupButton.addEventListener('click', async e => {
    e.preventDefault();

    const email = document.querySelector('.signup-form__email-input').value;
    const password = document.querySelector('.signup-form__password-input').value;

    const data = JSON.stringify({
        query: `
            mutation ($email: String!, $password: String!) {
                signup(email: $email, password: $password) {
                    id
                    email
                }
            }
        `,
        variables: {
            email,
            password
        }
    });

    await query(data);
});

getUserButton.addEventListener('click', async event => {
    event.preventDefault();

    const email = document.querySelector('.get-user-form__email-input').value;

    const data = JSON.stringify({
        query: `
            query ($email: String!) {
                user(email: $email) {
                    id
                    email
                }
            }
        `,
        variables: {
            email,
        }
    });

    await query(data);
});

getUsersButton.addEventListener('click', async event => {
    event.preventDefault();

    const data = JSON.stringify({
        query: `
            query {
                users {
                    id
                    email
                }
            }
        `,
    });

    await query(data);
});