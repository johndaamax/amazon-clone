const API_KEY = process.env.REACT_APP_API_KEY;
const PROJECT_DB_REST_URL = process.env.REACT_APP_PROJECT_DB_REST_URL;

export async function loginWithEmail({ email, password }) {
    try {
        //send request to Firebase to login
        const loginRes = await fetch(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${API_KEY}`,
            {
                method: 'POST',
                body: JSON.stringify({
                    email,
                    password,
                    returnSecureToken: true
                }),
                headers: { 'Content-Type': 'application/json' }
            })
        if (loginRes.ok) {
            const data = await loginRes.json()
            //after succesful login, query the DB using the returned localId of the user to fetch other details, like the name
            const res = await fetch(`${PROJECT_DB_REST_URL}/users.json?orderBy="$key"&startAt="${data.localId}"&limitToFirst=1`)
            if (res.ok) {
                const user = await res.json();
                return ({ user: { ...data, ...user[data.localId] } })
            } else {
                throw new Error('Unable to match user information in our database with the provided details. Try again using different credentials.')
            }
        } else {
            throw new Error('Unable to login. Please try again with the correct data.')
        }
    } catch (error) {
        return {
            error: error.message
        }
    }
}

export async function signupNewUser({ name, email, password }) {
    try {
        const signupRes = await fetch(`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${API_KEY}`,
            {
                method: 'POST',
                body: JSON.stringify({
                    email,
                    password,
                    returnSecureToken: true
                }),
                headers: { 'Content-Type': 'application/json' }
            })
        if (signupRes.ok) {
            const data = await signupRes.json()
            //attempt to save user information to DB
            const res = await fetch(`${PROJECT_DB_REST_URL}/users.json`,
                {
                    method: 'PATCH',
                    body: JSON.stringify({
                        [data.localId]: {
                            name,
                            email
                        }
                    }),
                    headers: { 'Content-Type': 'application/json' }
                })
            if (res.ok) {
                const user = await res.json();
                /** user has the structure of
                 *  {
                 *      [data.localId]: {
                 *          email: .....
                 *          name: .....
                 *  }}
                 * 
                 */
                return ({ user: { ...data, ...user[data.localId] } })
            } else {
                //Fired when there is an error saving user to the database. Should not happen. Will cause state mismatch between auth server and user database!!!
                throw new Error('Error in saving user to the database. Try signing up again.')
            }
        } else {
            throw new Error('Failed to signup. Please try again!')
        }
    } catch (error) {
        return {
            error: error.message
        }
    }
}

export async function changePassword({ idToken, password, returnSecureToken }) {
    try {
        const response = await fetch(`https://identitytoolkit.googleapis.com/v1/accounts:update?key=${API_KEY}`,
            {
                method: 'POST',
                body: JSON.stringify({
                    idToken,
                    password,
                    returnSecureToken
                }),
                headers: { 'Content-Type': 'application/json' }
            })
        if (response.ok) {
            const data = await response.json()
            console.log(data)
            return { user: data }
        } else {
            throw new Error('Error changing passwords.')
        }

    } catch (error) {
        return {
            error: error.message
        }
    }
}