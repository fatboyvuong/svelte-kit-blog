<script context="module">
    // export let post;

    export async function load({ url, params, fetch, session, stuff }) {
        // console.log(params);
        // const { params } = page;
        // request post from [url].json.js endpoint
        // const today = new Date();
        const { slug } = params;
        const post = await fetch(`/posts/${slug}.json`).then((r) => r.json()) || {};

        return {
            props: { post }
        }
    }
</script>

<script>
    export let post = {};
</script>

<style>
    :global() {
        padding: 16px;
    }
</style>

<article>
    <h1 class="section-header">
        {post.attributes.title}
    </h1>
    <p>
        {post.attributes.description}
    </p>
    {@html post.html}
</article>