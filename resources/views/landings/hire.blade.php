<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <title>Interactor</title>
        <!-- Font Awesome icons (free version)-->
        <script src="https://use.fontawesome.com/releases/v5.12.1/js/all.js" crossorigin="anonymous"></script>
        <!-- Google fonts-->
        <link href="https://fonts.googleapis.com/css?family=Merriweather+Sans:400,700" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css?family=Merriweather:400,300,300italic,400italic,700,700italic" rel="stylesheet" type="text/css" />
        <!-- Third party plugin CSS-->
        <link href="https://cdnjs.cloudflare.com/ajax/libs/magnific-popup.js/1.1.0/magnific-popup.min.css" rel="stylesheet" />
        <!-- Core theme CSS (includes Bootstrap)-->
        <link href="{{ asset('css/styles.css') }}" rel="stylesheet"/>
    </head>
    <body id="page-top">
        <!-- Navigation-->
        <!--
        <nav class="navbar navbar-expand-lg navbar-light fixed-top py-3" id="mainNav">
            <div class="container">
                <a class="navbar-brand js-scroll-trigger" href="#page-top">Start Bootstrap</a><button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
                <div class="collapse navbar-collapse" id="navbarResponsive">
                    <ul class="navbar-nav ml-auto my-2 my-lg-0">
                        <li class="nav-item"><a class="nav-link js-scroll-trigger" href="#about">About</a></li>
                        <li class="nav-item"><a class="nav-link js-scroll-trigger" href="#services">Services</a></li>
                        <li class="nav-item"><a class="nav-link js-scroll-trigger" href="#portfolio">Portfolio</a></li>
                        <li class="nav-item"><a class="nav-link js-scroll-trigger" href="#contact">Contact</a></li>
                    </ul>
                </div>
            </div>
        </nav>
        -->
        <!-- Masthead-->
        <header class="masthead">
            <div class="container h-100">
                <div class="row h-100 align-items-center justify-content-center text-center">
                    <div class="col-lg-10 align-self-end">
                        <h1 class="text-uppercase text-white font-weight-bold wrap-none">
                            Присоединяйся к Interactor!
                        </h1>
                        <hr class="divider my-4" />
                    </div>
                    <div class="col-lg-8 align-self-baseline">
                        <p class="text-white-75 font-weight-light mb-5">Набираем ребят для работы в стартапе. Мы создаем онлайн кинотеатр интерактивного кино.</p>
                        <p class="text-white-75 font-weight-light mb-5">На выходе хотим получить  <a href="https://eko.com">что-то такое</a></p>
                        <a href="#about">
                            <i class="fas fa-4x fa-angle-double-down text-primary mb-4"></i>
                        </a>
                    </div>
                </div>
            </div>
        </header>
        <!-- About section-->
        <section class="page-section bg-primary" id="about">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-lg-8 text-center">
                        <h2 class="text-white mt-0">Мы ищем тебя если ты: </h2>
                        <hr class="divider light my-4" />
                        <ul class="text-white-50 mb-4">
                            <li>
                                Хочешь делать офигенные вещи
                            </li>
                            <li>
                                Быстро учишься
                            </li>
                            <li>
                                Хочешь получить опыт разработки и освоить новые технологии
                            </li>
                            <li>
                                Готов уделять проекту время
                            </li>
                        </ul>
                        <a href="#services">
                            <i class="fas fa-4x fa-angle-double-down text-white mb-4"></i>
                        </a>
                    </div>
                </div>
            </div>
        </section>
        <!-- Services section-->
        <section class="page-section" id="services">
            <div class="container">
                <h2 class="text-center mt-0">Проект и перспективы</h2>
                <hr class="divider my-4" />
                <div class="row">
                    <div class="col-lg-3 col-md-6 text-center">
                        <div class="mt-5">
                            <i class="fas fa-4x fa-laptop-code text-primary mb-4"></i>
                            <h3 class="h4 mb-2">Наш стэк</h3>
                            <p class="text-muted mb-0">На проекте используются PHP фреймворк Laravel, JS фреймворк VueJS, JS библиотека Paper.js
                            </p>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6 text-center">
                        <div class="mt-5">
                            <i class="fas fa-4x fa-percentage text-primary mb-4"></i>
                            <h3 class="h4 mb-2">Доля</h3>
                            <p class="text-muted mb-0">Если все идет нормально и проект живет, то вы получите долю в компании</p>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6 text-center">
                        <div class="mt-5">
                            <i class="fas fa-4x fa-level-up-alt text-primary mb-4"></i>
                            <h3 class="h4 mb-2">Возможность</h3>
                            <p class="text-muted mb-0">Шанс попасть в крутую историю на моменте ее зарождения</p>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6 text-center">
                        <div class="mt-5">
                            <i class="fas fa-4x fa-graduation-cap text-primary mb-4"></i>
                            <h3 class="h4 mb-2">Бизнес-Акселератор</h3>
                            <p class="text-muted mb-0">Наш проект проходит обучение в бизнес акселераторе b8</p>
                        </div>
                    </div>
                </div>
                <div class="text-center">
                    <a href="#team">
                        <i class="fas fa-4x fa-angle-double-down text-primary mb-4"></i>
                    </a>
                </div>
            </div>
        </section>
        <!-- Team section-->
        <section class="page-section bg-primary" id="team">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-lg-8 text-center">
                        <h2 class="text-white mt-0">Команда: </h2>
                        <hr class="divider light my-4" />
                        <div class="row">
                            <div class="col-lg-3 col-md-6 text-center">
                                <div class="mt-5 text-center">
                                    <img src="{{ asset('images/1.jpg') }}" class="mb-4 avatar"/>
                                    <h3 class="h4 mb-2 text-white">Алексей "superalesha" Илларионов</h3>
                                </div>
                            </div>
                            <div class="col-lg-3 col-md-6 text-center">
                                <div class="mt-5 text-center">
                                    <img src="{{ asset('images/2.png') }}" class="mb-4 avatar"/>
                                    <h3 class="h4 mb-2 text-white">Кирилл "terran" Кычкин</h3>
                                </div>
                            </div>
                        </div>
                        <a href="#task">
                            <i class="fas fa-4x fa-angle-double-down text-white mb-4"></i>
                        </a>
                    </div>
                </div>
            </div>
        </section>
        <!-- Call to action section-->
        <section class="page-section bg-dark text-white" id="task">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-lg-8 text-center">
                        <h2 class="text-white mt-0">Что нужно делать? </h2>
                        <hr class="divider light my-4" />
                        <p class="text-white">
                            Чтобы мы поняли насколько быстро и круто вы умеете впитывать знания и применять их на практике (вы примените те же технологии, что используются на проекте) вам необходимо разработать блог со следующим функционалом до четверга включительно:
                        </p>
                        <ul class="text-white-50 mb-4">
                            <li>
                                Добавление/редактирование новостей
                            </li>
                            <li>
                                Авторизация/Регистрация (используя готовый пакет Laravel)
                            </li>
                            <li>
                                Возможность оставлять комментарии
                            </li>
                            <li>
                                Ставить лайки
                            </li>
                            <li>
                                Категории и так далее добавлять НЕ нужно
                            </li>
                            <li>
                                Получение и отправка данных используя axios
                            </li>
                            <li>
                                Отображение страницы и данных через vuejs
                            </li>
                            <li>
                                Загрузить проект на github
                            </li>
                        </ul>
                        <a href="#contact">
                            <i class="fas fa-4x fa-angle-double-down text-white mb-4"></i>
                        </a>
                    </div>
                </div>
            </div>
        </section>
        <!-- Contact section-->
        <section class="page-section" id="contact">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-lg-8 text-center">
                        <h2 class="mt-0">За дело!</h2>
                        <hr class="divider my-4" />
                        <p class="text-muted mb-5">Готов попробовать? Напиши нам о том, что собираешься попробовать свои силы. Не забудь представиться</p>
                        <p class="text-muted mb-5">Если будут проблемы и вопросы - пиши</p>
                    </div>
                </div>
                <div class="row row-center">
                    <div >
                        <i class="fab fa-whatsapp mb-3 text-muted" style="font-size:15vw;"></i>
                        <hr class="divider my-4" />
                        <a href="https://wa.me/79142900484" style="text-decoration: underline;">+7 (914) 290-04-84</div>
                    </div>
                </div>
            </div>
        </section>
        <!-- Footer-->
        <footer class="bg-light py-5">
            <div class="container"><div class="small text-center text-muted">Copyright © 2020 - LLC Interactor</div></div>
        </footer>
        <!-- Bootstrap core JS-->
        <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.bundle.min.js"></script>
        <!-- Third party plugin JS-->
        <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-easing/1.4.1/jquery.easing.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/magnific-popup.js/1.1.0/jquery.magnific-popup.min.js"></script>
    </body>
</html>
