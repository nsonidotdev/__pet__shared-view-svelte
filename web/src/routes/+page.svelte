<script lang="ts">
	import { PUBLIC_SERVER_URL } from '$env/static/public';
	import { wait } from '$lib/utils/wait';

	let { data } = $props();
</script>


<div>
	{#each data.users as user}
		<p>{user.email}</p>
	{/each}
</div>