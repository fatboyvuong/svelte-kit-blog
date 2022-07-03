<script>
	export let title; // prop
	export let description;

	export let url;
</script>

<article>
	<h1>{title}</h1>
	<p>{description}</p>
	<a href={url}>Read more...</a>
</article>
