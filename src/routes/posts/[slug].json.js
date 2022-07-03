import { convertMarkdown } from '$lib/handle-markdown';

export async function get({ params }) {
	const { slug } = params;
	const post = convertMarkdown(`static/posts/${slug}.md`);
	let body = JSON.stringify(post);

	return { body };
}
