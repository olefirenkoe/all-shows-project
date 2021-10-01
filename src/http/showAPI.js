import {$host} from "./index";

export const fetchShows = async () => {
    const {data} = await $host.get('shows', {params: 'page=5'});
    return data;
}

export const fetchOneShow = async (id) => {
    const {data} = await $host.get('shows/' + id);
    return data;
}