<template>
	<div>
		<f-input v-model="inputValue"/>
		<p>message: {{ inputValue }}</p>
		<button @click="inputValue++">改变inputValue</button>
	</div>
</template>

<script>
	import fInput from '../components/Input.vue'

	export default {
		name: "home",
		data () {
			return {
				inputValue: ""
			}
		},
		components: {
			fInput
		}
	}
</script>

<style scoped>

</style>
