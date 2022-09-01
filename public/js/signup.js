const signupForm = document.querySelector('.signup-form');
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

signupForm.addEventListener('submit', async e => {
    e.preventDefault();

    const email = document.querySelector('.email-input').value;
    const password = document.querySelector('.password-input').value;

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