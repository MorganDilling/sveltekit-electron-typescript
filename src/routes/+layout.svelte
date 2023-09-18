<script lang="ts">
</script>

<svelte:head>
	<title>Sveltekit + Electron</title>
</svelte:head>

<div class="dragbar" />

<slot />

<style>
	.dragbar {
		-webkit-app-region: drag;
		position: absolute;
		z-index: 100;
		height: 40px;
		width: 100%;
	}
</style>
