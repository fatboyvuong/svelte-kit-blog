// endpoint.js

import { importMarkdowns, convertToPostPreview } from '$lib/handle-markdown';

let postFiles = importMarkdowns('src/posts/');

// Dynamically add blog post to index file (homepage)
export async function get() {
    // convert markdown to required format
    let posts = postFiles.map((file) => convertToPostPreview(file));

    if (posts) {
        // stringify the result
        let body = JSON.stringify(posts);
        return { body };
    }
    
    return {
        status: 404,
    };
}