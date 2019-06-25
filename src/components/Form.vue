<template>
	<form @submit.prevent="submit">
		<p>
			<label for="name">Name:</label>
			<input type="text" name="name" id="name" v-model="email.name"  v-validate="'required|alpha'" :class="{'input': true, 'is-danger': errors.has('name') }">
			<span v-show="errors.has('name')" class="help is-danger">{{ errors.first('name') }}</span>
  	</p>
		<p>
			<label for="email">Email:</label>
			<input type="email" name="email" id="email" v-model="email.from" v-validate="'required|email'" :class="{'input': true, 'is-danger': errors.has('email') }">
			<span v-show="errors.has('email')" class="help is-danger">{{ errors.first('email') }}</span>
 		</p>
		<p>
			<label for="subject">Subject:</label>
			<input type="text" name="subject" id="subject" v-model="email.subject"  v-validate="'required|alpha'" :class="{'input': true, 'is-danger': errors.has('subject') }">
			<span v-show="errors.has('subject')" class="help is-danger">{{ errors.first('subject') }}</span>
 		</p>
		 <p>
			<label for="message">Message:</label>
			<textarea name="message" id="message" v-model="email.message" rows="3"  v-validate="'required|alpha'" :class="{'input': true, 'is-danger': errors.has('message') }" />
			<span v-show="errors.has('message')" class="help is-danger">{{ errors.first('message') }}</span>
			</p>
			<p>
				<button type="submit">SEND</button>
				<button @click="reset">RESET</button>
			</p>
	</form>
</template>

<script>
import Vue from 'vue'
Vue.use(VeeValidate, {
  events: 'change'
})

export default {
	data () {
		return {
			email: this.getEmptyForm()
		}
	},
	methods: {
		submit () {
			console.log(this.email)
		},
		getEmptyForm () {
			return {
				name: null,
				from: null,
				subject: null,
				message: null
			}
		},
		reset (){
			this.email = this.getEmptyForm()
			this.errors.clear()
		}
	}
}
</script>

<style lang="scss" scoped>
.help {
	font-size: 0.7em;
}
.is-danger {
    color: #f22435;
}
</style>


