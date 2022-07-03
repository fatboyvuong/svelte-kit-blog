import { convertMarkdown } from '$lib/handle-markdown';

export async function get({ params }) {
	const { slug } = params;
	const post = convertMarkdown(`src/posts/${slug}.md`);
	let body = JSON.stringify(post);

	return { body };
}
