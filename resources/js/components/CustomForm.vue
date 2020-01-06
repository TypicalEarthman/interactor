<template>
    <div>
		<form :action="route" method="POST" enctype="multipart/form-data" v-if="option == 'video'">
			Name:
			<br />
			<input type="text" name="name" />
			<br /><br />
			File
			<br />
			<input type="file" name="video" />
			<br /><br />
			<input type="hidden" name="project_id" :value="project_id"/>
			<input type="hidden" name="episode_id" :value="episode_id"/>
			<input type="hidden" name="_token" :value="token"/>
			<input type="submit" value="Upload video" />
		</form>
		<form :action="route" method="POST" enctype="multipart/form-data" v-if="option == 'episode'">
			Name:
			<br />
			<input type="text" name="name" />
			<br /><br />
			<input type="hidden" name="project_id" :value="project_id"/>
			<input type="hidden" name="_token" :value="token"/>
			<input type="submit" value="Create episode" />
		</form>
    </div>
</template>

<script>
export default {
    
    data () {
        return {
        }
    },
    props: {
        option: String,
        project_id: String,
        episode_id: String,
        route: String,
        token: String
    },
    methods: {
    },
    mounted() {
    }
}
</script>
