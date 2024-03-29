import axios from "axios";

const API_HOST_PREFIX = process.env.REACT_APP_API_HOST_PREFIX;

const onGlobalSuccess = (response) => {
    /// Should not use if you need access to anything other than the data
    return response.data;
};

const onGlobalError = (err) => {
    return Promise.reject(err);
};


const serviceEndpoints =  API_HOST_PREFIX;
const storyLines = ( id) => {
    const config = {
        method: "GET",
        url: `${serviceEndpoints}/StoryLines/${id}`,
        withCredentials: true,
        crossdomain: true,
        headers: { "Content-Type": "application/json" }
    };
    return axios(config).then(onGlobalSuccess).catch(onGlobalError);
};

const fullStory = () => {
    const config = {
        method: "GET",
        url: `http://localhost:5195/api/StoryLines`,
        withCredentials: true,
        crossdomain: true,
        headers: { "Content-Type": "application/json" }
    };
    return axios(config).then(onGlobalSuccess).catch(onGlobalError);
};

const services = {
    storyLines,
    fullStory
}

export default services;