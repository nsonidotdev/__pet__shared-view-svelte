import { PUBLIC_SERVER_URL } from "$env/static/public";
import type { Load } from "@sveltejs/kit";

export const load: Load = async () => {
    const response = await fetch(PUBLIC_SERVER_URL);
    const data = await response.json();
    console.log(data);

    return {
        users: data.users
    }
}