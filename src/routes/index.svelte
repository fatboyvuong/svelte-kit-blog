<!-- /src/routes/index.svelte -->
<script context="module">
	// @ts-nocheck
	// Load dynamic posts
	export async function load({ fetch }) {
		// Special FetchAPI which invoking endpoints during server-side rendering
		// https://kit.svelte.dev/docs/web-standards#fetch-apis
		const posts = await fetch('/post.json').then((res) => {
			return res.json();
		});
		// const res = await fetch("http://localhost:3000/src/routes/index.json")

		return {
			props: { posts }
		};
		// if (res.ok) {
		//     const posts = await res.json();
		//    return {
		//        props: { posts },
		//    }
		// }

		// return {
		//     status: res.status,
		//     error: new Error('Cannot fetch posts'),
		//     props: { posts: [] },
		// }
	}
</script>

<script>
	import PostCard from '../components/post-card.svelte';
	export let posts = [];
</script>

<svelte:head>
	<title>My Blog</title>
</svelte:head>

<main>
	<h1>Posts</h1>

	<!-- <p>Here will we place all posts</p> -->
	{#if posts}
		{#each posts as post, index}
			<!-- <PostCard title={post.title} description={post.description} /> -->
			<!-- or -->
			<PostCard title={post.title} description={post.description} url={post.url} />
		{/each}
	{/if}
</main>

<style>
	:global(a) {
		color: black;
	}

	main {
		padding: 16px;
	}
</style>
