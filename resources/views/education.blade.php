@extends('layouts.app')

@section('style')
<style>
body {
	background: #1b1b1b;
}

.header {
	height: 100vh;
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 0 100px;
}

.wrapper {
	width: 1000px;
	margin: 0 auto;
}


.level-2 {
	background: #272727;
}

.interactive {
	border: 5px solid #90c9f9;
	padding: 1.5rem;
}
</style>
@endsection

@section('content')
<div style="padding: 50px 100px">
	<h1 class="text-center display-4">Математика</h1>
	<div class="row">
		<div class="col-md-6">
			<p>До:</p>
			<img src="/images/math.png" class="w-100" />
		</div>
		<div class="col-md-6">
			<p>После:</p>
			<div class="p-3 level-2">
				<h1>Что такое умножение?</h1>
				<p class="mb-5">Это когда мы складываем число несколько раз.</p>
				<div class="interactive">
					5 * 
					<input type="text" v-model="math" style="width: 20px" maxlength="1" /> 
					=
					<span v-for="i in math" :key="i">
						5
						<template v-if="i < math">+</template>
					</span>
					=
					@{{ mathSum }}
				</div>
				<p class="mb-5">Если мы умножаем - на +, получится -. Если же - на -, получится +.</p>
				<div class="interactive">
					
					<input type="text" v-model="math2_1" style="width: 20px; text-align: center" maxlength="1" /> 
					2
					*
					<input type="text" v-model="math2_2" style="width: 20px; text-align: center" maxlength="1" /> 
					3
					=
					@{{ math2 }}
					6
				</div>
			</div>
		</div>
	</div>
</div>
@endsection

@section('script')
<script type="text/javascript">
	var mix = {
		data: {
			math: 3,
			math2_1: "-",
			math2_2: "+",
		},
		watch: {
			math(n) {
				this.math = parseInt(n);
			}
		},
		computed: {
			mathSum() {
				return 5 * this.math;
			},
			math2() {
				let res = "-";
				if(this.math2_1 == "-" && this.math2_2 == "-") res = "+";
				return res;
			}
		}
	}
</script>
@endsection

{{-- 
@section('title')
Создавай страницы своих уроков!
@endsection



@section('content')
<div class="wrapper">
	<span>interactor</span>
</div>

<div class="header">
	<div class="text-center">
		
		<h1 class="display-4">Создавать вовлекающие онлайн-уроки<br />теперь можно быстро и легко</h1>
		<p>interactor &mdash; платформа для создания и публикации уроков в формате интерактивных лонгридов</p>
	</div>
</div>

<div>
	формулировка проблемы - вовлеченность, процент отказа - мб даже вообще заходить отсюда "чтобы повысить процент дохождения курса вы можете либо делать качественные видосы либо юзать нас" - и в этой сравнительной таблице прям + -, то что видос всегда долго, темп односторонний
	видео - качественный продакшн сделать сложно
</div>
<div>
	до после графики изменения процента отказов на примере айти школы (что то типа 5%)
</div>
<div>
	анализ потери инетерса в других источниках и почему у нас будет лучше
	интерактор - интерактив, взаиможействие, двусторонняя коммуникация
</div>

<div>
	было после
</div>
<div>
	call to action
</div>
@endsection

@section('script')
<script type="text/javascript">
	
</script>
@endsection
--}}
{{-- 
1. Можно как использовать только эмбеды частично, так и страницу можно заэмбедить, так и вообще просто на нашей платформе





параграф из учебника - нужен не оформленный контент на тильде, а просто юбой образовательный контент
чем мы 

аудитория могут быть офлайн кружки у которых в принципе не было онлайн курсов





конструктор:
1. под каждым блоком возможность кликнуть "я не понял"
2. редактирование сразу на превью (то есть на странице)
3. копировать блоки, всталвять в другой лонгрид
4. просто перетащить картинку
5. автоплеить видос (можно снимать самому тоже)

	- Размер ставится по максимуму, каждый раз приходилось уменьшать размер. Причем, эти инструменты редактирования масштабов копец неудобные
	- много разных элементов, которые нам не нужны. тоже с весом видео проблема.
	- Невозможно поставить на весь сайт в тексте по дефолту какой то размер текста или цвет. Надо каждый блок самим менять
--}}