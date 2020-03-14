<template>
    <div>
		<form :action="route" method="POST" enctype="multipart/form-data" v-if="option == 'video'">
			<div class="form-group row">
				<div class="col-md-3">
					<label class="col-form-label">Name:</label>
				</div>
				<div class="col-md-9">
					<input type="text" class="form-control" required name="name" />
				</div>
				
			</div>

			<div class="form-group row">
				<div class="col-md-3">
					<label class="col-form-label">Horizontal video:</label>
				</div>
				<div class="col-md-9">
					<input type="file" name="horizontal_video" required class="form-control" />
				</div>
				<div class="col-md-3">
					<label class="col-form-label">Vertical video:</label>
				</div>
				<div class="col-md-9">
					<input type="file" name="vertical_video" class="form-control" />
				</div>
				
			</div>
			<input type="hidden" name="project_id" :value="project_id"/>
			<input type="hidden" name="episode_id" :value="episode_id"/>
			<input type="hidden" name="meta" value="{}"/>
			<input type="hidden" name="_token" :value="token"/>
			<input type="submit" class="btn btn-primary btn-block btn-sm" value="Upload" />
		</form>
		<form :action="route" method="POST" enctype="multipart/form-data" v-if="option == 'episode'">
			<div class="form-group row">
				<div class="col-md-3">
					<label class="col-form-label">Name:</label>
				</div>
				<div class="col-md-9">
					<input type="text" class="form-control" required name="name" />
				</div>
				
			</div>

			<input type="hidden" name="project_id" :value="project_id"/>
			<input type="hidden" name="_token" :value="token"/>
			<input type="submit" class="btn btn-primary btn-block btn-sm" value="Create episode" />
		</form>
		<form :action="route" method="POST" enctype="multipart/form-data" v-if="option == 'page'">
			Вот здесь тебе нужно всякое сделать Витя
			<br /><br />
			<input type="hidden" name="project_id" :value="project_id"/>
			<input type="hidden" name="_token" :value="token"/>
			<input type="submit" value="Create page" />
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
