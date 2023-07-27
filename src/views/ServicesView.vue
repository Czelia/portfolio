<template>
	<div>
		<h2 class="opacity-70 uppercase">THE DIGITAL MAGIC</h2>
		<h1 class="uppercase">CAPTIVATING DESIGN, <br />POWERFUL DEVELOPMENT.</h1>
		<p class="text-sm mt-4">
			Unleash the power of captivating UI design and web development. From
			visually stunning interfaces to seamless user experiences, I bring your
			vision to life with creativity and technical expertise. Let's collaborate
			and create a digital masterpiece.
		</p>
		<div class="container-services flex gap-3 mt-4">
			<div class="boxChoice flex items-center flex-1">
				<div class="flex items-center pr-1">
					<MagicPenIllustration />
				</div>
				<div>
					<h3 class="font-semibold">UI DESIGN</h3>
					<p class="font-sherif">Echanting interfaces that mesmerize.</p>
				</div>
			</div>
			<div class="boxChoice flex-1">
				<div class="flex items-center pr-1"><CodeIllustration /></div>
				<div>
					<h3 class="font-semibold">FRONT END DEVELOPMENT</h3>
					<p class="font-sherif">Building user-friendly website interfaces.</p>
				</div>
			</div>
		</div>
		<button class="button gold">Let's collaborate</button>
	</div>
</template>
<script>
	import CodeIllustration from "../components/illustrations/CodeIllustration.vue";
	import MagicPenIllustration from "../components/illustrations/MagicPenIllustration.vue";
	export default {
		name: "ServicesView",
		components: {
			CodeIllustration,
			MagicPenIllustration,
		},
	};
</script>
