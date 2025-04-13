import { interface__CreateAccount } from "../types/interface__CreateAccount"

const createAccount = async (data:interface__CreateAccount) => {
    const serverResponse = await fetch(`${import.meta.env.VITE_SERVER_GATE}/create-account`,{
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({
            data
        })
    })
    .then(res => res.json())
    .then(data => {
        return data
    })

    return serverResponse
}

export default createAccount