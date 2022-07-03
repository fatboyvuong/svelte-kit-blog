import fs from 'fs';
import glob from 'glob';
import fm from 'front-matter';
import { remark } from 'remark';
import html from 'remark-html';
import { rehype } from 'rehype';
// @ts-ignore
import rehypePrism from '@mapbox/rehype-prism';

// Import all markdowns in specified path
export function importMarkdowns(markdownPath) {
	// console.log(process.cwd())
	let fileNames = glob.sync(`${markdownPath}*.md`);
	return fileNames.map((path) => convertMarkdown(path));
}

// Convert markdown to object
export function convertMarkdown(path) {
	// read file
	let file = fs.readFileSync(path, 'utf8');

	// extract front-matter and body
	let { attributes, body } = fm(file);

	// parse body to html with the remark/rehype pipeline
	// @ts-ignore
	let result = remark().use(html).processSync(body).contents;

	// @ts-ignore
	result = rehype().use(rehypePrism).processSync(result).contents;

	return { path, attributes, html: result || body };
}

export function convertToPostPreview(object) {
	// const url = object?.path;
	// create route for post
	const url = object.path.replace('.md', '').replace('src/', '');
	// const url = object.path.replace('.md', '').replace('static/', '');
	return { ...object?.attributes, url };
}
